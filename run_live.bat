@echo off
TITLE BAUST Alumni Management System - Live Runner
COLOR 0B

echo ======================================================================
echo    BAUST Alumni Management System (CSE 3210 - ISD Project)
echo    Starting Local Server + Cloudflare Live Tunnel...
echo ======================================================================
echo.

cd /d "%~dp0"

:: Check if Python is available
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    python run_live.py
    goto end
)

where py >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    py run_live.py
    goto end
)

:: Fallback if Python is not installed
echo [!] Python not found in PATH. Running directly via Node.js / Cloudflare...
echo.

if not exist "node_modules" (
    echo [*] Installing npm dependencies...
    call npm install
)

if not exist "cloudflared.exe" (
    echo [*] Downloading cloudflared.exe...
    powershell -Command "Invoke-WebRequest -Uri 'https://github.com/cloudflare/cloudflared/releases/latest/download/cloudflared-windows-amd64.exe' -OutFile 'cloudflared.exe'"
)

echo [*] Starting Vite server on port 3000...
start /b npx vite --port 3000 --host 0.0.0.0

timeout /t 2 /nobreak >nul

echo [*] Launching Cloudflare Tunnel...
echo.
echo ======================================================================
echo    Local Link:  http://localhost:3000
echo    Public Link: Will appear below in the cloudflared output:
echo ======================================================================
echo.

cloudflared.exe tunnel --url http://127.0.0.1:3000

:end
echo.
echo Server stopped.
pause
