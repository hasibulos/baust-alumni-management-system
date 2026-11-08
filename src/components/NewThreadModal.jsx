import React, { useState } from 'react';
import { X, MessageSquare, Tag } from 'lucide-react';

export default function NewThreadModal({ isOpen, onClose, onAddThread, currentUserName, currentUserBatch }) {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Career',
    content: ''
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) return;

    const categoryColors = {
      Career: 'bg-[#ece7fa] text-[#5b3fa8]',
      'Higher Studies': 'bg-[#e4e9fb] text-[#33409b]',
      Technical: 'bg-[#e1f2fc] text-[#17608c]',
      'Campus News': 'bg-[#ece7fa] text-[#5b3fa8]'
    };

    const newThread = {
      id: `thm-${Date.now()}`,
      title: formData.title,
      category: formData.category,
      categoryColor: categoryColors[formData.category] || 'bg-[#ece7fa] text-[#5b3fa8]',
      author: currentUserName || 'Rahim Uddin',
      initials: (currentUserName || 'Rahim Uddin').split(' ').map(n => n[0]).join('').slice(0, 2),
      batch: currentUserBatch || '12th batch',
      timeAgo: 'Just now',
      repliesCount: 0,
      content: formData.content,
      replies: []
    };

    onAddThread(newThread);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1e1a3c]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-lg w-full border border-[#e3e0f0] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        <div className="bg-[#5b3fa8] text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="p-2 bg-white/10 rounded-lg">
              <MessageSquare className="size-5 text-[#7cc6f0]" />
            </div>
            <div>
              <h3 className="font-bold text-base">Start a New Discussion</h3>
              <p className="text-xs text-[#d9d3f5]">Ask, share insights, and collaborate with BAUST community</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-white/10 text-white">
            <X className="size-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-4 text-xs">
          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Topic Title *</label>
            <input
              type="text"
              required
              placeholder="e.g. Best practices for final year thesis publication"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
            />
          </div>

          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1 flex items-center gap-1.5">
              <Tag className="size-3.5 text-[#69668a]" />
              Select Category
            </label>
            <select
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              className="w-full px-3 py-2 border border-[#e3e0f0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c] bg-white"
            >
              <option value="Career">Career & Placement</option>
              <option value="Higher Studies">Higher Studies & Scholarships</option>
              <option value="Technical">Technical & Development</option>
              <option value="Campus News">Campus News & Reunions</option>
            </select>
          </div>

          <div>
            <label className="block font-semibold text-[#1e1a3c] mb-1">Discussion Message / Details *</label>
            <textarea
              required
              rows={4}
              placeholder="Provide background, questions, or context so alumni and students can reply with actionable answers..."
              value={formData.content}
              onChange={(e) => setFormData({ ...formData, content: e.target.value })}
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
              Post Topic
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
