# BAUST Alumni Management System (AMS)
**Course:** Information System Design Sessional (CSE 3210)  
**Institution:** Bangladesh Army University of Science and Technology (BAUST), Saidpur  
**Department:** Computer Science & Engineering (CSE)  

---

## 🌟 Overview
A modern, responsive, role-based Web Information System developed for the **BAUST Alumni Affairs Office**, connecting alumni, faculty, and current students. Designed with 100% fidelity to the official Figma prototype with fully functional interactive features and a comprehensive Admin Panel for the Alumni Admin.

---

## 🚀 Key Features

### 1. Role-Based Access Control (RBAC)
- 👑 **Alumni Admin (Alumni Affairs Office)**: 
  - Centralized Dashboard with 4 real-time stat cards (Total Alumni, Active Members, Events, Pending Requests).
  - Batch-wise Engagement Analytics Chart (6th, 8th, 10th, 12th, 14th, 16th batches).
  - Verification Queue (`[Approve]` / `[Reject]` student/alumni registration requests).
  - Central Alumni Database with CSV Report Export.
  - Event Management & RSVP Attendee tracking.
  - Job & Forum Content Moderation.
- 🎓 **Verified Alumni (e.g. Rahim Uddin - 12th Batch CSE)**:
  - Browse Alumni Directory with multi-criteria filters (Batch, Dept, Location, Skills).
  - `[Connect]` and detailed `[View Profile]` modal.
  - `[RSVP]` for campus reunions and seminars.
  - Create forum discussions and reply to threads.
  - Post job vacancies and internship referrals.
- 🎒 **Current Student (e.g. Tanvir Hasan - Student)**:
  - Search alumni directory and click `[Request Mentorship]`.
  - RSVP for workshops and orientation seminars.
  - Apply for jobs and internships.
  - Participate in the discussion forum.
  - **Strictly NO Admin Panel access**.
- 🌐 **Guest (Public)**:
  - High-fidelity Landing Page with Hero feed preview.
  - Role-based Login page with 1-click test credentials.
  - Registration page with Alumni/Student toggle.

---

## 🛠️ How to Run Locally

### Prerequisites
- Node.js (v18 or higher)
- npm

### Quick Start
```bash
# 1. Start the development server
npm run dev
```

Open your browser at: **`http://localhost:3000`**

### Build for Production
```bash
npm run build
npm run preview
```

---

## 📂 Project Structure
```
├── src/
│   ├── components/
│   │   ├── Header.jsx               # Navigation header matching Figma
│   │   ├── Footer.jsx               # Global footer
│   │   ├── RoleSwitcher.jsx         # Sticky ISD live presentation toolbar
│   │   ├── AlumniProfileModal.jsx   # Detailed profile drawer for View Profile
│   │   ├── PostJobModal.jsx         # Job posting dialog
│   │   ├── NewThreadModal.jsx       # Forum thread composer
│   │   └── CreateEventModal.jsx     # Admin event planner
│   ├── pages/
│   │   ├── LandingPage.jsx          # Public landing matching D1
│   │   ├── LoginPage.jsx            # Authentication page matching D2
│   │   ├── RegisterPage.jsx         # Account creation matching D3
│   │   ├── UserHomeFeed.jsx         # User dashboard matching D4
│   │   ├── DirectoryPage.jsx        # Alumni Directory matching D5
│   │   ├── EventsPage.jsx           # Events & RSVP matching D6
│   │   ├── ForumPage.jsx            # Discussion Forum matching D7
│   │   ├── JobsPage.jsx             # Jobs & Mentorship matching D8
│   │   └── AdminDashboardPage.jsx   # Comprehensive Alumni Admin Panel matching D9
│   ├── data/
│   │   └── mockData.js              # Initial BAUST alumni records & seed data
│   ├── App.jsx                      # Application controller & state management
│   ├── index.css                    # Tailwind CSS styles & design tokens
│   └── main.jsx                     # Vite React root
├── package.json
├── tailwind.config.js
└── vite.config.js
```
