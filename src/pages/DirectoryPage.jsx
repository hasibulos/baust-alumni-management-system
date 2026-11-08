import React, { useState } from 'react';
import { Search, MapPin, Briefcase, GraduationCap, Check, UserPlus, Filter } from 'lucide-react';

export default function DirectoryPage({
  alumniList,
  onViewProfile,
  onConnect,
  connectedIds,
  currentRole
}) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBatch, setSelectedBatch] = useState('All batches');
  const [selectedDept, setSelectedDept] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');

  const filteredAlumni = alumniList.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.designation.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (item.skills && item.skills.some(s => s.toLowerCase().includes(searchTerm.toLowerCase())));

    const matchesBatch =
      selectedBatch === 'All batches' || item.batch === selectedBatch.replace(' batch', '');

    const matchesDept =
      selectedDept === 'All' || item.dept === selectedDept;

    const matchesLoc =
      selectedLocation === 'All' || item.location.toLowerCase() === selectedLocation.toLowerCase();

    return matchesSearch && matchesBatch && matchesDept && matchesLoc;
  });

  const isStudent = currentRole === 'student';

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-8 space-y-5 sm:space-y-6">
      {/* Title & Subtitle */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a3c]">Alumni Directory</h2>
          <p className="text-xs sm:text-sm text-[#69668a] mt-0.5">Find and connect with BAUST graduates across all batches and sectors.</p>
        </div>
        <span className="text-xs bg-[#ece7fa] text-[#5b3fa8] font-semibold px-3 py-1.5 rounded-full self-start sm:self-auto border border-[#dbd4f5]">
          {filteredAlumni.length} Verified Alumni Found
        </span>
      </div>

      {/* Search & Filters Bar */}
      <div className="bg-white border border-[#e3e0f0] rounded-2xl p-3.5 sm:p-4 shadow-sm flex flex-col md:flex-row gap-3 items-center">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="size-4 absolute left-3.5 top-3 text-[#69668a]" />
          <input
            type="text"
            placeholder="Search by name, company or skill..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 text-xs border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
          />
        </div>

        {/* Dropdowns */}
        <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-2 w-full md:w-auto">
          {/* Batch Filter */}
          <select
            value={selectedBatch}
            onChange={(e) => setSelectedBatch(e.target.value)}
            className="px-3 py-2 text-xs border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white cursor-pointer"
          >
            <option value="All batches">All batches</option>
            <option value="6th">6th batch</option>
            <option value="8th">8th batch</option>
            <option value="10th">10th batch</option>
            <option value="12th">12th batch</option>
            <option value="14th">14th batch</option>
            <option value="16th">16th batch</option>
          </select>

          {/* Department Filter */}
          <select
            value={selectedDept}
            onChange={(e) => setSelectedDept(e.target.value)}
            className="px-3 py-2 text-xs border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white cursor-pointer"
          >
            <option value="All">Department (All)</option>
            <option value="CSE">CSE</option>
            <option value="EEE">EEE</option>
            <option value="ME">ME</option>
            <option value="CE">CE</option>
            <option value="BBA">BBA</option>
          </select>

          {/* Location Filter */}
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-3 py-2 text-xs border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white cursor-pointer"
          >
            <option value="All">Location (All)</option>
            <option value="Dhaka">Dhaka</option>
            <option value="Saidpur">Saidpur</option>
            <option value="Remote">Remote</option>
          </select>
        </div>
      </div>

      {/* Alumni Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredAlumni.map((alumnus) => {
          const isConnected = connectedIds.includes(alumnus.id);

          return (
            <div
              key={alumnus.id}
              className="bg-white border border-[#e3e0f0] rounded-2xl p-5 hover:shadow-md transition-all space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-start gap-3.5">
                  <div className={`size-12 rounded-2xl flex items-center justify-center font-bold text-base ${alumnus.avatarBg || 'bg-[#ece7fa]'} ${alumnus.avatarText || 'text-[#5b3fa8]'} shadow-sm shrink-0`}>
                    {alumnus.initials}
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="font-bold text-base text-[#1e1a3c] truncate">{alumnus.name}</h3>
                    <p className="text-xs text-[#69668a] font-medium truncate mt-0.5">
                      {alumnus.designation} · {alumnus.company}
                    </p>
                    <div className="flex items-center gap-2 mt-2 text-[11px] text-[#69668a]">
                      <span className="bg-[#f6f5fc] px-2 py-0.5 rounded border border-[#e3e0f0] font-semibold text-[#1e1a3c]">
                        {alumnus.batch} batch
                      </span>
                      <span className="font-semibold text-[#5b3fa8]">{alumnus.dept}</span>
                      <span>· {alumnus.location}</span>
                    </div>
                  </div>
                </div>

                {/* Bio snippet */}
                {alumnus.bio && (
                  <p className="text-xs text-[#69668a] mt-3 line-clamp-2 leading-relaxed bg-[#f6f5fc] p-2.5 rounded-xl border border-[#e3e0f0]/60">
                    {alumnus.bio}
                  </p>
                )}
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex items-center gap-2 border-t border-[#e3e0f0]">
                <button
                  onClick={() => onConnect(alumnus.id)}
                  className={`flex-1 py-2 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all ${
                    isConnected
                      ? 'bg-emerald-600 text-white shadow-sm'
                      : 'bg-[#5b3fa8] hover:bg-[#4a3290] text-white shadow-sm'
                  }`}
                >
                  {isConnected ? (
                    <>
                      <Check className="size-3.5" />
                      <span>{isStudent ? 'Requested' : 'Connected'}</span>
                    </>
                  ) : (
                    <>
                      <UserPlus className="size-3.5" />
                      <span>{isStudent ? 'Request Mentorship' : 'Connect'}</span>
                    </>
                  )}
                </button>

                <button
                  onClick={() => onViewProfile(alumnus)}
                  className="px-3.5 py-2 border border-[#e3e0f0] hover:bg-[#f6f5fc] text-[#1e1a3c] rounded-xl text-xs font-semibold transition-colors"
                >
                  View profile
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {filteredAlumni.length === 0 && (
        <div className="text-center py-16 bg-white rounded-2xl border border-[#e3e0f0] space-y-2">
          <p className="text-sm font-bold text-[#1e1a3c]">No matching alumni found</p>
          <p className="text-xs text-[#69668a]">Try clearing your search terms or expanding your batch filter.</p>
        </div>
      )}
    </div>
  );
}
