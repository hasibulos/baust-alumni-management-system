import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Home, 
  Users, 
  Calendar, 
  MessageSquare, 
  Briefcase, 
  LayoutDashboard, 
  LogOut, 
  ShieldCheck, 
  GraduationCap, 
  School,
  ChevronRight
} from 'lucide-react';

export default function Header({ 
  currentRole, 
  activeTab, 
  setActiveTab, 
  onLogout, 
  onNavigateLanding,
  onSwitchRole
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isGuest = currentRole === 'guest';
  const isAdmin = currentRole === 'admin';
  const isStudent = currentRole === 'student';

  // Close mobile menu on resize to desktop (>= 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = (tab) => {
    setActiveTab(tab);
    setIsMobileMenuOpen(false);
  };

  const handleLandingNav = (dest) => {
    onNavigateLanding(dest);
    setIsMobileMenuOpen(false);
  };

  // Nav items configuration
  const navItems = isAdmin
    ? [
        { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
        { id: 'directory', label: 'Directory', icon: Users },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'forum', label: 'Forum', icon: MessageSquare },
        { id: 'jobs', label: 'Jobs', icon: Briefcase },
      ]
    : [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'directory', label: 'Directory', icon: Users },
        { id: 'events', label: 'Events', icon: Calendar },
        { id: 'forum', label: 'Forum', icon: MessageSquare },
        { id: 'jobs', label: 'Jobs', icon: Briefcase },
      ];

  // ----------------------------------------------------
  // 1. GUEST HEADER (Landing, Login, Register)
  // ----------------------------------------------------
  if (isGuest && (activeTab === 'landing' || activeTab === 'login' || activeTab === 'register')) {
    return (
      <header className="sticky top-0 z-40 bg-gradient-to-r from-[#2a1a63] via-[#5b3fa8] to-[#4b8fd8] text-white shadow-md border-b border-white/10">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-3 sm:py-3.5 flex items-center justify-between">
          {/* Logo */}
          <div 
            onClick={() => handleLandingNav('landing')} 
            className="flex items-center gap-2.5 cursor-pointer select-none group"
          >
            <div className="bg-[#7cc6f0] group-hover:scale-105 transition-transform flex items-center justify-center rounded-[10px] size-9 shrink-0 shadow-sm">
              <span className="font-bold text-[#2a1a63] text-lg">B</span>
            </div>
            <div>
              <span className="font-bold text-base sm:text-[17px] text-white tracking-tight block leading-tight">
                BAUST Alumni
              </span>
              <span className="text-[10px] text-[#c9c1f0] hidden sm:block">
                Saidpur · Directorate of Student Affairs
              </span>
            </div>
          </div>

          {/* Desktop Guest Links (Visible only on >= 1024px) */}
          <nav className="hidden lg:flex items-center gap-8 font-medium text-[#d9d3f5] text-[15px]">
            <button 
              onClick={() => handleLandingNav('landing')} 
              className="hover:text-white transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => {
                handleLandingNav('landing');
                setTimeout(() => {
                  const el = document.getElementById('features');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="hover:text-white transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => {
                handleLandingNav('landing');
                setTimeout(() => {
                  const el = document.getElementById('how-it-works');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }} 
              className="hover:text-white transition-colors"
            >
              How It Works
            </button>
          </nav>

          {/* Desktop Action Buttons (Visible only on >= 1024px) */}
          <div className="hidden lg:flex items-center gap-2.5">
            <button
              onClick={() => handleLandingNav('login')}
              className="border border-[#9a8ce0] text-white hover:bg-white/10 px-4 py-2 rounded-xl font-semibold text-xs transition-all active:scale-95"
            >
              Log in
            </button>
            <button
              onClick={() => handleLandingNav('register')}
              className="bg-[#7cc6f0] text-[#2a1a63] hover:bg-[#68bee8] px-4 py-2 rounded-xl font-bold text-xs transition-all shadow-sm active:scale-95"
            >
              Register
            </button>
          </div>

          {/* Mobile Right Controls: Fast Login + Hamburger Toggle (< 1024px) */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => handleLandingNav('login')}
              className="text-xs bg-white/15 px-3 py-1.5 rounded-lg font-semibold text-white active:scale-95"
            >
              Log in
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-white transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu for Guests */}
        {isMobileMenuOpen && (
          <>
            <div 
              className="fixed inset-0 top-[60px] bg-black/50 z-30 lg:hidden backdrop-blur-sm animate-in fade-in duration-150"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <div className="absolute top-full left-0 right-0 z-40 bg-[#1e1a3c] border-b border-white/10 shadow-2xl p-5 lg:hidden animate-in slide-in-from-top-2 duration-150">
              <nav className="flex flex-col space-y-2">
                <button
                  onClick={() => handleLandingNav('landing')}
                  className="w-full text-left py-3 px-4 rounded-xl font-semibold text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>Home & Overview</span>
                  <ChevronRight className="size-4 text-[#7cc6f0]" />
                </button>
                <button
                  onClick={() => handleLandingNav('login')}
                  className="w-full text-left py-3 px-4 rounded-xl font-semibold text-white hover:bg-white/10 flex items-center justify-between"
                >
                  <span>Log in to Network</span>
                  <ChevronRight className="size-4 text-[#7cc6f0]" />
                </button>
                <button
                  onClick={() => handleLandingNav('register')}
                  className="w-full text-left py-3 px-4 rounded-xl font-semibold text-[#7cc6f0] bg-white/10 flex items-center justify-between"
                >
                  <span>Join / Register as Graduate</span>
                  <ChevronRight className="size-4" />
                </button>
              </nav>

              <div className="pt-4 mt-3 border-t border-white/10 text-center text-xs text-[#c9c1f0]">
                <p className="font-semibold text-white">BAUST Alumni Management System</p>
                <p className="text-[11px] text-[#9adbf7] mt-0.5">CSE 3210 · ISD Project</p>
              </div>
            </div>
          </>
        )}
      </header>
    );
  }

  // ----------------------------------------------------
  // 2. AUTHENTICATED USER HEADER (Alumni, Admin, Student)
  // ----------------------------------------------------
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-[#e3e0f0] shadow-sm">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-2.5 sm:py-3 flex items-center justify-between">
        {/* Logo */}
        <div 
          onClick={() => handleNavClick(isAdmin ? 'dashboard' : 'home')}
          className="flex items-center gap-2 sm:gap-2.5 cursor-pointer select-none group shrink-0"
        >
          <div className="bg-[#5b3fa8] group-hover:bg-[#4a3290] transition-colors flex items-center justify-center rounded-[10px] size-[34px] sm:size-9 shrink-0 shadow-sm">
            <span className="font-bold text-white text-[16px] sm:text-[17px]">B</span>
          </div>
          <div>
            <span className="font-bold text-[#1e1a3c] text-[15px] sm:text-[16px] tracking-tight block leading-tight">
              BAUST Alumni
            </span>
            <span className="text-[10px] text-[#69668a] hidden sm:block">
              {isAdmin ? 'Alumni Affairs Office' : 'Community Portal'}
            </span>
          </div>
        </div>

        {/* Desktop Navigation Links (Visible only on >= 1024px) */}
        <nav className="hidden lg:flex items-center gap-1.5 bg-[#f6f5fc] p-1 rounded-xl border border-[#e3e0f0]/60">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all active:scale-95 ${
                  isActive
                    ? 'bg-[#5b3fa8] text-white shadow-sm'
                    : 'text-[#69668a] hover:text-[#1e1a3c] hover:bg-white/80'
                }`}
              >
                <Icon className="size-4" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Desktop User Account Controls (Visible only on >= 1024px) */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Role Badge */}
          {isAdmin && (
            <span className="bg-[#e1f2fc] text-[#17608c] border border-[#7cc6f0]/40 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <ShieldCheck className="size-3.5 text-[#17608c]" />
              Admin
            </span>
          )}

          {isStudent && (
            <span className="bg-[#fef3c7] text-[#92400e] border border-amber-300 px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <School className="size-3.5" />
              Student
            </span>
          )}

          {!isAdmin && !isStudent && (
            <span className="bg-[#ece7fa] text-[#5b3fa8] border border-[#dbd4f5] px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1">
              <GraduationCap className="size-3.5" />
              Alumni
            </span>
          )}

          {/* User Avatar + Name */}
          <div className="flex items-center gap-2 pl-1">
            <div className={`size-8 rounded-full flex items-center justify-center font-bold text-xs shadow-sm ${
              isAdmin 
                ? 'bg-[#17608c] text-white' 
                : isStudent 
                  ? 'bg-amber-600 text-white' 
                  : 'bg-[#5b3fa8] text-white'
            }`}>
              {isAdmin ? 'AD' : isStudent ? 'TH' : 'RU'}
            </div>
            <span className="font-semibold text-xs text-[#1e1a3c]">
              {isAdmin ? 'Office Admin' : isStudent ? 'Tanvir (Student)' : 'Rahim Islam'}
            </span>
          </div>

          {/* Single Clean Logout Button */}
          <button
            onClick={onLogout}
            className="border border-[#e3e0f0] bg-white hover:bg-rose-50 hover:text-rose-600 hover:border-rose-200 text-[#69668a] px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1 active:scale-95 shadow-sm"
            title="Sign out of system"
          >
            <LogOut className="size-3.5" />
            <span>Log out</span>
          </button>
        </div>

        {/* Mobile / Tablet Right Controls (< 1024px) */}
        <div className="flex items-center gap-2 lg:hidden">
          {isAdmin ? (
            <span className="bg-[#e1f2fc] text-[#17608c] px-2 py-0.5 rounded-full text-[11px] font-bold">
              Admin
            </span>
          ) : isStudent ? (
            <span className="bg-[#fef3c7] text-[#92400e] px-2 py-0.5 rounded-full text-[11px] font-bold">
              Student
            </span>
          ) : (
            <span className="bg-[#ece7fa] text-[#5b3fa8] px-2 py-0.5 rounded-full text-[11px] font-bold">
              Alumni
            </span>
          )}

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 rounded-xl bg-[#f6f5fc] hover:bg-[#ece7fa] text-[#1e1a3c] transition-colors focus:outline-none border border-[#e3e0f0]"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown Menu for Authenticated Users (< 1024px) */}
      {isMobileMenuOpen && (
        <>
          <div 
            className="fixed inset-0 top-[56px] sm:top-[60px] bg-black/50 z-30 lg:hidden backdrop-blur-sm animate-in fade-in duration-150"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute top-full left-0 right-0 z-40 bg-white border-b border-[#e3e0f0] shadow-2xl p-4 sm:p-5 lg:hidden animate-in slide-in-from-top-2 duration-150 max-h-[85vh] overflow-y-auto space-y-4">
            {/* User Profile Card */}
            <div className="flex items-center gap-3 p-3 bg-[#f6f5fc] rounded-2xl border border-[#e3e0f0]">
              <div className={`size-10 rounded-xl flex items-center justify-center font-bold text-sm shadow-sm ${
                isAdmin 
                  ? 'bg-[#17608c] text-white' 
                  : isStudent 
                    ? 'bg-amber-600 text-white' 
                    : 'bg-[#5b3fa8] text-white'
              }`}>
                {isAdmin ? 'AD' : isStudent ? 'TH' : 'RU'}
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-bold text-sm text-[#1e1a3c] truncate">
                  {isAdmin ? 'Alumni Affairs Office' : isStudent ? 'Tanvir Hasan' : 'Rahim Islam'}
                </p>
                <p className="text-xs text-[#69668a] truncate">
                  {isAdmin ? 'System Administrator' : isStudent ? 'Batch 8 (Restricted)' : 'Batch 6 · Lead SE @ Grab'}
                </p>
              </div>
              <span className={`text-[11px] font-bold px-2 py-0.5 rounded-lg ${
                isAdmin 
                  ? 'bg-[#e1f2fc] text-[#17608c]' 
                  : isStudent 
                    ? 'bg-amber-100 text-amber-800' 
                    : 'bg-[#ece7fa] text-[#5b3fa8]'
              }`}>
                {isAdmin ? 'Admin' : isStudent ? 'Student' : 'Alumni'}
              </span>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-[#69668a] uppercase tracking-wider px-2 py-1">
                Navigation
              </p>
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full py-2.5 px-3 rounded-xl text-xs sm:text-sm font-semibold flex items-center justify-between transition-all ${
                      isActive
                        ? 'bg-[#5b3fa8] text-white shadow-sm'
                        : 'text-[#1e1a3c] hover:bg-[#f6f5fc]'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <Icon className={`size-4 ${isActive ? 'text-white' : 'text-[#5b3fa8]'}`} />
                      <span>{item.label}</span>
                    </div>
                    <ChevronRight className={`size-4 ${isActive ? 'text-white/80' : 'text-[#69668a]'}`} />
                  </button>
                );
              })}
            </div>

            {/* Quick Switch Role in Mobile Menu */}
            {onSwitchRole && (
              <div className="pt-2 border-t border-[#e3e0f0] space-y-2">
                <p className="text-[11px] font-bold text-[#69668a] uppercase tracking-wider px-2">
                  1-Click Role Switch (Demo Mode)
                </p>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => {
                      onSwitchRole('admin');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-xl text-center text-xs font-bold border transition-all ${
                      isAdmin
                        ? 'bg-[#e1f2fc] text-[#17608c] border-[#7cc6f0]'
                        : 'bg-white text-[#1e1a3c] border-[#e3e0f0] hover:bg-[#f6f5fc]'
                    }`}
                  >
                    <ShieldCheck className="size-4 mx-auto mb-1 text-[#17608c]" />
                    <span>Admin</span>
                  </button>

                  <button
                    onClick={() => {
                      onSwitchRole('alumni');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-xl text-center text-xs font-bold border transition-all ${
                      !isAdmin && !isStudent
                        ? 'bg-[#ece7fa] text-[#5b3fa8] border-[#5b3fa8]'
                        : 'bg-white text-[#1e1a3c] border-[#e3e0f0] hover:bg-[#f6f5fc]'
                    }`}
                  >
                    <GraduationCap className="size-4 mx-auto mb-1 text-[#5b3fa8]" />
                    <span>Alumni</span>
                  </button>

                  <button
                    onClick={() => {
                      onSwitchRole('student');
                      setIsMobileMenuOpen(false);
                    }}
                    className={`p-2 rounded-xl text-center text-xs font-bold border transition-all ${
                      isStudent
                        ? 'bg-amber-100 text-amber-900 border-amber-400'
                        : 'bg-white text-[#1e1a3c] border-[#e3e0f0] hover:bg-[#f6f5fc]'
                    }`}
                  >
                    <School className="size-4 mx-auto mb-1 text-amber-700" />
                    <span>Student</span>
                  </button>
                </div>
              </div>
            )}

            {/* Logout button at bottom of mobile menu */}
            <div className="pt-2 border-t border-[#e3e0f0]">
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onLogout();
                }}
                className="w-full py-2.5 px-3 rounded-xl text-xs font-bold text-rose-600 bg-rose-50 hover:bg-rose-100 flex items-center justify-center gap-2 transition-colors"
              >
                <LogOut className="size-4" />
                <span>Log out from BAUST Network</span>
              </button>
            </div>
          </div>
        </>
      )}
    </header>
  );
}