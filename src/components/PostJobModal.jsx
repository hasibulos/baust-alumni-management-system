import React, { useState } from 'react';
import { X, Briefcase, Building, MapPin, DollarSign, Calendar } from 'lucide-react';

export default function PostJobModal({ isOpen, onClose, onAddJob, currentUserName, currentUserBatch }) {
  const [formData, setFormData] = useState({
    title: '',
    company: '',
    type: 'Full time',
    location: 'Dhaka',
    salary: '',
    deadline: '',
    description: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.company) return;

    const newJob = {
      id: `job-${Date.now()}`,
      title: formData.title,
      company: formData.company,
      companyInitial: formData.company.charAt(0).toUpperCase(),
      companyBg: 'bg-[#ece7fa]',
      companyText: 'text-[#5b3fa8]',
      type: formData.type,
      location: formData.location,
      sharedBy: `Shared by ${currentUserName || 'Rahim Uddin'} · ${currentUserBatch || '12th batch'}`,
      saved: false,
      description: formData.description || 'Exciting career opportunity shared directly by BAUST alumnus.',
      salary: formData.salary || 'Negotiable',
      deadline: formData.deadline || 'Open until filled'
    };

    onAddJob(newJob);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1e1a3c]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-[#e3e0f0] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#5b3fa8] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-lg">
              <Briefcase className="size-5 text-[#7cc6f0]" />
            </div>
            <div>
              <h3 className="font-bold text-base">Share a Job / Internship</h3>
              <p className="text-xs text-[#d9d3f5]">Help BAUST students and graduates find career opportunities</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 text-white">
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 max-h-[75vh] overflow-y-auto text-xs">
          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Job / Internship Role Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Junior Frontend Developer"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Company / Organization *</label>
              <div className="relative">
                <Building className="size-3.5 absolute left-3 top-2.5 text-[#69668a]" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Brain Station 23"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full pl-8 pr-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Job Type</label>
              <select
                value={formData.type}
                onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white"
              >
                <option value="Full time">Full time</option>
                <option value="Internship">Internship</option>
                <option value="Remote">Remote</option>
                <option value="Part time">Part time</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Location</label>
              <div className="relative">
                <MapPin className="size-3.5 absolute left-3 top-2.5 text-[#69668a]" />
                <input
                  type="text"
                  placeholder="e.g. Dhaka / Remote / Saidpur"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  className="w-full pl-8 pr-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                />
              </div>
            </div>

            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Salary / Stipend</label>
              <div className="relative">
                <DollarSign className="size-3.5 absolute left-3 top-2.5 text-[#69668a]" />
                <input
                  type="text"
                  placeholder="e.g. BDT 40k - 55k / month"
                  value={formData.salary}
                  onChange={(e) => setFormData({ ...formData, salary: e.target.value })}
                  className="w-full pl-8 pr-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                />
              </div>
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Application Deadline</label>
            <div className="relative">
              <Calendar className="size-3.5 absolute left-3 top-2.5 text-[#69668a]" />
              <input
                type="text"
                placeholder="e.g. Dec 15, 2026"
                value={formData.deadline}
                onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                className="w-full pl-8 pr-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Role Description & Application Link</label>
            <textarea
              rows={3}
              placeholder="Outline required qualifications, tech stack, and where candidates should submit resumes..."
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
            />
          </div>

          <div className="pt-3 flex items-center justify-end gap-2 border-t border-[#e3e0f0]">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-[#e3e0f0] rounded-lg font-semibold text-[#69668a] hover:bg-[#f6f5fc]"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-5 py-2 bg-[#5b3fa8] hover:bg-[#4a3290] text-white rounded-lg font-semibold shadow-sm"
            >
              Publish Job Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
