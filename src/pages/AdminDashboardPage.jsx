import React, { useState } from 'react';
import {
  Users,
  Calendar,
  CheckCircle2,
  XCircle,
  FileText,
  BarChart3,
  Briefcase,
  ShieldAlert,
  Search,
  Plus,
  Trash2,
  Download,
  Check,
  X
} from 'lucide-react';
import { batchEngagementStats } from '../data/mockData';

export default function AdminDashboardPage({
  pendingRegistrations,
  onApproveRegistration,
  onRejectRegistration,
  alumniList,
  events,
  jobs,
  forumThreads,
  onDeleteEvent,
  onDeleteJob,
  onDeleteThread,
  onOpenCreateEvent
}) {
  const [activeAdminTab, setActiveAdminTab] = useState('overview'); // 'overview', 'pending', 'members', 'events', 'moderation'
  const [selectedBatchForChart, setSelectedBatchForChart] = useState(null);
  const [memberSearch, setMemberSearch] = useState('');

  const totalAlumniCount = 1248 + (alumniList.length - 6);
  const activeMembersCount = 862;
  const upcomingEventsCount = events.length;
  const pendingRequestsCount = pendingRegistrations.length;

  const filteredMembers = alumniList.filter(
    (m) =>
      m.name.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.dept.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.batch.toLowerCase().includes(memberSearch.toLowerCase()) ||
      m.company.toLowerCase().includes(memberSearch.toLowerCase())
  );

  const handleExportCSV = () => {
    const headers = "Name,Department,Batch,Designation,Company,Email,Location,Status\n";
    const rows = alumniList
      .map(a => `"${a.name}","${a.dept}","${a.batch}","${a.designation}","${a.company}","${a.email}","${a.location}","${a.status || 'Verified'}"`)
      .join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `BAUST_Alumni_Records_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-8 space-y-5 sm:space-y-6">
      {/* Page Heading matching Figma node 60:628 */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-[28px] font-bold text-[#1e1a3c]">Admin Dashboard</h2>
          <p className="text-xs sm:text-sm md:text-[15px] text-[#69668a] mt-0.5">
            Engagement, verified database records and registration requests.
          </p>
        </div>

        {/* Admin Navigation Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-white p-1 rounded-xl border border-[#e3e0f0] shadow-sm overflow-x-auto">
          <button
            onClick={() => setActiveAdminTab('overview')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeAdminTab === 'overview'
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'text-[#69668a] hover:bg-[#f6f5fc] hover:text-[#1e1a3c]'
            }`}
          >
            Figma Overview
          </button>
          <button
            onClick={() => setActiveAdminTab('pending')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all ${
              activeAdminTab === 'pending'
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'text-[#69668a] hover:bg-[#f6f5fc] hover:text-[#1e1a3c]'
            }`}
          >
            <span>Pending Requests</span>
            {pendingRequestsCount > 0 && (
              <span className="size-4 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                {pendingRequestsCount}
              </span>
            )}
          </button>
          <button
            onClick={() => setActiveAdminTab('members')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeAdminTab === 'members'
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'text-[#69668a] hover:bg-[#f6f5fc] hover:text-[#1e1a3c]'
            }`}
          >
            Alumni Database
          </button>
          <button
            onClick={() => setActiveAdminTab('events')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeAdminTab === 'events'
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'text-[#69668a] hover:bg-[#f6f5fc] hover:text-[#1e1a3c]'
            }`}
          >
            Manage Events
          </button>
          <button
            onClick={() => setActiveAdminTab('moderation')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeAdminTab === 'moderation'
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'text-[#69668a] hover:bg-[#f6f5fc] hover:text-[#1e1a3c]'
            }`}
          >
            Content Moderation
          </button>
        </div>
      </div>

      {/* 4 Stat Cards matching Figma node 60:632 */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Total Alumni */}
        <div className="bg-[#ece7fa] p-5 rounded-[14px] space-y-1">
          <p className="text-[13px] text-[#69668a] font-normal">Total alumni</p>
          <p className="text-[30px] font-bold text-[#5b3fa8] tracking-tight leading-none">
            {totalAlumniCount.toLocaleString()}
          </p>
        </div>

        {/* Active Members */}
        <div className="bg-[#e1f2fc] p-5 rounded-[14px] space-y-1">
          <p className="text-[13px] text-[#69668a] font-normal">Active members</p>
          <p className="text-[30px] font-bold text-[#17608c] tracking-tight leading-none">
            {activeMembersCount.toLocaleString()}
          </p>
        </div>

        {/* Upcoming Events */}
        <div className="bg-[#e4e9fb] p-5 rounded-[14px] space-y-1">
          <p className="text-[13px] text-[#69668a] font-normal">Upcoming events</p>
          <p className="text-[30px] font-bold text-[#33409b] tracking-tight leading-none">
            {upcomingEventsCount}
          </p>
        </div>

        {/* Pending Requests */}
        <div className="bg-[#ece7fa] p-5 rounded-[14px] space-y-1">
          <p className="text-[13px] text-[#69668a] font-normal">Pending requests</p>
          <p className="text-[30px] font-bold text-[#5b3fa8] tracking-tight leading-none">
            {pendingRequestsCount}
          </p>
        </div>
      </div>

      {/* VIEW 1: FIGMA OVERVIEW (Matches Figma 60:645 Row perfectly) */}
      {activeAdminTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-start">
          {/* Engagement Chart matching Figma 60:646 */}
          <div className="lg:col-span-7 bg-white border border-[#e3e0f0] p-6 rounded-[14px] space-y-4 shadow-sm">
            <div>
              <h3 className="text-[17px] font-semibold text-[#1e1a3c]">Engagement by batch</h3>
              <p className="text-[13px] text-[#69668a] mt-0.5">Active members per graduating batch</p>
            </div>

            {/* Interactive Bar Chart matching Figma 60:649 */}
            <div className="flex gap-4 sm:gap-8 h-[210px] items-end justify-center pt-6 px-2 border-b border-[#e3e0f0]">
              {batchEngagementStats.map((item) => {
                const isSelected = selectedBatchForChart === item.batch;
                return (
                  <div
                    key={item.batch}
                    onClick={() => setSelectedBatchForChart(isSelected ? null : item.batch)}
                    className="flex flex-col gap-2 items-center cursor-pointer group"
                  >
                    <div className="text-[11px] font-bold text-[#5b3fa8] opacity-0 group-hover:opacity-100 transition-opacity">
                      {item.count}
                    </div>
                    <div
                      style={{ height: `${item.height}px` }}
                      className={`w-9 sm:w-11 rounded-[8px] transition-all transform hover:scale-105 ${
                        item.highlight
                          ? 'bg-[#7cc6f0]'
                          : isSelected
                            ? 'bg-[#1e1a3c]'
                            : 'bg-[#5b3fa8]'
                      }`}
                    ></div>
                    <p className="text-[12px] text-[#69668a] font-medium mt-1">{item.batch}</p>
                  </div>
                );
              })}
            </div>

            <div className="flex items-center justify-between text-xs text-[#69668a] pt-1">
              <span>* 14th batch currently leads with highest platform engagement (170 active alumni).</span>
              <span className="font-semibold text-[#5b3fa8]">Click bars to inspect</span>
            </div>
          </div>

          {/* Pending Registrations matching Figma 60:668 */}
          <div className="lg:col-span-5 bg-white border border-[#e3e0f0] p-6 rounded-[14px] space-y-4 shadow-sm">
            <div className="flex items-center justify-between">
              <h3 className="text-[17px] font-semibold text-[#1e1a3c]">Pending registrations</h3>
              <span className="text-xs bg-rose-50 text-rose-700 font-bold px-2 py-0.5 rounded-full border border-rose-200">
                {pendingRegistrations.length} awaiting
              </span>
            </div>

            <div className="space-y-3">
              {pendingRegistrations.map((req) => (
                <div
                  key={req.id}
                  className="flex items-center justify-between gap-3 p-2.5 rounded-xl bg-[#f6f5fc] hover:bg-[#ece7fa]/40 border border-[#e3e0f0] transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className={`size-10 rounded-[20px] flex items-center justify-center font-semibold text-sm ${req.avatarBg} ${req.avatarText} shrink-0`}>
                      {req.initials}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-[#1e1a3c]">{req.name}</p>
                      <p className="text-xs text-[#69668a] mt-0.5">{req.batch} · {req.dept}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <button
                      onClick={() => onApproveRegistration(req.id)}
                      className="bg-[#5b3fa8] hover:bg-[#4a3290] text-white px-3 py-1.5 rounded-[8px] text-[13px] font-semibold transition-all shadow-sm"
                    >
                      Approve
                    </button>
                    <button
                      onClick={() => onRejectRegistration(req.id)}
                      className="bg-white border border-[#e3e0f0] hover:bg-[#f6f5fc] text-[#1e1a3c] px-3 py-1.5 rounded-[8px] text-[13px] font-semibold transition-colors"
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))}

              {pendingRegistrations.length === 0 && (
                <div className="text-center py-10 space-y-2">
                  <CheckCircle2 className="size-8 text-emerald-500 mx-auto" />
                  <p className="text-sm font-semibold text-[#1e1a3c]">All requests processed</p>
                  <p className="text-xs text-[#69668a]">No pending student or alumni verifications remaining.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* VIEW 2: DETAILED PENDING APPLICATIONS MANAGEMENT */}
      {activeAdminTab === 'pending' && (
        <div className="bg-white border border-[#e3e0f0] rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#e3e0f0] pb-4">
            <div>
              <h3 className="font-bold text-lg text-[#1e1a3c]">Alumni Affairs Verification Queue</h3>
              <p className="text-xs text-[#69668a] mt-0.5">
                Review submitted academic credentials, university email IDs, and current employment proof.
              </p>
            </div>
            <span className="text-xs bg-[#ece7fa] text-[#5b3fa8] font-bold px-3 py-1 rounded-full self-start sm:self-auto">
              Total {pendingRegistrations.length} Requests
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f6f5fc] text-[#69668a] border-y border-[#e3e0f0]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Applicant</th>
                  <th className="py-3 px-4 font-semibold">Dept & Batch</th>
                  <th className="py-3 px-4 font-semibold">Student ID</th>
                  <th className="py-3 px-4 font-semibold">Workplace / Role</th>
                  <th className="py-3 px-4 font-semibold">Applied</th>
                  <th className="py-3 px-4 font-semibold text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3e0f0]">
                {pendingRegistrations.map((req) => (
                  <tr key={req.id} className="hover:bg-[#f8fafc] transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2.5">
                        <div className={`size-8 rounded-full flex items-center justify-center font-bold text-xs ${req.avatarBg} ${req.avatarText}`}>
                          {req.initials}
                        </div>
                        <div>
                          <p className="font-bold text-[#1e1a3c]">{req.name}</p>
                          <p className="text-[11px] text-[#69668a]">{req.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#1e1a3c]">
                      {req.dept} ({req.batch})
                    </td>
                    <td className="py-3 px-4 text-[#69668a] font-mono">
                      {req.studentId || '160201020'}
                    </td>
                    <td className="py-3 px-4 text-[#1e1a3c]">
                      {req.workplace}
                    </td>
                    <td className="py-3 px-4 text-[#69668a]">
                      {req.date || 'Today'}
                    </td>
                    <td className="py-3 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <button
                          onClick={() => onApproveRegistration(req.id)}
                          className="bg-emerald-600 hover:bg-emerald-700 text-white px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 shadow-sm transition-all"
                        >
                          <Check className="size-3.5" />
                          <span>Approve & Verify</span>
                        </button>
                        <button
                          onClick={() => onRejectRegistration(req.id)}
                          className="border border-rose-300 hover:bg-rose-50 text-rose-700 px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors"
                        >
                          <X className="size-3.5" />
                          <span>Reject</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {pendingRegistrations.length === 0 && (
              <div className="text-center py-12 text-[#69668a] text-xs">
                No pending requests. All alumni applications are verified!
              </div>
            )}
          </div>
        </div>
      )}

      {/* VIEW 3: ALUMNI DATABASE MANAGEMENT */}
      {activeAdminTab === 'members' && (
        <div className="bg-white border border-[#e3e0f0] rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e3e0f0] pb-4">
            <div>
              <h3 className="font-bold text-lg text-[#1e1a3c]">BAUST Central Alumni Database</h3>
              <p className="text-xs text-[#69668a] mt-0.5">
                Official registry maintained by the Alumni Affairs Office, BAUST Saidpur.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handleExportCSV}
                className="bg-[#17608c] hover:bg-[#124b6e] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
              >
                <Download className="size-3.5" />
                <span>Export CSV Report</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="relative flex-1">
              <Search className="size-4 absolute left-3.5 top-2.5 text-[#69668a]" />
              <input
                type="text"
                placeholder="Filter alumni by name, department, batch, or employer..."
                value={memberSearch}
                onChange={(e) => setMemberSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#f6f5fc] text-[#69668a] border-y border-[#e3e0f0]">
                <tr>
                  <th className="py-3 px-4 font-semibold">Alumnus Name</th>
                  <th className="py-3 px-4 font-semibold">Cohort</th>
                  <th className="py-3 px-4 font-semibold">Current Organization</th>
                  <th className="py-3 px-4 font-semibold">Location</th>
                  <th className="py-3 px-4 font-semibold">Official Status</th>
                  <th className="py-3 px-4 font-semibold">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#e3e0f0]">
                {filteredMembers.map((member) => (
                  <tr key={member.id} className="hover:bg-[#f8fafc] transition-colors">
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className={`size-7 rounded-lg flex items-center justify-center font-bold text-xs ${member.avatarBg} ${member.avatarText}`}>
                          {member.initials}
                        </div>
                        <div>
                          <p className="font-bold text-[#1e1a3c]">{member.name}</p>
                          <p className="text-[11px] text-[#69668a]">{member.email}</p>
                        </div>
                      </div>
                    </td>
                    <td className="py-3 px-4 font-semibold text-[#1e1a3c]">
                      {member.batch} · {member.dept}
                    </td>
                    <td className="py-3 px-4 text-[#1e1a3c]">
                      {member.designation} · {member.company}
                    </td>
                    <td className="py-3 px-4 text-[#69668a]">
                      {member.location}
                    </td>
                    <td className="py-3 px-4">
                      <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] px-2 py-0.5 rounded-full font-semibold">
                        {member.status || 'Verified'}
                      </span>
                    </td>
                    <td className="py-3 px-4">
                      <button
                        onClick={() => alert(`Viewing administrative ledger for ${member.name} (${member.batch} batch)`)}
                        className="text-[#5b3fa8] hover:underline font-semibold"
                      >
                        Inspect
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* VIEW 4: MANAGE EVENTS */}
      {activeAdminTab === 'events' && (
        <div className="bg-white border border-[#e3e0f0] rounded-2xl p-6 shadow-sm space-y-5">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-[#e3e0f0] pb-4">
            <div>
              <h3 className="font-bold text-lg text-[#1e1a3c]">Campus Event Coordination</h3>
              <p className="text-xs text-[#69668a] mt-0.5">
                Schedule official university reunions, mentorship batches, and departmental seminars.
              </p>
            </div>

            <button
              onClick={onOpenCreateEvent}
              className="bg-[#5b3fa8] hover:bg-[#4a3290] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all"
            >
              <Plus className="size-4" />
              <span>Publish New Event</span>
            </button>
          </div>

          <div className="space-y-3">
            {events.map((ev) => (
              <div
                key={ev.id}
                className="flex items-center justify-between p-4 rounded-xl border border-[#e3e0f0] bg-[#f8fafc] hover:bg-[#ece7fa]/30 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-white border border-[#e3e0f0] rounded-xl px-3 py-1.5 text-center min-w-[55px]">
                    <span className="block text-[10px] font-bold text-[#69668a] uppercase">{ev.dateMonth}</span>
                    <span className="block text-lg font-bold text-[#5b3fa8]">{ev.dateDay}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-bold text-sm text-[#1e1a3c]">{ev.title}</h4>
                      <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${ev.categoryColor}`}>
                        {ev.category}
                      </span>
                    </div>
                    <p className="text-xs text-[#69668a] mt-1">{ev.venue} · {ev.time} · {ev.attendees} Registered Attendees</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => alert(`Attendees list exported for ${ev.title} (${ev.attendees} attendees)`)}
                    className="px-3 py-1.5 border border-[#e3e0f0] hover:bg-white text-xs font-semibold rounded-lg text-[#17608c]"
                  >
                    View RSVPs
                  </button>
                  <button
                    onClick={() => onDeleteEvent(ev.id)}
                    className="p-1.5 text-rose-500 hover:bg-rose-50 rounded-lg transition-colors"
                    title="Remove Event"
                  >
                    <Trash2 className="size-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* VIEW 5: CONTENT MODERATION */}
      {activeAdminTab === 'moderation' && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Forum Moderation */}
          <div className="bg-white border border-[#e3e0f0] rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-[#1e1a3c] flex items-center gap-2">
              <ShieldAlert className="size-4 text-[#5b3fa8]" />
              <span>Forum Thread Moderation</span>
            </h3>
            <div className="space-y-3">
              {forumThreads.map((th) => (
                <div key={th.id} className="p-3 rounded-xl border border-[#e3e0f0] bg-[#f8fafc] flex items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-semibold text-[#1e1a3c] line-clamp-1">{th.title}</p>
                    <p className="text-[11px] text-[#69668a]">By {th.author} · {th.repliesCount} replies</p>
                  </div>
                  <button
                    onClick={() => onDeleteThread(th.id)}
                    className="text-rose-500 hover:text-rose-700 p-1 font-bold text-xs"
                    title="Delete Thread"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Job Post Moderation */}
          <div className="bg-white border border-[#e3e0f0] rounded-2xl p-5 shadow-sm space-y-4">
            <h3 className="font-bold text-base text-[#1e1a3c] flex items-center gap-2">
              <Briefcase className="size-4 text-[#5b3fa8]" />
              <span>Job Board Moderation</span>
            </h3>
            <div className="space-y-3">
              {jobs.map((jb) => (
                <div key={jb.id} className="p-3 rounded-xl border border-[#e3e0f0] bg-[#f8fafc] flex items-center justify-between gap-3 text-xs">
                  <div>
                    <p className="font-semibold text-[#1e1a3c] line-clamp-1">{jb.title} ({jb.company})</p>
                    <p className="text-[11px] text-[#69668a]">{jb.sharedBy}</p>
                  </div>
                  <button
                    onClick={() => onDeleteJob(jb.id)}
                    className="text-rose-500 hover:text-rose-700 p-1 font-bold text-xs"
                    title="Remove Job"
                  >
                    <Trash2 className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
