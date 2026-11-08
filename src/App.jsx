import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import RoleSwitcher from './components/RoleSwitcher';
import AlumniProfileModal from './components/AlumniProfileModal';
import PostJobModal from './components/PostJobModal';
import NewThreadModal from './components/NewThreadModal';
import CreateEventModal from './components/CreateEventModal';

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import UserHomeFeed from './pages/UserHomeFeed';
import DirectoryPage from './pages/DirectoryPage';
import EventsPage from './pages/EventsPage';
import ForumPage from './pages/ForumPage';
import JobsPage from './pages/JobsPage';
import AdminDashboardPage from './pages/AdminDashboardPage';

import {
  initialAlumni,
  initialEvents,
  initialForumThreads,
  initialJobs,
  initialPendingRegistrations
} from './data/mockData';

export default function App() {
  // Roles: 'admin', 'alumni', 'student', 'guest'
  const [currentRole, setCurrentRole] = useState(() => {
    return localStorage.getItem('baust_role') || 'guest';
  });

  // Navigation tab
  const [activeTab, setActiveTab] = useState(() => {
    const savedRole = localStorage.getItem('baust_role');
    if (!savedRole || savedRole === 'guest') return 'landing';
    return savedRole === 'admin' ? 'dashboard' : 'home';
  });

  // State with LocalStorage persistence
  const [alumniList, setAlumniList] = useState(() => {
    const saved = localStorage.getItem('baust_alumni');
    return saved ? JSON.parse(saved) : initialAlumni;
  });

  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem('baust_events');
    return saved ? JSON.parse(saved) : initialEvents;
  });

  const [forumThreads, setForumThreads] = useState(() => {
    const saved = localStorage.getItem('baust_forum');
    return saved ? JSON.parse(saved) : initialForumThreads;
  });

  const [jobs, setJobs] = useState(() => {
    const saved = localStorage.getItem('baust_jobs');
    return saved ? JSON.parse(saved) : initialJobs;
  });

  const [pendingRegistrations, setPendingRegistrations] = useState(() => {
    const saved = localStorage.getItem('baust_pending');
    return saved ? JSON.parse(saved) : initialPendingRegistrations;
  });

  const [connectedIds, setConnectedIds] = useState(() => {
    const saved = localStorage.getItem('baust_connected');
    return saved ? JSON.parse(saved) : ['alm-1'];
  });

  // Modals state
  const [selectedAlumnusForProfile, setSelectedAlumnusForProfile] = useState(null);
  const [isPostJobModalOpen, setIsPostJobModalOpen] = useState(false);
  const [isNewThreadModalOpen, setIsNewThreadModalOpen] = useState(false);
  const [isCreateEventModalOpen, setIsCreateEventModalOpen] = useState(false);
  const [notification, setNotification] = useState('');

  // Auto dismiss toast
  useEffect(() => {
    if (notification) {
      const timer = setTimeout(() => setNotification(''), 4000);
      return () => clearTimeout(timer);
    }
  }, [notification]);

  // Sync to LocalStorage
  useEffect(() => {
    localStorage.setItem('baust_role', currentRole);
  }, [currentRole]);

  useEffect(() => {
    localStorage.setItem('baust_alumni', JSON.stringify(alumniList));
  }, [alumniList]);

  useEffect(() => {
    localStorage.setItem('baust_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('baust_forum', JSON.stringify(forumThreads));
  }, [forumThreads]);

  useEffect(() => {
    localStorage.setItem('baust_jobs', JSON.stringify(jobs));
  }, [jobs]);

  useEffect(() => {
    localStorage.setItem('baust_pending', JSON.stringify(pendingRegistrations));
  }, [pendingRegistrations]);

  useEffect(() => {
    localStorage.setItem('baust_connected', JSON.stringify(connectedIds));
  }, [connectedIds]);

  // Role switch handler
  const handleRoleChange = (newRole) => {
    setCurrentRole(newRole);
    if (newRole === 'admin') {
      setActiveTab('dashboard');
      setNotification('Switched to Alumni Admin (Alumni Affairs Office)');
    } else if (newRole === 'student') {
      setActiveTab('home');
      setNotification('Switched to Student Role (Admin Panel Disabled)');
    } else if (newRole === 'alumni') {
      setActiveTab('home');
      setNotification('Switched to Alumnus Role (Rahim Uddin)');
    } else {
      setActiveTab('landing');
      setNotification('Logged out to Public Guest View');
    }
  };

  // Actions
  const handleRsvpToggle = (eventId) => {
    setEvents(prev =>
      prev.map(ev => {
        if (ev.id === eventId) {
          const newStatus = !ev.isRsvp;
          setNotification(newStatus ? `RSVP Confirmed for ${ev.title}` : `RSVP Cancelled for ${ev.title}`);
          return {
            ...ev,
            isRsvp: newStatus,
            attendees: newStatus ? ev.attendees + 1 : Math.max(0, ev.attendees - 1)
          };
        }
        return ev;
      })
    );
  };

  const handleConnectToggle = (alumnusId) => {
    const isAlm = alumniList.find(a => a.id === alumnusId);
    setConnectedIds(prev => {
      const exists = prev.includes(alumnusId);
      const updated = exists ? prev.filter(id => id !== alumnusId) : [...prev, alumnusId];
      setNotification(
        exists
          ? `Disconnected from ${isAlm ? isAlm.name : 'Alumnus'}`
          : currentRole === 'student'
            ? `Mentorship request sent to ${isAlm ? isAlm.name : 'Alumnus'}!`
            : `Connected with ${isAlm ? isAlm.name : 'Alumnus'}!`
      );
      return updated;
    });
  };

  const handleApproveRegistration = (pendingId) => {
    const candidate = pendingRegistrations.find(p => p.id === pendingId);
    if (!candidate) return;

    // Add candidate to verified alumni list
    const newAlumnus = {
      id: `alm-${Date.now()}`,
      name: candidate.name,
      initials: candidate.initials,
      email: candidate.email,
      batch: candidate.batch.replace(' batch', ''),
      dept: candidate.dept,
      designation: candidate.workplace.includes('·') ? candidate.workplace.split('·')[0].trim() : candidate.workplace,
      company: candidate.workplace.includes('·') ? candidate.workplace.split('·')[1].trim() : 'BAUST Network',
      location: 'Saidpur',
      avatarBg: candidate.avatarBg,
      avatarText: candidate.avatarText,
      bio: `Verified graduate of BAUST ${candidate.dept} department, ${candidate.batch}.`,
      skills: ['Engineering', 'Problem Solving', 'Leadership'],
      status: 'Verified',
      joinedDate: 'Today'
    };

    setAlumniList(prev => [newAlumnus, ...prev]);
    setPendingRegistrations(prev => prev.filter(p => p.id !== pendingId));
    setNotification(`Approved & Verified: ${candidate.name} is now added to Alumni Directory!`);
  };

  const handleRejectRegistration = (pendingId) => {
    const candidate = pendingRegistrations.find(p => p.id === pendingId);
    setPendingRegistrations(prev => prev.filter(p => p.id !== pendingId));
    setNotification(`Application rejected for: ${candidate ? candidate.name : 'Applicant'}`);
  };

  const handleAddJob = (newJob) => {
    setJobs(prev => [newJob, ...prev]);
    setNotification(`Job "${newJob.title}" posted successfully!`);
  };

  const handleToggleSaveJob = (jobId) => {
    setJobs(prev =>
      prev.map(j => {
        if (j.id === jobId) {
          const newSaved = !j.saved;
          setNotification(newSaved ? `Job saved to your bookmarks` : `Job removed from bookmarks`);
          return { ...j, saved: newSaved };
        }
        return j;
      })
    );
  };

  const handleApplyJob = (jobId) => {
    const jb = jobs.find(j => j.id === jobId);
    setNotification(`Application submitted for ${jb ? jb.title : 'Job'}! The employer has been notified.`);
  };

  const handleAddThread = (newThread) => {
    setForumThreads(prev => [newThread, ...prev]);
    setNotification(`Discussion topic created in ${newThread.category}!`);
  };

  const handleAddReply = (threadId, newReply) => {
    setForumThreads(prev =>
      prev.map(t => {
        if (t.id === threadId) {
          return {
            ...t,
            repliesCount: t.repliesCount + 1,
            replies: [...(t.replies || []), newReply]
          };
        }
        return t;
      })
    );
    setNotification(`Reply added to the discussion!`);
  };

  const handleAddEvent = (newEvent) => {
    setEvents(prev => [newEvent, ...prev]);
    setNotification(`New event "${newEvent.title}" published!`);
  };

  const handleDeleteEvent = (eventId) => {
    setEvents(prev => prev.filter(e => e.id !== eventId));
    setNotification('Event removed.');
  };

  const handleDeleteJob = (jobId) => {
    setJobs(prev => prev.filter(j => j.id !== jobId));
    setNotification('Job posting removed by admin.');
  };

  const handleDeleteThread = (threadId) => {
    setForumThreads(prev => prev.filter(t => t.id !== threadId));
    setNotification('Forum thread removed by admin.');
  };

  const handleRegisterSubmit = (newRequest) => {
    setPendingRegistrations(prev => [newRequest, ...prev]);
    setNotification(`Registration submitted! Awaiting Alumni Affairs Office approval.`);
  };

  const currentUserName =
    currentRole === 'admin'
      ? 'Alumni Admin'
      : currentRole === 'student'
        ? 'Tanvir Hasan'
        : 'Rahim Uddin';

  const currentUserBatch =
    currentRole === 'student'
      ? '16th batch (Student)'
      : '12th batch';

  return (
    <div className="min-h-screen bg-[#f6f5fc] flex flex-col justify-between text-[#1e1a3c]">
      <div>
        {/* ISD Live Role Switcher */}
        <RoleSwitcher
          currentRole={currentRole}
          setCurrentRole={handleRoleChange}
          notification={notification}
        />

        {/* Global Navigation Header matching Figma with Fixed Navbar & Mobile Hamburger */}
        <Header
          currentRole={currentRole}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          onLogout={() => handleRoleChange('guest')}
          onNavigateLanding={(dest) => setActiveTab(dest)}
          onSwitchRole={handleRoleChange}
        />

        {/* Dynamic Route View */}
        <main className="flex-1">
          {activeTab === 'landing' && (
            <LandingPage
              onNavigate={(dest) => setActiveTab(dest)}
              events={events}
              jobs={jobs}
              forumThreads={forumThreads}
            />
          )}

          {activeTab === 'login' && (
            <LoginPage
              onLogin={(role) => handleRoleChange(role)}
              onNavigate={(dest) => setActiveTab(dest)}
            />
          )}

          {activeTab === 'register' && (
            <RegisterPage
              onRegisterSubmit={handleRegisterSubmit}
              onNavigate={(dest) => setActiveTab(dest)}
            />
          )}

          {activeTab === 'home' && currentRole !== 'guest' && (
            <UserHomeFeed
              currentRole={currentRole}
              events={events}
              forumThreads={forumThreads}
              jobs={jobs}
              onNavigate={(tab) => setActiveTab(tab)}
              onRsvpToggle={handleRsvpToggle}
              onSelectThread={(t) => setActiveTab('forum')}
              onSelectJob={(j) => setActiveTab('jobs')}
            />
          )}

          {activeTab === 'directory' && (
            <DirectoryPage
              alumniList={alumniList}
              onViewProfile={(alm) => setSelectedAlumnusForProfile(alm)}
              onConnect={handleConnectToggle}
              connectedIds={connectedIds}
              currentRole={currentRole}
            />
          )}

          {activeTab === 'events' && (
            <EventsPage
              events={events}
              onRsvpToggle={handleRsvpToggle}
              onOpenCreateEvent={() => setIsCreateEventModalOpen(true)}
              isAdmin={currentRole === 'admin'}
            />
          )}

          {activeTab === 'forum' && (
            <ForumPage
              forumThreads={forumThreads}
              onOpenNewThread={() => setIsNewThreadModalOpen(true)}
              onAddReply={handleAddReply}
              currentUserName={currentUserName}
              currentUserBatch={currentUserBatch}
            />
          )}

          {activeTab === 'jobs' && (
            <JobsPage
              jobs={jobs}
              onOpenPostJob={() => {
                if (currentRole === 'student') {
                  setNotification('Notice: Student accounts can browse and apply. Job postings are reserved for Alumni & Faculty.');
                } else {
                  setIsPostJobModalOpen(true);
                }
              }}
              onApplyJob={handleApplyJob}
              onToggleSaveJob={handleToggleSaveJob}
              currentRole={currentRole}
            />
          )}

          {/* Admin Dashboard - Strictly restricted from Students */}
          {activeTab === 'dashboard' && (
            currentRole === 'admin' ? (
              <AdminDashboardPage
                pendingRegistrations={pendingRegistrations}
                onApproveRegistration={handleApproveRegistration}
                onRejectRegistration={handleRejectRegistration}
                alumniList={alumniList}
                events={events}
                jobs={jobs}
                forumThreads={forumThreads}
                onDeleteEvent={handleDeleteEvent}
                onDeleteJob={handleDeleteJob}
                onDeleteThread={handleDeleteThread}
                onOpenCreateEvent={() => setIsCreateEventModalOpen(true)}
              />
            ) : (
              <div className="max-w-md mx-auto my-20 p-8 bg-white border border-rose-200 rounded-2xl text-center space-y-3 shadow-lg">
                <div className="size-12 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center mx-auto">
                  ✕
                </div>
                <h3 className="text-xl font-bold text-rose-900">Access Restricted</h3>
                <p className="text-xs text-[#69668a]">
                  Students and unverified users do not have access to the Alumni Affairs Office Admin Panel.
                </p>
                <button
                  onClick={() => setActiveTab('home')}
                  className="px-4 py-2 bg-[#5b3fa8] text-white rounded-xl text-xs font-semibold"
                >
                  Return to Home
                </button>
              </div>
            )
          )}
        </main>

        {/* Interactive Modals */}
        <AlumniProfileModal
          alumnus={selectedAlumnusForProfile}
          onClose={() => setSelectedAlumnusForProfile(null)}
          onConnect={handleConnectToggle}
          isConnected={selectedAlumnusForProfile ? connectedIds.includes(selectedAlumnusForProfile.id) : false}
          isStudent={currentRole === 'student'}
        />

        <PostJobModal
          isOpen={isPostJobModalOpen}
          onClose={() => setIsPostJobModalOpen(false)}
          onAddJob={handleAddJob}
          currentUserName={currentUserName}
          currentUserBatch={currentUserBatch}
        />

        <NewThreadModal
          isOpen={isNewThreadModalOpen}
          onClose={() => setIsNewThreadModalOpen(false)}
          onAddThread={handleAddThread}
          currentUserName={currentUserName}
          currentUserBatch={currentUserBatch}
        />

        <CreateEventModal
          isOpen={isCreateEventModalOpen}
          onClose={() => setIsCreateEventModalOpen(false)}
          onAddEvent={handleAddEvent}
        />
      </div>

      {/* Global Footer matching Figma */}
      <Footer />
    </div>
  );
}
