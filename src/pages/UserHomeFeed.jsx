import React from 'react';
import { Calendar, MessageSquare, Briefcase, ChevronRight, Check } from 'lucide-react';

export default function UserHomeFeed({
  currentRole,
  events,
  forumThreads,
  jobs,
  onNavigate,
  onRsvpToggle,
  onSelectThread,
  onSelectJob
}) {
  const userName = currentRole === 'student' ? 'Tanvir' : 'Rahim';

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-8 space-y-5 sm:space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-[#2a1a63] via-[#432d87] to-[#5b3fa8] rounded-2xl p-5 sm:p-6 md:p-8 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg">
        <div className="space-y-1">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">Welcome back, {userName}</h2>
          <p className="text-xs sm:text-sm text-[#e4dffa]">
            Looking for guidance? Ask an alumnus in your field to be your mentor.
          </p>
        </div>

        <button
          onClick={() => onNavigate('directory')}
          className="w-full sm:w-auto bg-[#7cc6f0] hover:bg-[#68bee8] text-[#2a1a63] px-5 py-2.5 rounded-xl font-bold text-xs transition-all shadow-md shrink-0 flex items-center justify-center gap-1.5 active:scale-95"
        >
          <span>Find alumni</span>
          <ChevronRight className="size-4" />
        </button>
      </div>

      {/* 3 Column Dashboard Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6 items-start">
        {/* Column 1: Upcoming Events */}
        <div className="bg-white border border-[#e3e0f0] rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e3e0f0] pb-3">
            <h3 className="font-bold text-base text-[#1e1a3c] flex items-center gap-2">
              <Calendar className="size-4 text-[#5b3fa8]" />
              <span>Upcoming events</span>
            </h3>
            <button
              onClick={() => onNavigate('events')}
              className="text-xs text-[#5b3fa8] font-semibold hover:underline"
            >
              See all
            </button>
          </div>

          <div className="space-y-3">
            {events.slice(0, 3).map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between gap-3 p-3 rounded-xl bg-[#f6f5fc] hover:bg-[#ece7fa]/50 border border-[#e3e0f0] transition-colors"
              >
                <div className="flex items-center gap-3">
                  <div className="bg-white border border-[#e3e0f0] rounded-xl px-2.5 py-1.5 text-center shrink-0 min-w-[50px] shadow-sm">
                    <span className="block text-[10px] font-bold text-[#69668a] uppercase">{event.dateMonth}</span>
                    <span className="block text-base font-extrabold text-[#5b3fa8] leading-tight">{event.dateDay}</span>
                  </div>

                  <div className="text-xs">
                    <h4 className="font-bold text-[#1e1a3c] line-clamp-1">{event.title}</h4>
                    <p className="text-[#69668a] text-[11px] mt-0.5">{event.venue} · {event.time}</p>
                  </div>
                </div>

                <button
                  onClick={() => onRsvpToggle(event.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold shrink-0 transition-all ${
                    event.isRsvp
                      ? 'bg-emerald-600 text-white'
                      : 'bg-[#5b3fa8] hover:bg-[#4a3290] text-white shadow-sm'
                  }`}
                >
                  {event.isRsvp ? (
                    <span className="flex items-center gap-1">
                      <Check className="size-3" />
                      Going
                    </span>
                  ) : (
                    'RSVP'
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Column 2: Latest in the Forum */}
        <div className="bg-white border border-[#e3e0f0] rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e3e0f0] pb-3">
            <h3 className="font-bold text-base text-[#1e1a3c] flex items-center gap-2">
              <MessageSquare className="size-4 text-[#5b3fa8]" />
              <span>Latest in the forum</span>
            </h3>
            <button
              onClick={() => onNavigate('forum')}
              className="text-xs text-[#5b3fa8] font-semibold hover:underline"
            >
              Open forum
            </button>
          </div>

          <div className="space-y-3">
            {forumThreads.slice(0, 4).map((thread) => (
              <div
                key={thread.id}
                onClick={() => {
                  onSelectThread(thread);
                  onNavigate('forum');
                }}
                className="p-3 rounded-xl bg-[#f6f5fc] hover:bg-[#ece7fa]/50 border border-[#e3e0f0] transition-colors cursor-pointer space-y-2"
              >
                <h4 className="font-semibold text-xs text-[#1e1a3c] line-clamp-1 hover:text-[#5b3fa8]">
                  {thread.title}
                </h4>
                <div className="flex items-center justify-between text-[11px]">
                  <span className="text-[#69668a]">{thread.repliesCount} replies</span>
                  <span className={`px-2 py-0.5 rounded-md font-medium text-[10px] ${thread.categoryColor}`}>
                    {thread.category}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Column 3: New Jobs */}
        <div className="bg-white border border-[#e3e0f0] rounded-2xl p-5 space-y-4 shadow-sm">
          <div className="flex items-center justify-between border-b border-[#e3e0f0] pb-3">
            <h3 className="font-bold text-base text-[#1e1a3c] flex items-center gap-2">
              <Briefcase className="size-4 text-[#5b3fa8]" />
              <span>New jobs</span>
            </h3>
            <button
              onClick={() => onNavigate('jobs')}
              className="text-xs text-[#5b3fa8] font-semibold hover:underline"
            >
              Browse all
            </button>
          </div>

          <div className="space-y-3">
            {jobs.slice(0, 4).map((job) => (
              <div
                key={job.id}
                onClick={() => {
                  onSelectJob(job);
                  onNavigate('jobs');
                }}
                className="flex items-center justify-between p-3 rounded-xl bg-[#f6f5fc] hover:bg-[#ece7fa]/50 border border-[#e3e0f0] transition-colors cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className={`size-9 rounded-xl flex items-center justify-center font-bold text-xs ${job.companyBg} ${job.companyText} shadow-sm shrink-0`}>
                    {job.companyInitial}
                  </div>
                  <div className="text-xs">
                    <h4 className="font-semibold text-[#1e1a3c] line-clamp-1">{job.title}</h4>
                    <p className="text-[#69668a] text-[11px] mt-0.5">{job.company} · {job.location}</p>
                  </div>
                </div>

                <span className="text-[10px] font-semibold text-[#5b3fa8] bg-[#ece7fa] px-2 py-1 rounded-md shrink-0">
                  {job.type}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
