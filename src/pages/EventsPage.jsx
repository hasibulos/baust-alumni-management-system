import React, { useState } from 'react';
import { Calendar, MapPin, Clock, Users, Check, Plus, Tag } from 'lucide-react';

export default function EventsPage({
  events,
  onRsvpToggle,
  onOpenCreateEvent,
  isAdmin
}) {
  const [activeFilterTab, setActiveFilterTab] = useState('Upcoming'); // 'Upcoming', 'Past', 'My RSVPs'

  const myRsvpEvents = events.filter(e => e.isRsvp);

  const displayedEvents = events.filter(e => {
    if (activeFilterTab === 'My RSVPs') return e.isRsvp;
    if (activeFilterTab === 'Past') return false; // currently all mock events are upcoming
    return true;
  });

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-8 space-y-5 sm:space-y-6">
      {/* Page Title & Controls */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a3c]">Events</h2>
          <p className="text-xs sm:text-sm text-[#69668a] mt-0.5">Reunions, seminars, tech workshops and networking sessions.</p>
        </div>

        <div className="flex items-center gap-2">
          {isAdmin && (
            <button
              onClick={onOpenCreateEvent}
              className="bg-[#5b3fa8] hover:bg-[#4a3290] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all active:scale-95"
            >
              <Plus className="size-4" />
              <span>Create Event</span>
            </button>
          )}
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-2 border-b border-[#e3e0f0] pb-2 overflow-x-auto">
        {['Upcoming', 'Past', 'My RSVPs'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveFilterTab(tab)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all ${
              activeFilterTab === tab
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'text-[#69668a] hover:bg-white hover:text-[#1e1a3c]'
            }`}
          >
            {tab} {tab === 'My RSVPs' && `(${myRsvpEvents.length})`}
          </button>
        ))}
      </div>

      {/* Main Grid: Left Event Cards, Right RSVPs Widget */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Event List */}
        <div className="lg:col-span-8 space-y-4">
          {displayedEvents.map((event) => (
            <div
              key={event.id}
              className="bg-white border border-[#e3e0f0] rounded-2xl p-5 hover:shadow-md transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
            >
              <div className="flex items-start gap-4">
                {/* Date Block */}
                <div className="bg-[#f6f5fc] border border-[#e3e0f0] rounded-2xl p-3 text-center min-w-[68px] shadow-sm shrink-0">
                  <span className="block text-xs font-bold text-[#69668a] uppercase">{event.dateMonth}</span>
                  <span className="block text-2xl font-black text-[#5b3fa8]">{event.dateDay}</span>
                </div>

                {/* Event Details */}
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <h3 className="font-bold text-base text-[#1e1a3c]">{event.title}</h3>
                    <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${event.categoryColor || 'bg-[#ece7fa] text-[#5b3fa8]'}`}>
                      {event.category}
                    </span>
                  </div>

                  <p className="text-xs text-[#69668a] flex items-center gap-3">
                    <span className="flex items-center gap-1">
                      <MapPin className="size-3.5 text-[#5b3fa8]" />
                      {event.venue}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="size-3.5 text-[#5b3fa8]" />
                      {event.time}
                    </span>
                  </p>

                  <p className="text-xs text-[#69668a] leading-relaxed line-clamp-2 pt-1">
                    {event.description}
                  </p>

                  <div className="flex items-center gap-1.5 text-[11px] text-[#17608c] font-medium pt-1">
                    <Users className="size-3.5" />
                    <span>{event.attendees + (event.isRsvp ? 1 : 0)} attending</span>
                  </div>
                </div>
              </div>

              {/* RSVP Action */}
              <button
                onClick={() => onRsvpToggle(event.id)}
                className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold shrink-0 transition-all ${
                  event.isRsvp
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'bg-[#5b3fa8] hover:bg-[#4a3290] text-white shadow-sm'
                }`}
              >
                {event.isRsvp ? (
                  <span className="flex items-center justify-center gap-1.5">
                    <Check className="size-4" />
                    Going
                  </span>
                ) : (
                  'RSVP'
                )}
              </button>
            </div>
          ))}

          {displayedEvents.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border border-[#e3e0f0] space-y-2">
              <p className="text-sm font-bold text-[#1e1a3c]">No events in this view</p>
              <p className="text-xs text-[#69668a]">Check the Upcoming tab to discover new reunions and seminars.</p>
            </div>
          )}
        </div>

        {/* Right Sidebar: Your RSVPs */}
        <div className="lg:col-span-4 bg-white border border-[#e3e0f0] rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-[#e3e0f0] pb-3">
            <h3 className="font-bold text-base text-[#1e1a3c]">Your RSVPs</h3>
            <p className="text-xs text-[#69668a] mt-0.5">Events you have registered to attend</p>
          </div>

          <div className="space-y-3">
            {myRsvpEvents.map((event) => (
              <div
                key={event.id}
                className="flex items-center justify-between p-3 rounded-xl bg-[#f6f5fc] border border-[#e3e0f0]"
              >
                <div className="text-xs">
                  <h4 className="font-bold text-[#1e1a3c] line-clamp-1">{event.title}</h4>
                  <span className="inline-flex items-center gap-1 text-[11px] text-emerald-700 font-semibold mt-0.5">
                    <Check className="size-3" />
                    Going
                  </span>
                </div>

                <div className="text-right">
                  <span className="block text-[10px] font-bold text-[#69668a] uppercase">{event.dateMonth}</span>
                  <span className="block text-sm font-black text-[#5b3fa8]">{event.dateDay}</span>
                </div>
              </div>
            ))}

            {myRsvpEvents.length === 0 && (
              <p className="text-xs text-[#69668a] py-6 text-center italic">
                You haven't RSVP'd to any events yet. Click "RSVP" on any event to save your seat.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
