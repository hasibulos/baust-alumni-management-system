import React, { useState } from 'react';
import { ShieldCheck, GraduationCap, School, CheckCircle2, ChevronUp, ChevronDown, Sparkles } from 'lucide-react';

export default function RoleSwitcher({ currentRole, setCurrentRole, notification }) {
  const [isOpen, setIsOpen] = useState(false);

  // If user is guest and on landing/login/register, show a tiny unobtrusive floating pill
  const getRoleLabel = () => {
    if (currentRole === 'admin') return 'Alumni Admin';
    if (currentRole === 'student') return 'Student (No Admin)';
    if (currentRole === 'alumni') return 'Alumnus (Rahim)';
    return 'Guest';
  };

  const getRoleBadgeStyle = () => {
    if (currentRole === 'admin') return 'bg-[#17608c] text-[#e1f2fc] border-[#7cc6f0]';
    if (currentRole === 'student') return 'bg-amber-600 text-amber-50 border-amber-300';
    if (currentRole === 'alumni') return 'bg-[#5b3fa8] text-white border-[#7cc6f0]';
    return 'bg-[#2a1a63] text-[#c9c1f0] border-white/20';
  };

  return (
    <>
      {/* Floating Demo Role Switcher (Non-intrusive, no duplicate Logout button) */}
      <div className="fixed bottom-4 right-4 z-50">
        {/* Expanded Role Selection Popover */}
        {isOpen && (
          <div className="mb-2 bg-[#1e1a3c] text-white p-3.5 rounded-2xl shadow-2xl border border-[#5b3fa8]/80 w-64 space-y-2 animate-in fade-in slide-in-from-bottom-2 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-[#312e52]">
              <span className="text-[11px] font-bold text-[#7cc6f0] uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="size-3 text-[#7cc6f0]" />
                ISD 1-Click Role Demo
              </span>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-xs text-[#69668a] hover:text-white"
              >
                ✕
              </button>
            </div>

            <div className="space-y-1.5">
              <button
                onClick={() => {
                  setCurrentRole('admin');
                  setIsOpen(false);
                }}
                className={`w-full p-2 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all ${
                  currentRole === 'admin'
                    ? 'bg-[#7cc6f0] text-[#1e1a3c] font-bold shadow-sm'
                    : 'text-[#d9d3f5] hover:bg-[#2a2450]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <ShieldCheck className="size-4" />
                  <div>
                    <p className="leading-tight">Alumni Admin</p>
                    <p className="text-[10px] opacity-80">Full Alumni Affairs Office</p>
                  </div>
                </div>
                {currentRole === 'admin' && <span className="size-2 rounded-full bg-[#1e1a3c]"></span>}
              </button>

              <button
                onClick={() => {
                  setCurrentRole('alumni');
                  setIsOpen(false);
                }}
                className={`w-full p-2 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all ${
                  currentRole === 'alumni'
                    ? 'bg-[#5b3fa8] text-white font-bold shadow-sm'
                    : 'text-[#d9d3f5] hover:bg-[#2a2450]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <GraduationCap className="size-4" />
                  <div>
                    <p className="leading-tight">Alumnus (Rahim)</p>
                    <p className="text-[10px] opacity-80">Batch 6 · Verified Member</p>
                  </div>
                </div>
                {currentRole === 'alumni' && <span className="size-2 rounded-full bg-white"></span>}
              </button>

              <button
                onClick={() => {
                  setCurrentRole('student');
                  setIsOpen(false);
                }}
                className={`w-full p-2 rounded-xl text-left text-xs font-semibold flex items-center justify-between transition-all ${
                  currentRole === 'student'
                    ? 'bg-amber-400 text-[#1e1a3c] font-bold shadow-sm'
                    : 'text-[#d9d3f5] hover:bg-[#2a2450]'
                }`}
              >
                <div className="flex items-center gap-2">
                  <School className="size-4" />
                  <div>
                    <p className="leading-tight">Student (Tanvir)</p>
                    <p className="text-[10px] opacity-80">Batch 8 · Restricted Admin</p>
                  </div>
                </div>
                {currentRole === 'student' && <span className="size-2 rounded-full bg-[#1e1a3c]"></span>}
              </button>
            </div>
          </div>
        )}

        {/* Minimized Pill Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`flex items-center gap-2 px-3.5 py-2 rounded-full shadow-xl border text-xs font-bold transition-all hover:scale-105 active:scale-95 ${getRoleBadgeStyle()}`}
          title="Switch role for evaluation demo"
        >
          <span className="size-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>Role: {getRoleLabel()}</span>
          {isOpen ? <ChevronDown className="size-3.5" /> : <ChevronUp className="size-3.5" />}
        </button>
      </div>

      {/* Floating Action Feedback Toast */}
      {notification && (
        <aside aria-label="Notification Alert" className="fixed bottom-16 right-4 sm:bottom-6 sm:right-6 z-50 bg-[#1e1a3c] text-white px-4 py-3 rounded-2xl shadow-2xl border border-[#5b3fa8] flex items-center gap-3 animate-in fade-in slide-in-from-bottom-4 duration-200">
          <CheckCircle2 className="size-5 text-[#7cc6f0] shrink-0" />
          <p className="text-xs sm:text-sm font-medium">{notification}</p>
        </aside>
      )}
    </>
  );
}