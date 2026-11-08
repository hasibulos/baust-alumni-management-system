import React from 'react';
import { X, MapPin, Briefcase, GraduationCap, Mail, Globe, Check, UserPlus, ExternalLink } from 'lucide-react';

export default function AlumniProfileModal({ alumnus, onClose, onConnect, isConnected, isStudent }) {
  if (!alumnus) return null;

  return (
    <div className="fixed inset-0 z-50 bg-[#1e1a3c]/60 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-xl w-full border border-[#e3e0f0] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#2a1a63] to-[#5b3fa8] p-6 text-white relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
          >
            <X className="size-5" />
          </button>

          <div className="flex items-center gap-4">
            <div className={`size-16 rounded-2xl flex items-center justify-center text-xl font-bold ${alumnus.avatarBg || 'bg-white'} ${alumnus.avatarText || 'text-[#5b3fa8]'} shadow-md`}>
              {alumnus.initials}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-xl font-bold text-white">{alumnus.name}</h3>
                <span className="bg-[#7cc6f0]/20 text-[#7cc6f0] border border-[#7cc6f0]/30 text-xs px-2 py-0.5 rounded-full font-medium">
                  {alumnus.status || 'Verified Alumnus'}
                </span>
              </div>
              <p className="text-[#d9d3f5] text-sm mt-0.5 font-medium flex items-center gap-1.5">
                <Briefcase className="size-3.5" />
                {alumnus.designation} · {alumnus.company}
              </p>
              <p className="text-[#e1f2fc] text-xs mt-1 flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <GraduationCap className="size-3.5" />
                  {alumnus.batch} batch · {alumnus.dept}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="size-3" />
                  {alumnus.location}
                </span>
              </p>
            </div>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[70vh] overflow-y-auto">
          {/* About / Bio */}
          <div>
            <h4 className="text-xs font-semibold text-[#69668a] uppercase tracking-wider mb-2">About & Background</h4>
            <p className="text-sm text-[#1e1a3c] leading-relaxed bg-[#f6f5fc] p-3.5 rounded-xl border border-[#e3e0f0]">
              {alumnus.bio || 'Proud graduate of Bangladesh Army University of Science and Technology (BAUST), actively engaged in engineering excellence and alumni community development.'}
            </p>
          </div>

          {/* Education & Academic Record */}
          <div>
            <h4 className="text-xs font-semibold text-[#69668a] uppercase tracking-wider mb-2">Academic Credentials</h4>
            <div className="border border-[#e3e0f0] rounded-xl p-3.5 flex items-start gap-3">
              <div className="bg-[#ece7fa] p-2 rounded-lg text-[#5b3fa8]">
                <GraduationCap className="size-5" />
              </div>
              <div className="text-xs">
                <p className="font-semibold text-sm text-[#1e1a3c]">B.Sc. in {alumnus.dept === 'CSE' ? 'Computer Science & Engineering' : alumnus.dept === 'EEE' ? 'Electrical & Electronic Engineering' : 'Engineering'}</p>
                <p className="text-[#69668a]">Bangladesh Army University of Science and Technology (BAUST), Saidpur</p>
                <p className="text-[#5b3fa8] font-medium mt-1">Batch: {alumnus.batch} · Graduated with Distinction</p>
              </div>
            </div>
          </div>

          {/* Skills & Expertise */}
          <div>
            <h4 className="text-xs font-semibold text-[#69668a] uppercase tracking-wider mb-2">Core Competencies</h4>
            <div className="flex flex-wrap gap-1.5">
              {(alumnus.skills || ['Software Engineering', 'System Architecture', 'Problem Solving', 'Team Leadership']).map((skill, i) => (
                <span key={i} className="bg-[#ece7fa] text-[#5b3fa8] text-xs px-2.5 py-1 rounded-lg font-medium border border-[#dbd4f5]">
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-xs font-semibold text-[#69668a] uppercase tracking-wider mb-2">Contact & Professional Links</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2 p-2.5 rounded-lg border border-[#e3e0f0] bg-white">
                <Mail className="size-4 text-[#5b3fa8]" />
                <span className="truncate text-[#1e1a3c]">{alumnus.email || 'alumni@baust.edu.bd'}</span>
              </div>
              <a 
                href={alumnus.linkedin || '#'} 
                target="_blank" 
                rel="noreferrer"
                className="flex items-center gap-2 p-2.5 rounded-lg border border-[#e3e0f0] bg-white text-[#17608c] hover:bg-[#e1f2fc]/40 transition-colors"
              >
                <ExternalLink className="size-4" />
                <span className="truncate">LinkedIn / Portfolio</span>
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-[#f6f5fc] border-t border-[#e3e0f0] flex items-center justify-between">
          <span className="text-xs text-[#69668a]">BAUST Alumni Network Verified Profile</span>
          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg text-xs font-semibold text-[#69668a] hover:bg-[#e3e0f0] transition-colors"
            >
              Close
            </button>
            <button
              onClick={() => onConnect(alumnus.id)}
              className={`px-4 py-2 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-all shadow-sm ${
                isConnected
                  ? 'bg-emerald-600 text-white'
                  : 'bg-[#5b3fa8] hover:bg-[#4a3290] text-white'
              }`}
            >
              {isConnected ? (
                <>
                  <Check className="size-3.5" />
                  <span>{isStudent ? 'Mentorship Requested' : 'Connected'}</span>
                </>
              ) : (
                <>
                  <UserPlus className="size-3.5" />
                  <span>{isStudent ? 'Request Mentorship' : 'Connect'}</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
