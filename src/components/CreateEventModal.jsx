import React, { useState } from 'react';
import { X, Calendar, MapPin, Clock, Users } from 'lucide-react';

export default function CreateEventModal({ isOpen, onClose, onAddEvent }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Seminar',
    dateMonth: 'DEC',
    dateDay: '24',
    time: '3:00 PM',
    venue: 'Campus Auditorium',
    description: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.venue) return;

    const categoryColors = {
      Seminar: 'bg-[#ece7fa] text-[#5b3fa8]',
      Mentorship: 'bg-[#e1f2fc] text-[#17608c]',
      Reunion: 'bg-[#e4e9fb] text-[#33409b]',
      Workshop: 'bg-emerald-100 text-emerald-800'
    };

    const newEvent = {
      id: `evt-${Date.now()}`,
      title: formData.title,
      category: formData.category,
      categoryColor: categoryColors[formData.category] || 'bg-[#ece7fa] text-[#5b3fa8]',
      dateMonth: formData.dateMonth.toUpperCase(),
      dateDay: formData.dateDay,
      time: formData.time,
      venue: formData.venue,
      attendees: 1,
      isRsvp: false,
      description: formData.description || 'Official event organized by BAUST Alumni Affairs Office.'
    };

    onAddEvent(newEvent);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1e1a3c]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-[#e3e0f0] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#5b3fa8] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-lg">
              <Calendar className="size-5 text-[#7cc6f0]" />
            </div>
            <div>
              <h3 className="font-bold text-base">Create Alumni Event</h3>
              <p className="text-xs text-[#d9d3f5]">Alumni Affairs Office · Official Event Planner</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 text-white">
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Event Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Industry Placement & Networking Gala"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
            />
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Category</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white"
              >
                <option value="Seminar">Seminar</option>
                <option value="Mentorship">Mentorship</option>
                <option value="Reunion">Reunion</option>
                <option value="Workshop">Workshop</option>
              </select>
            </div>

            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Event Time</label>
              <div className="relative">
                <Clock className="size-3.5 absolute left-3 top-2.5 text-[#69668a]" />
                <input
                  type="text"
                  placeholder="e.g. 4:00 PM"
                  value={formData.time}
                  onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                  className="w-full pl-8 pr-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Month (e.g. DEC)</label>
              <input
                type="text"
                placeholder="DEC"
                maxLength={3}
                value={formData.dateMonth}
                onChange={(e) => setFormData({ ...formData, dateMonth: e.target.value.toUpperCase() })}
                className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
              />
            </div>

            <div>
              <label className="block font-semibold text-[#1e1a3c] mb-1">Day of Month</label>
              <input
                type="number"
                min={1}
                max={31}
                placeholder="24"
                value={formData.dateDay}
                onChange={(e) => setFormData({ ...formData, dateDay: e.target.value })}
                className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Venue / Platform *</label>
            <div className="relative">
              <MapPin className="size-3.5 absolute left-3 top-2.5 text-[#69668a]" />
              <input
                type="text"
                required
                placeholder="e.g. Campus Auditorium / Online (Google Meet)"
                value={formData.venue}
                onChange={(e) => setFormData({ ...formData, venue: e.target.value })}
                className="w-full pl-8 pr-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
              />
            </div>
          </div>

          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Event Summary & Agenda</label>
            <textarea
              rows={3}
              placeholder="Provide event schedule, guest speakers, and target audience..."
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
              Publish Event
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
