import os
import sys

# Force UTF-8 encoding on Windows console if supported
if sys.platform == 'win32':
    try:
        sys.stdout.reconfigure(encoding='utf-8', errors='replace')
        sys.stderr.reconfigure(encoding='utf-8', errors='replace')
    except Exception:
        pass

import subprocess
import time
import re
import webbrowser
import signal

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
CLOUDFLARED_EXE = os.path.join(BASE_DIR, "cloudflared.exe")
CLOUDFLARED_URL = "https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe"
PORT = 3000

def log(msg, symbol="*"):
    print(f"[{symbol}] {msg}")

def ensure_dependencies():
    node_modules = os.path.join(BASE_DIR, "node_modules")
    if not os.path.exists(node_modules):
        log("Dependencies not found. Running npm install...", "INSTALL")
        cmd = "npm install" if os.name == 'nt' else ["npm", "install"]
        subprocess.run(cmd, cwd=BASE_DIR, shell=(os.name == 'nt'), check=True)
        log("Dependencies installed successfully!", "OK")

def ensure_cloudflared():
    if os.path.exists(CLOUDFLARED_EXE):
        return CLOUDFLARED_EXE
    
    import shutil
    sys_cf = shutil.which("cloudflared")
    if sys_cf:
        return sys_cf

    log("Downloading cloudflared tunnel client (one-time setup)...", "DOWNLOAD")
    import urllib.request
    urllib.request.urlretrieve(CLOUDFLARED_URL, CLOUDFLARED_EXE)
    log("cloudflared downloaded successfully!", "OK")
    return CLOUDFLARED_EXE

def main():
    os.chdir(BASE_DIR)
    
    print("\n" + "="*70)
    print("   BAUST Alumni Management System (CSE 3210 - ISD Project)")
    print("="*70 + "\n")

    ensure_dependencies()
    cf_path = ensure_cloudflared()

    log(f"Starting Vite Web Server on port {PORT}...", "VITE")
    
    # Start Vite dev server
    vite_cmd = "npx vite --port 3000 --host 0.0.0.0"
    vite_proc = subprocess.Popen(
        vite_cmd,
        cwd=BASE_DIR,
        shell=True,
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL
    )

    time.sleep(2)

    log("Starting Cloudflare Public Tunnel...", "TUNNEL")
    
    cf_cmd = [cf_path, "tunnel", "--url", f"http://127.0.0.1:{PORT}"]
    cf_proc = subprocess.Popen(
        cf_cmd,
        cwd=BASE_DIR,
        stdout=subprocess.PIPE,
        stderr=subprocess.STDOUT,
        text=True,
        bufsize=1,
        encoding='utf-8',
        errors='replace'
    )

    public_url = None
    url_pattern = re.compile(r"https://[a-zA-Z0-9-]+\.trycloudflare\.com")

    start_time = time.time()
    while time.time() - start_time < 30:
        line = cf_proc.stdout.readline()
        if not line and cf_proc.poll() is not None:
            break
        
        match = url_pattern.search(line)
        if match:
            public_url = match.group(0)
            break

    if not public_url:
        public_url = f"http://localhost:{PORT}"

    # Print clean banner
    print("\n" + "#"*70)
    print("   >>> SYSTEM IS LIVE & ACCESSIBLE WORLDWIDE! <<<")
    print("#"*70)
    print(f"\n   >>> Public Live Link:   {public_url}")
    print(f"   >>> Local Browser Link: http://localhost:{PORT}\n")
    print("="*70)
    print("   Test Credentials / Roles Available (1-Click Login):")
    print("     - Alumni Admin:   Admin (Alumni Affairs Office)")
    print("     - Alumnus:        Rahim Islam (Batch 6 - Lead SE @ Grab)")
    print("     - Student:        Tanvir Hasan (Batch 8 - Restricted Admin)")
    print("="*70)
    print("   [!] Keep this terminal window open while testing.")
    print("   [!] Press Ctrl + C anytime to stop the server.\n")

    if public_url.startswith("https://"):
        try:
            webbrowser.open(public_url)
        except Exception:
            pass

    def cleanup(signum=None, frame=None):
        print("\n\n>>> Stopping server and tunnel...")
        try:
            cf_proc.terminate()
            cf_proc.kill()
        except Exception:
            pass
        try:
            vite_proc.terminate()
            vite_proc.kill()
            if os.name == 'nt':
                subprocess.run(f"taskkill /F /T /PID {vite_proc.pid}", shell=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        except Exception:
            pass
        print(">>> Shutdown complete. Goodbye!\n")
        sys.exit(0)

    signal.signal(signal.SIGINT, cleanup)
    signal.signal(signal.SIGTERM, cleanup)

    try:
        while True:
            time.sleep(1)
            if vite_proc.poll() is not None or cf_proc.poll() is not None:
                log("One of the services stopped.", "EXIT")
                break
    except KeyboardInterrupt:
        cleanup()

if __name__ == "__main__":
    main()
