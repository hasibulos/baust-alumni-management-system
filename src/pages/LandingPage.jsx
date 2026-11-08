import React from 'react';
import { Users, Calendar, Briefcase, MessageSquare, GraduationCap, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function LandingPage({ onNavigate, events, jobs, forumThreads }) {
  return (
    <div className="bg-[#f6f5fc] min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#2a1a63] via-[#5b3fa8] via-[60%] to-[#4b8fd8] text-white overflow-hidden relative">
        {/* Decorative background circles */}
        <div className="absolute right-[-100px] top-[-150px] size-[520px] rounded-full bg-white/5 pointer-events-none blur-2xl"></div>
        <div className="absolute right-[100px] bottom-[-150px] size-[300px] rounded-full bg-[#7cc6f0]/10 pointer-events-none blur-xl"></div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-24 grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center relative z-10">
          {/* Left Hero Text */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6 text-center sm:text-left">
            <div className="inline-flex items-center bg-[#4b3a9a] px-3 py-1 rounded-full border border-[#7cc6f0]/20 mx-auto sm:mx-0">
              <span className="text-xs font-medium text-[#e1f2fc]">For BAUST graduates and students</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-[54px] font-bold leading-tight tracking-tight">
              Stay connected with your <br />
              <span className="text-[#9adbf7]">BAUST family.</span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-[#e4dffa] font-normal leading-relaxed max-w-xl mx-auto sm:mx-0">
              Find batchmates, join events, share jobs and learn from alumni, all in one place.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center sm:justify-start gap-3 pt-2">
              <button
                onClick={() => onNavigate('register')}
                className="bg-[#7cc6f0] hover:bg-[#6ec2eb] text-[#2a1a63] px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-md flex items-center justify-center gap-2 group active:scale-95"
              >
                <span>Join the network</span>
                <ArrowRight className="size-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onNavigate('login')}
                className="border border-[#9a8ce0] hover:bg-white/10 text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all active:scale-95 text-center"
              >
                Log in
              </button>
            </div>

            <p className="text-xs text-[#c9c1f0] pt-1">
              Directory, events, jobs and forum are for verified members. Log in to continue.
            </p>
          </div>

          {/* Right Hero Live Card */}
          <div className="lg:col-span-5">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 shadow-2xl space-y-4">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <h3 className="font-bold text-base text-white tracking-wide">What is happening</h3>
                <span className="text-[11px] bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 px-2 py-0.5 rounded-full font-medium">Live Feed</span>
              </div>

              {/* Event preview */}
              <div 
                onClick={() => onNavigate('login')}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                <div className="bg-[#7cc6f0] text-[#2a1a63] font-bold text-xs rounded-lg px-2.5 py-2 text-center min-w-[58px]">
                  Nov 14
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Career Talk: Software Industry</p>
                  <p className="text-[#d9d3f5] text-[11px] mt-0.5">Event · Campus Auditorium</p>
                </div>
              </div>

              {/* Job preview */}
              <div 
                onClick={() => onNavigate('login')}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                <div className="bg-[#ece7fa] text-[#5b3fa8] font-bold text-xs rounded-lg px-2.5 py-2 text-center min-w-[58px]">
                  Job
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Junior Software Engineer</p>
                  <p className="text-[#d9d3f5] text-[11px] mt-0.5">Shared by a 12th batch alumnus</p>
                </div>
              </div>

              {/* Forum preview */}
              <div 
                onClick={() => onNavigate('login')}
                className="flex items-center gap-3 p-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-colors cursor-pointer"
              >
                <div className="bg-[#e1f2fc] text-[#17608c] font-bold text-xs rounded-lg px-2.5 py-2 text-center min-w-[58px]">
                  Forum
                </div>
                <div className="text-xs">
                  <p className="font-semibold text-white">Preparing for interviews in Dhaka</p>
                  <p className="text-[#d9d3f5] text-[11px] mt-0.5">24 replies · Active debate</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Everything in one place - 6 Feature Cards */}
      <section id="features" className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-12 md:py-16">
        <div className="mb-8 md:mb-10 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#1e1a3c]">Everything in one place</h2>
          <p className="text-[#69668a] text-sm sm:text-base mt-1">Simple tools for graduates, students and the Alumni Affairs Office.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-white border border-[#e3e0f0] p-6 rounded-2xl hover:shadow-lg transition-all space-y-3">
            <div className="size-11 rounded-xl bg-[#ece7fa] text-[#5b3fa8] font-bold text-lg flex items-center justify-center">
              A
            </div>
            <h3 className="font-bold text-lg text-[#1e1a3c]">Alumni Directory</h3>
            <p className="text-sm text-[#69668a] leading-relaxed">
              Find batchmates by name, company or location. Connect across all graduated cohorts.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white border border-[#e3e0f0] p-6 rounded-2xl hover:shadow-lg transition-all space-y-3">
            <div className="size-11 rounded-xl bg-[#e1f2fc] text-[#17608c] font-bold text-lg flex items-center justify-center">
              E
            </div>
            <h3 className="font-bold text-lg text-[#1e1a3c]">Events and RSVP</h3>
            <p className="text-sm text-[#69668a] leading-relaxed">
              See reunions and seminars, and reserve your seat with one click.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white border border-[#e3e0f0] p-6 rounded-2xl hover:shadow-lg transition-all space-y-3">
            <div className="size-11 rounded-xl bg-[#e4e9fb] text-[#33409b] font-bold text-lg flex items-center justify-center">
              J
            </div>
            <h3 className="font-bold text-lg text-[#1e1a3c]">Job Board</h3>
            <p className="text-sm text-[#69668a] leading-relaxed">
              Alumni share verified job openings, internship vacancies, and direct candidate referrals.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white border border-[#e3e0f0] p-6 rounded-2xl hover:shadow-lg transition-all space-y-3">
            <div className="size-11 rounded-xl bg-[#ece7fa] text-[#5b3fa8] font-bold text-lg flex items-center justify-center">
              D
            </div>
            <h3 className="font-bold text-lg text-[#1e1a3c]">Discussion Forum</h3>
            <p className="text-sm text-[#69668a] leading-relaxed">
              Ask questions, get career roadmaps, and share advice with experienced alumni.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white border border-[#e3e0f0] p-6 rounded-2xl hover:shadow-lg transition-all space-y-3">
            <div className="size-11 rounded-xl bg-[#e1f2fc] text-[#17608c] font-bold text-lg flex items-center justify-center">
              M
            </div>
            <h3 className="font-bold text-lg text-[#1e1a3c]">Mentorship</h3>
            <p className="text-sm text-[#69668a] leading-relaxed">
              Current BAUST students request one-on-one career guidance from industry leaders.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white border border-[#e3e0f0] p-6 rounded-2xl hover:shadow-lg transition-all space-y-3">
            <div className="size-11 rounded-xl bg-[#e4e9fb] text-[#33409b] font-bold text-lg flex items-center justify-center">
              V
            </div>
            <h3 className="font-bold text-lg text-[#1e1a3c]">Verified Access</h3>
            <p className="text-sm text-[#69668a] leading-relaxed">
              Only approved graduates and verified students can log in. Secure and spam-free network.
            </p>
          </div>
        </div>
      </section>

      {/* Join in 3 Steps */}
      <section id="how-it-works" className="bg-white border-y border-[#e3e0f0] py-12 md:py-16">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20">
          <h2 className="text-2xl md:text-3xl font-bold text-[#1e1a3c] mb-8 md:mb-10 text-center">
            Join the BAUST Network in Three Simple Steps
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <div className="flex items-start gap-4 p-5 rounded-xl border border-[#e3e0f0] bg-[#f6f5fc]">
              <div className="size-10 rounded-full bg-[#5b3fa8] text-white font-bold flex items-center justify-center shrink-0">
                1
              </div>
              <div>
                <h4 className="font-bold text-base text-[#1e1a3c]">Register</h4>
                <p className="text-xs text-[#69668a] mt-1">Share your batch, department, student ID and current workplace.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-[#e3e0f0] bg-[#f6f5fc]">
              <div className="size-10 rounded-full bg-[#17608c] text-white font-bold flex items-center justify-center shrink-0">
                2
              </div>
              <div>
                <h4 className="font-bold text-base text-[#1e1a3c]">Get Verified</h4>
                <p className="text-xs text-[#69668a] mt-1">The Alumni Affairs Office reviews and verifies your credentials.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-5 rounded-xl border border-[#e3e0f0] bg-[#f6f5fc]">
              <div className="size-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center shrink-0">
                3
              </div>
              <div>
                <h4 className="font-bold text-base text-[#1e1a3c]">Log In</h4>
                <p className="text-xs text-[#69668a] mt-1">Open the directory, events, jobs and forum with full privileges.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Reconnect Banner */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-20 py-16">
        <div className="bg-gradient-to-r from-[#2a1a63] to-[#5b3fa8] rounded-3xl p-10 md:p-14 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-bold">Ready to reconnect?</h3>
            <p className="text-[#e4dffa] text-sm md:text-base">
              Create your account and see who is already here from your batch.
            </p>
          </div>

          <button
            onClick={() => onNavigate('register')}
            className="bg-[#7cc6f0] hover:bg-[#68bee8] text-[#2a1a63] px-8 py-3.5 rounded-xl font-bold text-base transition-all shadow-md shrink-0"
          >
            Create account
          </button>
        </div>
      </section>
    </div>
  );
}
