import React, { useState } from 'react';
import { Briefcase, Building, MapPin, Bookmark, Plus, Check, ExternalLink } from 'lucide-react';

export default function JobsPage({
  jobs,
  onOpenPostJob,
  onApplyJob,
  onToggleSaveJob,
  currentRole
}) {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedJobForModal, setSelectedJobForModal] = useState(null);

  const filters = ['All', 'Full time', 'Internship', 'Remote'];

  const filteredJobs = jobs.filter((job) => {
    if (activeFilter === 'All') return true;
    if (activeFilter === 'Remote') return job.location.toLowerCase().includes('remote') || job.type.toLowerCase().includes('remote');
    return job.type.toLowerCase() === activeFilter.toLowerCase();
  });

  const isStudent = currentRole === 'student';

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-8 space-y-5 sm:space-y-6">
      {/* Title & Post Job Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a3c]">Jobs and Mentorship</h2>
          <p className="text-xs sm:text-sm text-[#69668a] mt-0.5">Opportunities and direct referrals shared by BAUST alumni.</p>
        </div>

        <button
          onClick={onOpenPostJob}
          className="bg-[#5b3fa8] hover:bg-[#4a3290] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all self-start sm:self-auto active:scale-95"
        >
          <Plus className="size-4" />
          <span>Post a job</span>
        </button>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActiveFilter(f)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === f
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'bg-white text-[#69668a] hover:bg-[#ece7fa]/50 hover:text-[#5b3fa8] border border-[#e3e0f0]'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Jobs Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job) => (
          <div
            key={job.id}
            className="bg-white border border-[#e3e0f0] rounded-2xl p-5 hover:shadow-md transition-all flex flex-col justify-between space-y-4"
          >
            <div className="space-y-3">
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-start gap-3">
                  <div className={`size-10 rounded-xl flex items-center justify-center font-bold text-sm ${job.companyBg} ${job.companyText} shadow-sm shrink-0`}>
                    {job.companyInitial}
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-[#1e1a3c] line-clamp-1">{job.title}</h3>
                    <p className="text-xs text-[#69668a] font-medium mt-0.5">{job.company}</p>
                  </div>
                </div>

                <button
                  onClick={() => onToggleSaveJob(job.id)}
                  title={job.saved ? 'Unsave Job' : 'Save Job'}
                  className={`p-1.5 rounded-lg border transition-colors ${
                    job.saved
                      ? 'bg-[#ece7fa] border-[#5b3fa8] text-[#5b3fa8]'
                      : 'border-[#e3e0f0] text-[#69668a] hover:bg-[#f6f5fc]'
                  }`}
                >
                  <Bookmark className={`size-4 ${job.saved ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Tags */}
              <div className="flex items-center gap-2 text-xs">
                <span className="bg-[#ece7fa] text-[#5b3fa8] font-semibold px-2.5 py-0.5 rounded-md text-[11px]">
                  {job.type}
                </span>
                <span className="bg-[#f6f5fc] text-[#69668a] border border-[#e3e0f0] px-2.5 py-0.5 rounded-md text-[11px] flex items-center gap-1">
                  <MapPin className="size-3" />
                  {job.location}
                </span>
              </div>

              {/* Description */}
              <p className="text-xs text-[#69668a] line-clamp-2 leading-relaxed">
                {job.description}
              </p>

              {/* Shared by info */}
              <p className="text-[11px] text-[#69668a] italic pt-1">
                {job.sharedBy}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-3 flex items-center gap-2 border-t border-[#e3e0f0]">
              <button
                onClick={() => setSelectedJobForModal(job)}
                className="flex-1 py-2 bg-[#5b3fa8] hover:bg-[#4a3290] text-white rounded-xl text-xs font-semibold shadow-sm transition-all text-center"
              >
                Apply
              </button>
              <button
                onClick={() => onToggleSaveJob(job.id)}
                className="px-3.5 py-2 border border-[#e3e0f0] hover:bg-[#f6f5fc] text-[#1e1a3c] rounded-xl text-xs font-semibold transition-colors"
              >
                {job.saved ? 'Saved' : 'Save'}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Job Details & Application Modal */}
      {selectedJobForModal && (
        <div className="fixed inset-0 z-50 bg-[#1e1a3c]/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-lg w-full border border-[#e3e0f0] shadow-2xl p-6 space-y-4 animate-in fade-in zoom-in-95 duration-200">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[11px] font-bold text-[#5b3fa8] bg-[#ece7fa] px-2.5 py-1 rounded-md uppercase tracking-wider">
                  {selectedJobForModal.type}
                </span>
                <h3 className="text-xl font-bold text-[#1e1a3c] mt-2">{selectedJobForModal.title}</h3>
                <p className="text-xs text-[#69668a] font-medium">{selectedJobForModal.company} · {selectedJobForModal.location}</p>
              </div>
              <button
                onClick={() => setSelectedJobForModal(null)}
                className="text-[#69668a] hover:text-[#1e1a3c] font-bold text-lg"
              >
                ✕
              </button>
            </div>

            <div className="space-y-3 text-xs border-y border-[#e3e0f0] py-4">
              <div>
                <h4 className="font-semibold text-[#1e1a3c] mb-1">Role Description:</h4>
                <p className="text-[#69668a] leading-relaxed">{selectedJobForModal.description}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 bg-[#f6f5fc] p-3 rounded-xl border border-[#e3e0f0]">
                <div>
                  <span className="text-[#69668a] block">Salary / Stipend:</span>
                  <span className="font-bold text-[#1e1a3c]">{selectedJobForModal.salary || 'Negotiable'}</span>
                </div>
                <div>
                  <span className="text-[#69668a] block">Application Deadline:</span>
                  <span className="font-bold text-[#1e1a3c]">{selectedJobForModal.deadline || 'Rolling basis'}</span>
                </div>
              </div>

              <p className="text-[#17608c] font-medium">
                {selectedJobForModal.sharedBy}
              </p>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                onClick={() => setSelectedJobForModal(null)}
                className="px-4 py-2 border border-[#e3e0f0] rounded-lg text-xs font-semibold text-[#69668a]"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onApplyJob(selectedJobForModal.id);
                  setSelectedJobForModal(null);
                }}
                className="px-5 py-2 bg-[#5b3fa8] hover:bg-[#4a3290] text-white rounded-lg text-xs font-semibold shadow-sm flex items-center gap-1.5"
              >
                <span>Submit Application / Referral Request</span>
                <ExternalLink className="size-3.5" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
