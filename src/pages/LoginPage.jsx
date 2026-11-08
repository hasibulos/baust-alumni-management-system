import React, { useState } from 'react';
import { ArrowLeft, ShieldCheck, GraduationCap, School } from 'lucide-react';

export default function LoginPage({ onLogin, onNavigate }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Default to alumni if regular email, or admin if admin keyword
    if (email.toLowerCase().includes('admin')) {
      onLogin('admin');
    } else if (email.toLowerCase().includes('student')) {
      onLogin('student');
    } else {
      onLogin('alumni');
    }
  };

  return (
    <div className="min-h-screen bg-[#f6f5fc] flex items-center justify-center p-3 sm:p-6 md:p-8">
      <div className="bg-white rounded-3xl border border-[#e3e0f0] shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden">
        {/* Left Branding Side */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#2a1a63] via-[#3d277d] to-[#5b3fa8] p-6 sm:p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#7cc6f0] flex items-center justify-center rounded-[9px] size-9 shrink-0">
                <span className="font-bold text-[#2a1a63] text-lg">B</span>
              </div>
              <span className="font-bold text-lg text-white">BAUST Alumni</span>
            </div>

            <div className="space-y-3 pt-6">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                Welcome back to your <br />
                <span className="text-[#9adbf7]">alumni network.</span>
              </h2>
              <p className="text-xs text-[#e4dffa] leading-relaxed">
                Log in to see the verified directory, participate in reunion events, collaborate on jobs and browse the forum.
              </p>
            </div>
          </div>

          <div className="text-[11px] text-[#c9c1f0] pt-8 border-t border-white/10 relative z-10">
            BAUST, Saidpur · Alumni Affairs Office
          </div>

          {/* Decorative shapes */}
          <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-[#7cc6f0]/10 blur-xl"></div>
        </div>

        {/* Right Form Side */}
        <div className="md:col-span-7 p-6 sm:p-8 md:p-12 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-[#1e1a3c]">Log in</h3>
                <p className="text-xs text-[#69668a] mt-0.5">Enter your verified details to continue.</p>
              </div>
              <button
                onClick={() => onNavigate('landing')}
                className="text-xs font-semibold text-[#5b3fa8] hover:text-[#412882] flex items-center gap-1"
              >
                <ArrowLeft className="size-3.5" />
                <span>Home</span>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div>
                <label className="block font-semibold text-[#1e1a3c] mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                />
              </div>

              <div>
                <div className="flex items-center justify-between mb-1">
                  <label className="font-semibold text-[#1e1a3c]">Password</label>
                  <a href="#" onClick={(e) => { e.preventDefault(); alert("Password reset link sent to registered email!"); }} className="text-[#5b3fa8] hover:underline">
                    Forgot password?
                  </a>
                </div>
                <input
                  type="password"
                  required
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-3.5 py-2.5 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="remember"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="rounded text-[#5b3fa8] focus:ring-[#5b3fa8]"
                />
                <label htmlFor="remember" className="text-[#69668a] cursor-pointer">Remember me on this browser</label>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#5b3fa8] hover:bg-[#4a3290] text-white font-bold rounded-xl transition-all shadow-md text-sm mt-2"
              >
                Log in
              </button>
            </form>

            {/* Quick Demo Logins for Examiner / Teacher Evaluation */}
            <div className="mt-6 pt-5 border-t border-[#e3e0f0]">
              <p className="text-[11px] font-semibold text-[#69668a] uppercase tracking-wider mb-2.5 text-center">
                One-Click Role Login for Presentation:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => onLogin('admin')}
                  className="p-2 border border-[#e3e0f0] hover:border-[#5b3fa8] hover:bg-[#ece7fa] rounded-lg text-left transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-[#5b3fa8] font-bold text-[11px]">
                    <ShieldCheck className="size-3.5" />
                    <span>Alumni Admin</span>
                  </div>
                  <p className="text-[10px] text-[#69668a]">Full admin panel</p>
                </button>

                <button
                  type="button"
                  onClick={() => onLogin('alumni')}
                  className="p-2 border border-[#e3e0f0] hover:border-[#5b3fa8] hover:bg-[#ece7fa] rounded-lg text-left transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-[#5b3fa8] font-bold text-[11px]">
                    <GraduationCap className="size-3.5" />
                    <span>Rahim (Alumni)</span>
                  </div>
                  <p className="text-[10px] text-[#69668a]">12th batch CSE</p>
                </button>

                <button
                  type="button"
                  onClick={() => onLogin('student')}
                  className="p-2 border border-[#e3e0f0] hover:border-amber-500 hover:bg-amber-50 rounded-lg text-left transition-colors"
                >
                  <div className="flex items-center gap-1.5 text-amber-700 font-bold text-[11px]">
                    <School className="size-3.5" />
                    <span>Student</span>
                  </div>
                  <p className="text-[10px] text-[#69668a]">No Admin Access</p>
                </button>
              </div>
            </div>
          </div>

          <div className="pt-4 text-center text-xs text-[#69668a]">
            New here?{' '}
            <button
              onClick={() => onNavigate('register')}
              className="text-[#5b3fa8] font-bold hover:underline"
            >
              Register your account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
