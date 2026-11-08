import React, { useState } from 'react';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';

export default function RegisterPage({ onRegisterSubmit, onNavigate }) {
  const [roleType, setRoleType] = useState('alumni'); // 'alumni' or 'student'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    department: 'CSE',
    batch: '',
    workplace: '',
    studentId: '',
    password: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;

    const newRequest = {
      id: `pending-${Date.now()}`,
      name: formData.name,
      initials: formData.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase(),
      batch: `${formData.batch || '17th'} batch`,
      dept: formData.department,
      email: formData.email,
      workplace: roleType === 'alumni' ? (formData.workplace || 'Engineer') : `Student (ID: ${formData.studentId || '202601'})`,
      date: 'Just now',
      studentId: formData.studentId || '170101099',
      avatarBg: roleType === 'alumni' ? 'bg-[#ece7fa]' : 'bg-[#e1f2fc]',
      avatarText: roleType === 'alumni' ? 'text-[#5b3fa8]' : 'text-[#17608c]'
    };

    onRegisterSubmit(newRequest);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#f6f5fc] flex items-center justify-center p-4 md:p-8">
      <div className="bg-white rounded-3xl border border-[#e3e0f0] shadow-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-12 overflow-hidden min-h-[620px]">
        {/* Left Branding Side */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#2a1a63] via-[#3d277d] to-[#5b3fa8] p-8 md:p-10 text-white flex flex-col justify-between relative overflow-hidden">
          <div className="space-y-6 relative z-10">
            <div className="flex items-center gap-2.5">
              <div className="bg-[#7cc6f0] flex items-center justify-center rounded-[9px] size-9 shrink-0">
                <span className="font-bold text-[#2a1a63] text-lg">B</span>
              </div>
              <span className="font-bold text-lg text-white">BAUST Alumni</span>
            </div>

            <div className="space-y-3 pt-4">
              <h2 className="text-2xl md:text-3xl font-bold leading-snug">
                Join the BAUST <br />
                <span className="text-[#9adbf7]">alumni network.</span>
              </h2>
              <p className="text-xs text-[#e4dffa]">
                Create an account in a minute to get connected with your alumni community.
              </p>
            </div>

            {/* Steps checklist */}
            <div className="space-y-3 pt-4 text-xs">
              <div className="flex items-center gap-2 text-[#e1f2fc]">
                <CheckCircle2 className="size-4 text-[#7cc6f0] shrink-0" />
                <span>Share your batch and workplace</span>
              </div>
              <div className="flex items-center gap-2 text-[#e1f2fc]">
                <CheckCircle2 className="size-4 text-[#7cc6f0] shrink-0" />
                <span>The Alumni Affairs Office verifies you</span>
              </div>
              <div className="flex items-center gap-2 text-[#e1f2fc]">
                <CheckCircle2 className="size-4 text-[#7cc6f0] shrink-0" />
                <span>Log in and connect with peers</span>
              </div>
            </div>
          </div>

          <div className="text-[11px] text-[#c9c1f0] pt-8 border-t border-white/10 relative z-10">
            BAUST, Saidpur · Alumni Affairs Office
          </div>

          {/* Decorative blur */}
          <div className="absolute -bottom-16 -right-16 size-48 rounded-full bg-[#7cc6f0]/10 blur-xl"></div>
        </div>

        {/* Right Form Side */}
        <div className="md:col-span-7 p-8 md:p-10 flex flex-col justify-between">
          {submitted ? (
            <div className="my-auto text-center py-10 space-y-4">
              <div className="size-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="size-8" />
              </div>
              <h3 className="text-2xl font-bold text-[#1e1a3c]">Registration Submitted!</h3>
              <p className="text-xs text-[#69668a] max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Your application has been sent to the <strong>Alumni Affairs Office</strong> for verification.
              </p>
              <div className="bg-[#ece7fa] p-3 rounded-xl max-w-xs mx-auto text-xs text-[#5b3fa8] font-medium border border-[#dbd4f5]">
                Status: Pending Alumni Admin Approval
              </div>
              <div className="pt-4 flex items-center justify-center gap-3">
                <button
                  onClick={() => onNavigate('login')}
                  className="px-6 py-2.5 bg-[#5b3fa8] hover:bg-[#4a3290] text-white font-bold rounded-xl text-xs shadow-md transition-all"
                >
                  Go to Log in
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-5">
                <div>
                  <h3 className="text-2xl font-bold text-[#1e1a3c]">Create your account</h3>
                  <p className="text-xs text-[#69668a] mt-0.5">An admin will verify your request before you can log in.</p>
                </div>
                <button
                  onClick={() => onNavigate('landing')}
                  className="text-xs font-semibold text-[#5b3fa8] hover:text-[#412882] flex items-center gap-1"
                >
                  <ArrowLeft className="size-3.5" />
                  <span>Home</span>
                </button>
              </div>

              {/* Role Toggle [Alumni] [Student] */}
              <div className="flex items-center bg-[#f6f5fc] p-1 rounded-xl border border-[#e3e0f0] mb-4">
                <button
                  type="button"
                  onClick={() => setRoleType('alumni')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    roleType === 'alumni'
                      ? 'bg-[#5b3fa8] text-white shadow-sm'
                      : 'text-[#69668a] hover:text-[#1e1a3c]'
                  }`}
                >
                  Alumni
                </button>
                <button
                  type="button"
                  onClick={() => setRoleType('student')}
                  className={`flex-1 py-1.5 rounded-lg text-xs font-bold transition-all ${
                    roleType === 'student'
                      ? 'bg-[#5b3fa8] text-white shadow-sm'
                      : 'text-[#69668a] hover:text-[#1e1a3c]'
                  }`}
                >
                  Current Student
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
                <div>
                  <label className="block font-semibold text-[#1e1a3c] mb-1">Full name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-[#1e1a3c] mb-1">Email address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-[#1e1a3c] mb-1">Department</label>
                    <select
                      value={formData.department}
                      onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white"
                    >
                      <option value="CSE">CSE</option>
                      <option value="EEE">EEE</option>
                      <option value="ME">ME</option>
                      <option value="CE">CE</option>
                      <option value="BBA">BBA</option>
                      <option value="English">English</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold text-[#1e1a3c] mb-1">Batch / Year</label>
                    <input
                      type="text"
                      placeholder="e.g. 12th"
                      value={formData.batch}
                      onChange={(e) => setFormData({ ...formData, batch: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                    />
                  </div>
                </div>

                {roleType === 'alumni' ? (
                  <div>
                    <label className="block font-semibold text-[#1e1a3c] mb-1">Workplace & Designation</label>
                    <input
                      type="text"
                      placeholder="e.g. Software Engineer · Cloud Systems Ltd."
                      value={formData.workplace}
                      onChange={(e) => setFormData({ ...formData, workplace: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                    />
                  </div>
                ) : (
                  <div>
                    <label className="block font-semibold text-[#1e1a3c] mb-1">Student ID Number</label>
                    <input
                      type="text"
                      placeholder="e.g. 210201045"
                      value={formData.studentId}
                      onChange={(e) => setFormData({ ...formData, studentId: e.target.value })}
                      className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                    />
                  </div>
                )}

                <div>
                  <label className="block font-semibold text-[#1e1a3c] mb-1">Password (At least 8 characters)</label>
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-3.5 py-2 border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#5b3fa8] hover:bg-[#4a3290] text-white font-bold rounded-xl transition-all shadow-md text-sm mt-3"
                >
                  Submit registration
                </button>
              </form>
            </div>
          )}

          <div className="pt-4 text-center text-xs text-[#69668a]">
            Already registered?{' '}
            <button
              onClick={() => onNavigate('login')}
              className="text-[#5b3fa8] font-bold hover:underline"
            >
              Log in
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
