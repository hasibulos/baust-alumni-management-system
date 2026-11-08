import React, { useState } from 'react';
import { MessageSquare, Plus, Tag, Send, CornerDownRight, Hash } from 'lucide-react';

export default function ForumPage({
  forumThreads,
  onOpenNewThread,
  onAddReply,
  currentUserName,
  currentUserBatch,
  selectedThreadId
}) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [expandedThreadId, setExpandedThreadId] = useState(selectedThreadId || null);
  const [replyText, setReplyText] = useState('');

  const categories = ['All', 'Career', 'Higher Studies', 'Campus News', 'Technical'];

  const filteredThreads = forumThreads.filter((t) => {
    if (activeCategory === 'All') return true;
    return t.category.toLowerCase() === activeCategory.toLowerCase();
  });

  const handleSendReply = (threadId) => {
    if (!replyText.trim()) return;

    const newReply = {
      id: `rep-${Date.now()}`,
      author: currentUserName || 'Rahim Uddin',
      initials: (currentUserName || 'Rahim Uddin').split(' ').map(n => n[0]).join('').slice(0, 2),
      batch: currentUserBatch || '12th batch',
      timeAgo: 'Just now',
      text: replyText
    };

    onAddReply(threadId, newReply);
    setReplyText('');
  };

  return (
    <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-20 py-6 md:py-8 space-y-5 sm:space-y-6">
      {/* Page Title & Action */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#1e1a3c]">Discussion Forum</h2>
          <p className="text-xs sm:text-sm text-[#69668a] mt-0.5">Ask questions, share advice, and collaborate across batches.</p>
        </div>

        <button
          onClick={onOpenNewThread}
          className="bg-[#5b3fa8] hover:bg-[#4a3290] text-white px-5 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-1.5 shadow-sm transition-all self-start sm:self-auto active:scale-95"
        >
          <Plus className="size-4" />
          <span>New thread</span>
        </button>
      </div>

      {/* Category Filter Chips */}
      <div className="flex items-center gap-2 overflow-x-auto pb-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeCategory === cat
                ? 'bg-[#5b3fa8] text-white shadow-sm'
                : 'bg-white text-[#69668a] hover:bg-[#ece7fa]/50 hover:text-[#5b3fa8] border border-[#e3e0f0]'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Main Layout: Left Thread List, Right Popular Topics Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Thread List */}
        <div className="lg:col-span-8 space-y-4">
          {filteredThreads.map((thread) => {
            const isExpanded = expandedThreadId === thread.id;

            return (
              <div
                key={thread.id}
                className="bg-white border border-[#e3e0f0] rounded-2xl p-5 hover:shadow-md transition-all space-y-4"
              >
                {/* Thread Header */}
                <div
                  onClick={() => setExpandedThreadId(isExpanded ? null : thread.id)}
                  className="flex items-start justify-between gap-4 cursor-pointer"
                >
                  <div className="flex items-start gap-3.5">
                    <div className="size-10 rounded-xl bg-[#ece7fa] text-[#5b3fa8] font-bold text-xs flex items-center justify-center shrink-0 shadow-sm">
                      {thread.initials}
                    </div>

                    <div className="space-y-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h3 className="font-bold text-base text-[#1e1a3c] hover:text-[#5b3fa8] transition-colors">
                          {thread.title}
                        </h3>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-md ${thread.categoryColor || 'bg-[#ece7fa] text-[#5b3fa8]'}`}>
                          {thread.category}
                        </span>
                      </div>

                      <p className="text-xs text-[#69668a]">
                        <span className="font-semibold text-[#1e1a3c]">{thread.author}</span> · {thread.batch} · {thread.timeAgo}
                      </p>
                    </div>
                  </div>

                  {/* Reply Pill */}
                  <div className="bg-[#f6f5fc] border border-[#e3e0f0] rounded-xl px-3 py-1.5 text-center shrink-0">
                    <span className="block text-sm font-bold text-[#5b3fa8]">{thread.repliesCount}</span>
                    <span className="block text-[10px] text-[#69668a]">replies</span>
                  </div>
                </div>

                {/* Content Details */}
                <p className="text-xs text-[#1e1a3c] leading-relaxed bg-[#f6f5fc] p-3.5 rounded-xl border border-[#e3e0f0]">
                  {thread.content}
                </p>

                {/* Replies section (if clicked/expanded) */}
                {isExpanded && (
                  <div className="pt-3 border-t border-[#e3e0f0] space-y-3">
                    <h4 className="text-xs font-bold text-[#69668a] uppercase tracking-wider">
                      Discussion Replies ({thread.replies ? thread.replies.length : 0})
                    </h4>

                    <div className="space-y-2.5">
                      {(thread.replies || []).map((reply) => (
                        <div key={reply.id} className="flex items-start gap-2.5 p-3 rounded-xl bg-[#f8fafc] border border-[#e3e0f0]">
                          <div className="size-7 rounded-lg bg-[#5b3fa8]/10 text-[#5b3fa8] font-bold text-[10px] flex items-center justify-center shrink-0">
                            {reply.initials}
                          </div>
                          <div className="text-xs space-y-0.5 flex-1">
                            <div className="flex items-center justify-between">
                              <span className="font-semibold text-[#1e1a3c]">{reply.author} <span className="text-[10px] text-[#69668a]">({reply.batch})</span></span>
                              <span className="text-[10px] text-[#69668a]">{reply.timeAgo}</span>
                            </div>
                            <p className="text-[#1e1a3c] leading-relaxed">{reply.text}</p>
                          </div>
                        </div>
                      ))}

                      {(!thread.replies || thread.replies.length === 0) && (
                        <p className="text-xs text-[#69668a] italic py-2">No replies yet. Be the first to join the conversation!</p>
                      )}
                    </div>

                    {/* Post Reply Input Box */}
                    <div className="flex items-center gap-2 pt-2">
                      <input
                        type="text"
                        placeholder="Write a helpful response..."
                        value={replyText}
                        onChange={(e) => setReplyText(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter') handleSendReply(thread.id);
                        }}
                        className="flex-1 px-3.5 py-2 text-xs border border-[#e3e0f0] rounded-xl focus:outline-none focus:ring-2 focus:ring-[#5b3fa8] text-[#1e1a3c]"
                      />
                      <button
                        onClick={() => handleSendReply(thread.id)}
                        className="bg-[#5b3fa8] hover:bg-[#4a3290] text-white px-4 py-2 rounded-xl text-xs font-semibold flex items-center gap-1 shadow-sm transition-all"
                      >
                        <Send className="size-3.5" />
                        <span>Reply</span>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Right Sidebar: Popular Topics Hashtags */}
        <div className="lg:col-span-4 bg-white border border-[#e3e0f0] rounded-2xl p-5 shadow-sm space-y-4">
          <div className="border-b border-[#e3e0f0] pb-3">
            <h3 className="font-bold text-base text-[#1e1a3c]">Popular topics</h3>
            <p className="text-xs text-[#69668a] mt-0.5">Most discussed hashtags by BAUST members</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['#interviews', '#msc abroad', '#web dev', '#referrals', '#reunion', '#scholarships', '#spring boot', '#baust campus'].map((tag) => (
              <span
                key={tag}
                onClick={() => setActiveCategory('All')}
                className="bg-[#ece7fa] hover:bg-[#5b3fa8] hover:text-white text-[#5b3fa8] text-xs px-3 py-1.5 rounded-xl font-medium cursor-pointer transition-all border border-[#dbd4f5]"
              >
                {tag}
              </span>
            ))}
          </div>

          <div className="pt-4 border-t border-[#e3e0f0] space-y-2 text-xs text-[#69668a]">
            <p className="font-semibold text-[#1e1a3c]">Community Guidelines:</p>
            <p>Respect batchmates, keep discussions constructive, and avoid unsolicited commercial advertising.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
