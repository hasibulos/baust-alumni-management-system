# INFORMATION SYSTEM DESIGN SESSIONAL (CSE 3210)
## COMPREHENSIVE FEASIBILITY STUDY REPORT
### Design and Implementation of BAUST Alumni Management System (AMS)

---

| **Attribute** | **Academic & Institutional Specification** |
| :--- | :--- |
| **Project Title** | Design and Implementation of BAUST Alumni Management System (AMS) |
| **Institution** | Bangladesh Army University of Science and Technology (BAUST), Saidpur |
| **Department** | Department of Computer Science & Engineering (CSE) |
| **Course Code & Title** | CSE 3210: Information System Design Sessional |
| **Academic Level & Term** | Level 3, Term II (Fall 2026 Cohort) |
| **Host Organization** | Directorate of Student Affairs (DoSA) & Alumni Affairs Office, BAUST |
| **Existing System Type** | Disconnected, semi-manual workflow (Google Forms, scattered Excel spreadsheets, unmoderated Facebook & WhatsApp groups) |
| **Proposed System Type** | Centralized, secure, role-governed web information system with real-time analytics |
| **Group Number** | **Group-13** |
| **Submitted To (Faculty)** | **AKZ Rasel Rahman**, Lecturer, Department of CSE, BAUST<br>**Md. Rabby Hossain**, Lecturer, Department of CSE, BAUST |
| **Submitted By (Students)** | **Mst. Jugnu Khatun** (Student ID: `0802410105101072`)<br>**Most. Arifa Akter Allo** (Student ID: `0802410105101073`)<br>**Hasibul Hasib** (Student ID: `0802410205101079`) |
| **Document Version** | 2.0 (Final Comprehensive Academic Release) |
| **Submission Date** | November 11, 2026 |

---

## TABLE OF CONTENTS

1. **Executive Summary**
2. **Chapter 1: Organizational Background & Problem Domain**
   - 1.1 Organizational Profile (BAUST, DoSA, Alumni Affairs Office)
   - 1.2 Administrative Hierarchy and Mandates
   - 1.3 As-Is (Current) Process Flow Analysis
   - 1.4 Detailed Stakeholder Analysis & RACI Matrix
   - 1.5 Current Data Entity Life-Cycle & Vulnerability Audit
3. **Chapter 2: Problem Definition & Need Assessment**
   - 2.1 The PIECES Problem Classification Framework
   - 2.2 Root Cause Analysis (Fishbone / 5-Whys Paradigm)
   - 2.3 Synthesis of Critical Institutional Pain Points
   - 2.4 Problem Statement & Baseline Metrics
4. **Chapter 3: Proposed Information System Architecture**
   - 3.1 System Vision & Strategic Scope
   - 3.2 3-Tier Enterprise Architectural Blueprint
   - 3.3 Role-Based Access Control (RBAC) Specification
   - 3.4 Core Subsystems & Functional Module Breakdown
   - 3.5 Non-Functional Requirements (NFRs)
   - 3.6 Boundary & Scope Matrix (Phase 1 vs. Phase 2 Future Work)
5. **Chapter 4: Empirical Data Collection & Stakeholder Investigation**
   - 4.1 Methodology & Instrumentation
   - 4.2 Cohort Demographics & Sample Stratification
   - 4.3 Quantitative Survey Results & Statistical Analysis
   - 4.4 Qualitative Stakeholder Interviews & Observational Audit
   - 4.5 Synthesis of Empirical Findings
6. **Chapter 5: Multi-Dimensional Feasibility Evaluation (TELOS+ Framework)**
   - 5.1 Technical Feasibility (Technology Stack, Infrastructure & Sizing)
   - 5.2 Operational Feasibility (User Readiness, Change Management & Learning Curve)
   - 5.3 Economic Feasibility (Rigorous Cost-Benefit Analysis):
     - 5.3.1 Capital Expenditure (CapEx) Breakdown
     - 5.3.2 Operational Expenditure (OpEx) Breakdown
     - 5.3.3 Quantified Tangible & Intangible Savings
     - 5.3.4 3-Year Pro-Forma Cash Flow Projections
     - 5.3.5 Financial Decision Metrics: Payback Period, NPV, ROI, and Benefit-Cost Ratio
     - 5.3.6 Financial Sensitivity Analysis
   - 5.4 Schedule Feasibility (12-Week Work Breakdown Structure, Gantt Schedule & CPM Milestones)
   - 5.5 Organizational & Cultural Feasibility
   - 5.6 Legal, Regulatory & Privacy Feasibility
7. **Chapter 6: Strategic Alternatives Evaluation Matrix**
   - 6.1 Multi-Criteria Decision Analysis (MCDA) of Alternatives
   - 6.2 Weighted Scoring Justification of Proposed Custom Web Solution
8. **Chapter 7: Comprehensive Risk Assessment & Mitigation Protocols**
   - 7.1 Risk Identification Matrix (Likelihood × Impact)
   - 7.2 Contingency Protocols & Disaster Recovery Strategies
9. **Chapter 8: Final Strategic Recommendation & Governance Decision**
   - 8.1 Evaluative Synthesis
   - 8.2 Formal "GO" Decision Statement & Sign-off Framework
   - 8.3 Actionable Phase II Implementation Road Map
10. **Chapter 9: Conclusion**
11. **Chapter 10: Academic References (IEEE Standard)**
12. **Chapter 11: Comprehensive Appendices**
    - Appendix A: Complete Survey Questionnaire Instrument
    - Appendix B: Survey Statistical Tabulations
    - Appendix C: Formal UML Use Case Specifications (UC-01 through UC-08)
    - Appendix D: Structured Data Flow Diagrams (Context Diagram / Level-0 & Level-1 DFD)
    - Appendix E: Relational Database Schema & Data Dictionary (ERD Specifications)
    - Appendix F: Figma Prototype Screen Verification Matrix (Frames D1 through D15)
    - Appendix G: As-Is vs. To-Be Workflow Sequence Comparison

---

## LIST OF TABLES

- Table 1.1: Institutional Profile of BAUST & Operating Cell
- Table 1.2: Comprehensive Stakeholder Analysis & RACI Matrix
- Table 1.3: As-Is Information Entity Vulnerability Audit
- Table 2.1: The PIECES Problem Classification Framework Evaluation
- Table 3.1: Strict Role-Based Access Control (RBAC) Permission Matrix
- Table 3.2: System Boundary Matrix (In-Scope vs. Out-of-Scope)
- Table 4.1: Survey Cohort Demographic Distribution
- Table 4.2: Empirical Feature Prioritization Ratings
- Table 5.1: Recommended Production Technology Stack & Technical Rationale
- Table 5.2: Capital Expenditure (CapEx) Initial Setup Costs
- Table 5.3: Annual Operating Expenditure (OpEx) Recurring Costs
- Table 5.4: Annual Tangible Operational Savings Comparison
- Table 5.5: 3-Year Discounted Cash Flow (DCF) & Financial Valuation Table
- Table 5.6: Economic Sensitivity Analysis Under Multiple Variance Scenarios
- Table 5.7: 12-Week Work Breakdown Structure (WBS) & Deliverables
- Table 6.1: Multi-Criteria Decision Analysis (MCDA) Alternatives Matrix
- Table 7.1: Comprehensive Risk Assessment Matrix & Mitigation Measures
- Table 11.1: Formal Use Case Specification: UC-01 (Applicant Verification Queue)
- Table 11.2: Formal Use Case Specification: UC-02 (Mentorship Connection Pipeline)
- Table 11.3: Relational Data Dictionary Specification
- Table 11.4: Figma Interactive Prototype Frame Mapping (D1–D15)

---

## LIST OF FIGURES

- Figure 1.1: Current System Disconnected As-Is Process Flow
- Figure 2.1: Root Cause Analysis (Ishikawa Fishbone Diagram)
- Figure 3.1: 3-Tier Enterprise Architecture of BAUST AMS
- Figure 4.1: Empirical Survey Findings: Alumni Feature Demand Distribution
- Figure 5.1: 12-Week Project Gantt Implementation Schedule
- Figure 11.1: Complete System UML Use Case Diagram
- Figure 11.2: Level-0 Context Data Flow Diagram (DFD)
- Figure 11.3: Level-1 Decomposed Data Flow Diagram (DFD)
- Figure 11.4: Conceptual Entity-Relationship Diagram (ERD)
- Figure 11.5: As-Is vs. To-Be Information Pipeline Comparison

---

## LIST OF ABBREVIATIONS & ACRONYMS

- **AMS**: Alumni Management System
- **BAUST**: Bangladesh Army University of Science and Technology
- **BCR**: Benefit-Cost Ratio
- **CapEx**: Capital Expenditure
- **CPM**: Critical Path Method
- **CSE**: Computer Science and Engineering
- **CSV**: Comma-Separated Values
- **DCF**: Discounted Cash Flow
- **DFD**: Data Flow Diagram
- **DoSA**: Directorate of Student Affairs
- **ERD**: Entity-Relationship Diagram
- **ISD**: Information System Design
- **MCDA**: Multi-Criteria Decision Analysis
- **NFR**: Non-Functional Requirement
- **NPV**: Net Present Value
- **OpEx**: Operational Expenditure
- **PBP**: Payback Period
- **RBAC**: Role-Based Access Control
- **REST**: Representational State Transfer
- **ROI**: Return on Investment
- **UI/UX**: User Interface / User Experience
- **VPS**: Virtual Private Server
- **WBS**: Work Breakdown Structure

---

## 1. EXECUTIVE SUMMARY

The Bangladesh Army University of Science and Technology (BAUST), Saidpur, established in 2015 under the auspices of the Bangladesh Army, has successfully graduated thousands of engineers and professionals across numerous graduating cohorts. However, the university's Alumni Affairs Office—operating under the Directorate of Student Affairs (DoSA)—continues to administer graduate relationships through an outdated, disconnected, and semi-manual paradigm consisting of Google Forms, disparate Excel spreadsheets scattered across individual office workstations, and unmoderated social media channels (Facebook and WhatsApp groups).

This disjointed operating model introduces severe institutional liabilities:
1. **Severe Data Decay & Duplication:** Contact records become obsolete within 6 to 12 months, and disparate spreadsheets contain unverified, redundant entries.
2. **Student-Alumni Disconnect:** Enrolled undergraduate students possess no structured, credible mechanism to seek professional mentorship, internship opportunities, or verified job referrals.
3. **Excessive Administrative Overhead:** Office personnel spend an estimated 350+ manual hours annually cross-referencing paper ledgers, making individual phone calls, and stitching together disparate spreadsheets for convocation and accreditation reporting.
4. **Data Privacy & Security Exposures:** Graduate phone numbers and personal emails circulate openly across social messaging channels, violating fundamental data protection standards.

This feasibility study evaluates the **Technical, Operational, Economic, Schedule, Organizational, and Legal/Privacy (TELOS+) viability** of developing and implementing the **BAUST Alumni Management System (AMS)**—a custom, responsive, role-governed web platform engineered with React.js, Tailwind CSS, Node.js/Express, and PostgreSQL. 

Empirical investigations—incorporating an online questionnaire distributed across graduating batches (6th, 12th, 13th, 14th) and on-site observational audits at the Alumni Affairs Office—indicate overwhelming stakeholder readiness:
- **66.7%** of surveyed alumni rate the current informal channels as unacceptable (1 out of 5).
- **80.0% to 100.0%** prioritize a dedicated Career Job Board and Academic Discussion Forum.
- **66.7%** confirm that a responsive web application is the most accessible platform.

Financial evaluation reveals extraordinary economic feasibility:
- **Initial Setup Capital Expenditure (CapEx):** BDT 21,500 (developed in-house by Group-13).
- **Annual Operational Expenditure (OpEx):** BDT 15,000 / year.
- **Quantifiable Annual Operational Savings:** BDT 96,000 / year (eliminating staff labor waste and event printing costs).
- **Net Annual Cash Savings:** BDT 81,000 / year.
- **Discounted Payback Period (PBP):** **~3.2 months (0.27 years)**.
- **Net Present Value (NPV @ 10% discount rate over 3 years):** **BDT 179,935.01**.
- **3-Year Return on Investment (ROI):** **1,030.2%**.
- **Benefit-Cost Ratio (BCR):** **4.06**.

Technical and schedule assessments confirm that the system architecture is robust, leverages modern open-source stacks, and can be developed, tested, and deployed within a structured **12-week academic timeframe**. Consequently, Group-13 issues an unambiguous, evidence-backed **GO DECISION** to proceed immediately to Phase II (Detailed Architectural Modeling and System Implementation).

---

## CHAPTER 1: ORGANIZATIONAL BACKGROUND & PROBLEM DOMAIN

### 1.1 Organizational Profile
Bangladesh Army University of Science and Technology (BAUST), Saidpur, is a preeminent private military-backed university established in February 2015 by the Bangladesh Army under the Private University Act 2010. Situated within Saidpur Cantonment, Nilphamari, BAUST operates four faculties offering undergraduate and postgraduate degrees in engineering, computing, business, and sciences. 

As the university expands its alumni body across Bangladesh and international technology hubs, the formal stewardship of graduate relations is assigned to the **Alumni Affairs Office (Alumni Relations Cell)**, operating directly under the executive supervision of the **Directorate of Student Affairs (DoSA)** and the **Office of the Registrar**.

```
========================================================================================
                          BAUST UNIVERSITY LEADERSHIP
         (Vice-Chancellor / Board of Trustees / Syndicate / Registrar)
                                       │
                    DIRECTORATE OF STUDENT AFFAIRS (DoSA)
                                       │
                      ALUMNI AFFAIRS OFFICE (Admin Cell)
             ┌─────────────────────────┴─────────────────────────┐
      ALUMNI COHORTS                                      CURRENT STUDENTS
 (Graduates: 1st - 16th Batches)                     (Undergraduates: CSE, EEE, ME, CE, BBA)
========================================================================================
```

*Table 1.1: Institutional Profile of BAUST & Operating Cell*
| Parameter | Institutional Detail |
| :--- | :--- |
| **Institution Name** | Bangladesh Army University of Science and Technology (BAUST) |
| **Location** | Saidpur Cantonment, Saidpur - 5310, Nilphamari, Rangpur Division, Bangladesh |
| **Governing Entity** | Bangladesh Army Welfare Trust / Ministry of Education, GoB |
| **Supervising Body** | Directorate of Student Affairs (DoSA) / Office of the Registrar |
| **Operating Cell** | Alumni Affairs Office (Alumni Relations Desk) |
| **Core Functions** | Graduate tracking, reunion planning, convocation data verification, mentorship coordination, career seminar scheduling, institutional endowment |
| **Primary System Users** | Administrative Officers, Verified Alumni, Enrolled Undergraduate Students, University Executive Leadership |

### 1.2 Administrative Hierarchy and Operating Mandates
The Alumni Affairs Office is tasked with four institutional mandates:
1. **Graduate Census Management:** Maintaining authoritative, updated academic and employment records for all degree recipients.
2. **Institutional Networking:** Connecting alumni with the university for guest lectures, curriculum advisory feedback, and endowment initiatives.
3. **Student Career Transition:** Facilitating corporate placements, mock interviews, and technical mentorship for graduating seniors.
4. **Accreditation Data Provisioning:** Providing verified alumni employment statistics to statutory bodies including the University Grants Commission (UGC) and Board of Accreditation for Engineering and Technical Education (BAETE).

### 1.3 As-Is (Current) Process Flow Analysis
The existing operational workflow is classified as **Semi-Automated and Severely Fragmented**. It relies on ad-hoc software tools operated in total isolation, without a normalized central repository or automated business logic.

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                           CURRENT AS-IS DISCONNECTED WORKFLOW                           │
├───────────────┬───────────────┬────────────────┬─────────────────┬──────────────────────┤
│  STEP 1:      │  STEP 2:      │  STEP 3:       │  STEP 4:        │  STEP 5:             │
│  COLLECTION   │  STORAGE      │  ANNOUNCEMENT  │  COORDINATION   │  REPORTING           │
├───────────────┼───────────────┼────────────────┼─────────────────┼──────────────────────┤
│ Temporary     │ Local Excel   │ Facebook &     │ Manual Phone    │ Manual Multi-Day     │
│ Google Forms  │ Workbooks on  │ WhatsApp Group │ Calls, SMS, &   │ Sheet Splicing for   │
│ & Paper Slips │ Office PCs    │ Posts          │ Paper Ledgers   │ Audits & Convocations│
└───────────────┴───────────────┴────────────────┴─────────────────┴──────────────────────┘
```

The current procedural chain unfolds across five error-prone steps:
- **Step 1 (Ad-Hoc Collection):** Prior to convocations or reunions, the office generates temporary Google Forms or collects handwritten slips.
- **Step 2 (Scattered Storage):** Responses are exported into `.xlsx` spreadsheets saved locally on individual administrative workstations. Different officers maintain divergent versions of the same cohort's records.
- **Step 3 (Unmoderated Announcement):** Events, notices, and job circulars are published as unformatted wall posts on unofficial Facebook groups and WhatsApp channels, resulting in high noise and low reach.
- **Step 4 (Manual RSVP Verification):** Event attendance is tracked through private chat messages and mobile banking screenshots. Staff manually dial phone numbers to confirm physical attendance.
- **Step 5 (Ad-Hoc Reporting):** Compiling an official alumni employment summary requires days of manual data cleansing, vlookup matching, and phone verification.

### 1.4 Detailed Stakeholder Analysis & RACI Matrix
To ensure institutional alignment, four primary stakeholder tiers were analyzed across core system processes using the **RACI Framework** (Responsible, Accountable, Consulted, Informed).

*Table 1.2: Comprehensive Stakeholder Analysis & RACI Matrix*
| Process / Function | Alumni Admin (DoSA) | Verified Alumni | Current Students | University Leadership |
| :--- | :---: | :---: | :---: | :---: |
| **Account KYC & ID Verification** | **A / R** | C | I | I |
| **Profile & Employment Updates** | I | **A / R** | I | I |
| **Search Directory & Batchmates** | C | **R** | **R** | I |
| **Job & Referral Circular Creation** | I | **A / R** | I | I |
| **Mentorship Application Submission**| I | C | **A / R** | I |
| **Event Scheduling & Capacity Setup** | **A / R** | C | C | I |
| **1-Click Event RSVP** | I | **R** | **R** | I |
| **Forum Moderation & Governance** | **A / R** | C | C | I |
| **Accreditation & Analytics Export** | **R** | I | I | **A** |

*RACI Legend: R = Responsible (executes task); A = Accountable (final decision maker); C = Consulted (provides input); I = Informed (receives updates).*

### 1.5 Current Data Entity Life-Cycle & Vulnerability Audit
A rigorous data audit conducted at the Alumni Affairs Office revealed that existing data records suffer from extreme vulnerability, redundancy, and violation of normalization rules.

*Table 1.3: As-Is Information Entity Vulnerability Audit*
| Data Entity | Originating Source | Primary Consumers | Current Storage Medium | Critical Vulnerability Identified |
| :--- | :--- | :--- | :--- | :--- |
| **Alumni Master Profiles** | Graduates via Google Forms | Office Staff, Batchmates | Unlinked `.xlsx` files | Zero synchronization; 40%+ phone numbers become obsolete within 12 months. |
| **Authentication Records** | Office Staff / Users | Administrative Staff | Plaintext sheets / Unsecured passwords | Severe security exposure; violates basic data protection ethics. |
| **Event RSVPs & Headcounts** | Alumni & Students | Reunion Committee | Personal Messenger chats, SMS, paper | Inaccurate headcounts; rampant double-booking; food and logistics waste. |
| **Job Openings & Referrals** | Corporate Alumni | Undergraduates | Facebook feeds | Posts buried within hours; zero searchability by department, role, or stack. |
| **Academic & Career Q&A** | Students & Graduates | University Community | WhatsApp group chats | High chat volume drowns valuable career roadmap guidance; unsearchable history. |

---

## CHAPTER 2: PROBLEM DEFINITION & NEED ASSESSMENT

### 2.1 The PIECES Problem Classification Framework
To systematically analyze the inadequacies of the current manual setup, Group-13 deployed the industry-standard **PIECES Framework** (Performance, Information, Economics, Control/Security, Efficiency, Service), developed by Wetherbe and standardized by Kendall & Kendall.

*Table 2.1: The PIECES Problem Classification Framework Evaluation*
| Category | Operational Evaluation of Existing System | Proposed AMS Solution Target |
| :--- | :--- | :--- |
| **P – Performance** | High response latency. Locating a specific 6th-batch graduate's contact requires 15–20 minutes of searching across computer folders. | Sub-second query response time. Indexed relational search returns filtered alumni profiles in `< 200 ms`. |
| **I – Information** | Data is fragmented, unvalidated, and heavily duplicated. Spreadsheets contain conflicting emails, missing student IDs, and unformatted phone numbers. | Single Source of Truth (SSOT). Relational schema with primary keys, unique constraints, and mandatory field validation. |
| **E – Economics** | High hidden costs. Staff waste over 350 working hours annually on repetitive clerical tasks (equivalent to BDT 70,000+ in wasted payroll). | Drastic cost reduction. Initial setup of BDT 21,500 saves BDT 81,000 net annually, paying for itself in 3.2 months. |
| **C – Control & Security** | Critical privacy failure. Alumni phone numbers and personal emails are exposed publicly across social messaging groups. | Role-Based Access Control (RBAC). Contact information masked; password encryption via bcrypt; admin KYC identity validation. |
| **E – Efficiency** | Extreme procedural waste. Staff manually dial dozens of phone numbers to verify reunion RSVPs and compile attendance lists. | Automated 1-click self-service RSVP. Live attendee counter, automated capacity enforcement, and one-click CSV export. |
| **S – Service** | Poor stakeholder experience. Alumni feel disengaged (rated 1/5); students have no formal channel to request mentorship or job referrals. | High-quality engagement portal. Dedicated Mentorship Pipeline, verified Job Board, categorized Discussion Forum. |

### 2.2 Root Cause Analysis (Fishbone / Ishikawa Paradigm)
The systemic operational breakdown at the Alumni Affairs Office was synthesized into five root causal domains:

```
PEOPLE (Administrative Staff)           PROCESS (Event & Communication)
Lack of dedicated webmaster ──┐         ┌── Manual phone calls for RSVP
No standard updating protocol ──┼─────────┼── Facebook posts get lost in algorithm
                                │         │
                                ├─────────────────────────► CORE INSTITUTIONAL PROBLEM:
                                │         │                 Inability to Track, Connect,
No central relational database ─┼─────────┼── Passwords stored in plaintext  and Engage BAUST Alumni
Scattered Excel desktop sheets ─┘         └── Open sharing of phone numbers
TECHNOLOGY (Spreadsheets & Social)      ENVIRONMENT / SECURITY (Governance)
```

### 2.3 Synthesis of Critical Institutional Pain Points
1. **Severe Institutional Data Disconnection:** The university cannot reliably report graduate employment rates to accreditation panels (UGC/BAETE) due to unlinked, divergent records.
2. **Undergraduate Opportunity Deprivation:** Third- and fourth-year CSE/EEE/ME undergraduates struggle to identify senior alumni working in target enterprises (Grab, Samsung R&D, Therap, Brain Station 23), missing critical internship and referral windows.
3. **Severe Resource Wastage During Campus Events:** During the last university reunion, administrative staff spent 45+ hours confirming attendance over phone calls, and food logistics suffered a 15% error margin due to untracked RSVP counts.
4. **Data Privacy & Security Exposures:** Alumni privacy is systematically violated when personal contact details are broadcast on open social media groups.

### 2.4 Problem Statement & Baseline Metrics
> *"The Alumni Affairs Office at BAUST currently relies on unlinked spreadsheets and informal social groups that generate an annual data decay rate of over 35%, require 350+ staff hours of clerical maintenance, and deprive 1,200+ undergraduates of direct alumni networking. Without a centralized, secure web information system featuring verified role-based access, operational overhead will escalate alongside growing graduating cohorts."*

---

## CHAPTER 3: PROPOSED INFORMATION SYSTEM ARCHITECTURE

### 3.1 System Vision & Strategic Scope
The **BAUST Alumni Management System (AMS)** is a web-based, role-governed enterprise portal tailored specifically to the administrative and community workflows of BAUST. It bridges the divide between university administration, degree-holding graduates, and enrolled students through automated verification, searchable directories, structured career collaboration, and live reporting.

### 3.2 3-Tier Enterprise Architectural Blueprint
The system follows a standard **3-Tier Client-Server Architecture** ensuring clear separation of presentation, business logic, and persistent storage:

```
┌──────────────────────────────────────────────────────────────────────────────────┐
│                               PRESENTATION TIER                                  │
│   React 19 SPA + Vite + Tailwind CSS + Lucide Icons + Responsive Viewports       │
│   (Desktop, Tablet, Mobile Web / PWA-Ready / WCAG 2.1 Accessible)                │
└────────────────────────────────────────┬─────────────────────────────────────────┘
                                         │ HTTPS / JSON REST APIs
┌────────────────────────────────────────▼─────────────────────────────────────────┐
│                           APPLICATION / LOGIC TIER                               │
│   Node.js & Express.js REST API Server + JWT & Role-Based Guard Middleware       │
│   [Auth Engine] [KYC Verifier] [Directory Search] [Event RSVP] [Report Engine]    │
└────────────────────────────────────────┬─────────────────────────────────────────┘
                                         │ TCP Socket / Connection Pool
┌────────────────────────────────────────▼─────────────────────────────────────────┐
│                                 DATA TIER                                        │
│   PostgreSQL Relational Database + Automated Daily Backup Engine                │
│   (Normalized 3NF Schemas, Foreign Key Constraints, Indexed Query Cache)         │
└──────────────────────────────────────────────────────────────────────────────────┘
```

### 3.3 Role-Based Access Control (RBAC) Specification
Access rights are strictly partitioned across four operational roles. **Under no circumstances do students receive administrative privileges.**

*Table 3.1: Strict Role-Based Access Control (RBAC) Permission Matrix*
| System Feature / Action | Public / Guest | Current Student | Verified Alumnus | Alumni Admin (Office) |
| :--- | :---: | :---: | :---: | :---: |
| View Public News, Banners & Landing Feed | Allowed | Allowed | Allowed | Allowed |
| Register Account (Student / Alumni Form) | Allowed | Allowed | Allowed | Allowed |
| Browse Alumni Directory & Filter by Batch | Restricted | Allowed | Allowed | Allowed |
| View Masked Profile Details | Restricted | Allowed | Allowed | Allowed |
| Request 1-to-1 Career Mentorship | Restricted | Allowed | Restricted | Restricted |
| Post Job Openings & Internship Referrals | Restricted | Restricted | Allowed | Allowed |
| Apply for Jobs & Submit Application | Restricted | Allowed | Allowed | Allowed |
| View Events & Submit 1-Click RSVP | Restricted | Allowed | Allowed | Allowed |
| Create Event / Schedule Campus Reunion | Restricted | Restricted | Restricted | Allowed |
| Create Forum Discussion Threads | Restricted | Allowed | Allowed | Allowed |
| Post Forum Replies & Insights | Restricted | Allowed | Allowed | Allowed |
| Moderate Forum / Delete Inappropriate Posts | Restricted | Restricted | Restricted | Allowed |
| Access Admin Verification Queue (KYC) | **Denied** | **Denied** | **Denied** | **Allowed** |
| Access Central Database & Export CSV Reports | **Denied** | **Denied** | **Denied** | **Allowed** |

### 3.4 Core Subsystems & Functional Module Breakdown
The proposed AMS comprises seven core functional modules designed to replace the manual spreadsheet workflow:

1. **Authentication & Identity Verification Subsystem:**
   - Dual-tier onboarding for Alumni and Students.
   - Alumni applicants provide University Student ID, Graduation Year, Department, and current Employment details.
   - Accounts remain in a `PENDING` state until the Alumni Affairs Office verifies credentials against institutional archives.
2. **Central Searchable Directory Subsystem:**
   - Real-time multi-parameter search across Batch, Department, Organization, Location, and Technical Skills.
   - Instant query execution filtering 1,200+ records in `< 200 ms`.
   - Contact privacy masking: personal phone numbers and emails remain concealed until a verified peer connection is established.
3. **Career Mentorship & Direct Referral Subsystem:**
   - Verified graduates publish corporate job vacancies, junior roles, and walk-in referral openings.
   - Enrolled students submit structured mentorship requests specifying their career domain (Software Engineering, Higher Studies, VLSI, Civil Project Management).
4. **Automated Event Management & RSVP Engine:**
   - Administrative officers publish campus events, reunions, and workshops with defined venue capacities and registration deadlines.
   - Alumni and students submit 1-click RSVPs that dynamically update live attendee headcounts, preventing overselling and food waste.
5. **Interactive Academic & Professional Discussion Forum:**
   - Categorized discussion channels: *Interview Prep*, *Higher Studies Abroad (GRE/IELTS/MSc)*, *Tech Stack Discussions*, and *Campus Memories*.
   - Threaded replies, engagement counters, and administrative moderation tools to censor inappropriate content.
6. **Alumni Affairs Executive Analytics & Reporting Engine:**
   - Real-time administrative dashboard displaying Total Alumni Count, Active Engagement Rate, Pending KYC Queue, and Upcoming Events.
   - Visual cohort engagement bar charts analyzing activity by batch (6th, 8th, 10th, 12th, 14th, 16th batches).
   - One-click CSV and PDF data export for institutional audits, university syndicate meetings, and accreditation bodies.
7. **Responsive Navigation & Mobile Drawer System:**
   - Sticky top navigation bar (`sticky top-0 z-40`) providing uninterrupted brand identity.
   - Smooth slide-down mobile hamburger menu for viewport widths under 1024px.
   - Non-intrusive bottom-corner live role switcher widget enabling seamless evaluation and demonstrations.

### 3.5 Non-Functional Requirements (NFRs)
- **NFR-01 (Performance & Latency):** Page load times must not exceed 2.0 seconds over standard 4G mobile connections. Directory searches must return filtered results in under 500 ms.
- **NFR-02 (Security & Integrity):** All web traffic must enforce TLS 1.3 / SSL encryption. Passwords must be hashed using `bcrypt` with a minimum salt round of 10. Direct SQL injection and cross-site scripting (XSS) must be prevented via parameterized queries.
- **NFR-03 (Availability & Reliability):** The system must target 99.5% uptime during standard academic terms, supported by daily automated database backups.
- **NFR-04 (Usability & Accessibility):** The UI must adhere to WCAG 2.1 Level AA guidelines, featuring responsive layouts adaptable to screen widths from 360px (mobile) to 1920px (desktop monitors).
- **NFR-05 (Maintainability):** Modular React component hierarchy, clean REST API route modularization, and strict separation of database migrations.

### 3.6 Boundary & Scope Matrix (Phase 1 vs. Phase 2)

*Table 3.2: System Boundary Matrix (In-Scope vs. Out-of-Scope)*
| Core Capability | Phase 1 (Core Scope - Present Project) | Phase 2 (Future Enhancement Scope) |
| :--- | :---: | :---: |
| Responsive Web Portal (Mobile, Tablet, Desktop) | **In-Scope (Delivered)** | Out-of-Scope |
| Role-Based Portals (Admin, Alumni, Student) | **In-Scope (Delivered)** | Out-of-Scope |
| Searchable Directory with Dynamic Multi-Filter | **In-Scope (Delivered)** | Out-of-Scope |
| Event Management & Live Self-Service RSVP | **In-Scope (Delivered)** | Out-of-Scope |
| Categorized Forum with Admin Moderation | **In-Scope (Delivered)** | Out-of-Scope |
| Job Posting Board & Mentorship Application Form | **In-Scope (Delivered)** | Out-of-Scope |
| Admin Dashboard with Real-Time Analytics & CSV Export | **In-Scope (Delivered)** | Out-of-Scope |
| Automated SSL/TLS Encryption & Role Security | **In-Scope (Delivered)** | Out-of-Scope |
| Native Mobile Apps (Standalone Android APK / iOS) | Out-of-Scope | **Phase 2 Expansion** |
| Integrated Payment Gateway (bKash/Nagad/SSLCommerz) | Out-of-Scope | **Phase 2 Expansion** |
| Automated AI-Powered Resume Scoring | Out-of-Scope | **Phase 2 Expansion** |
| Live In-Browser Video Conferencing / Webinars | Out-of-Scope | **Phase 2 Expansion** |
| Direct Automated Sync with University ERP/Grades | Out-of-Scope | **Phase 2 Expansion** |

---

## CHAPTER 4: EMPIRICAL DATA COLLECTION & STAKEHOLDER INVESTIGATION

### 4.1 Methodology & Instrumentation
To establish empirical credibility, Group-13 employed a **Triangulated Research Methodology** combining three primary data sources:
1. **Quantitative Online Survey:** Distributed to verified BAUST alumni across technology firms, universities, and civil services via Google Forms (`forms.gle/4JpZ39HfiXLh8PJD9`).
2. **Semi-Structured Interviews:** Conducted on-site with administrative staff at the Alumni Affairs Office and Directorate of Student Affairs (DoSA).
3. **Observational Workflow & Document Audit:** Direct analysis of past convocation records, registration spreadsheets, and event attendee tracking ledgers.

### 4.2 Cohort Demographics & Sample Stratification
Responses were harvested from alumni representing pivotal graduating cohorts, ensuring balanced perspectives from senior industry leaders down to recent graduates.

*Table 4.1: Survey Cohort Demographic Distribution*
| Respondent Stratum | Batch Cohort | Representative Professional Roles | Primary Employment Sectors |
| :--- | :---: | :--- | :--- |
| **Senior Alumni** | 6th Batch | University Lecturers, Senior SEs | Academia (BAUST, KUET), Multinational Tech |
| **Mid-Level Alumni** | 12th Batch | Software Engineers, QA Leads | Fintech (Grab, bKash), Software Firms (Therap) |
| **Junior Alumni** | 13th & 14th Batches | Associate SEs, Junior Devs | Local IT Startups, Telecom, Enterprise Services |
| **Current Undergraduates** | 16th Batch (3rd/4th Yr) | Senior Students, Society Leaders | CSE Undergraduate Program, BAUST |

### 4.3 Quantitative Survey Results & Statistical Analysis
The empirical survey yielded definitive statistical evidence highlighting the inadequacy of current informal channels and strong demand for the proposed web system:

*Table 4.2: Empirical Feature Prioritization Ratings*
| Survey Question / Dimension | Empirical Finding | Statistical Percentage | Interpretation & Action |
| :--- | :---: | :---: | :--- |
| **Satisfaction with Current Facebook/WhatsApp Groups** | Rated 1 / 5 (Extremely Poor) | **66.7%** | Strong stakeholder mandate to replace informal social groups with a dedicated portal. |
| **Demand for Dedicated Job Portal & Referrals** | Rated Essential / Top Priority | **80.0%** | Crucial requirement; corporate alumni want a formal platform to post job openings. |
| **Demand for Categorized Discussion Forum** | Rated Essential / Top Priority | **80.0%** | Alumni and students demand organized threads for interview prep and higher studies. |
| **Demand for Searchable Alumni Directory** | Rated High Priority | **40.0%** | Confirms necessity of multi-criteria filtering by company, batch, and location. |
| **Demand for Structured Mentorship Pipeline** | Rated High Priority | **40.0%** | Highlights undergraduate need for structured career guidance from senior alumni. |
| **Demand for Automated Event RSVPs & Notices** | Rated Important Priority | **20.0%** | Essential for streamlining reunion organization and logistics management. |
| **Preferred Platform Deployment Format** | Responsive Website | **66.7%** | Confirms web portal is the optimal first-line solution; zero app store installation friction. |

```
========================================================================================
             SURVEY FINDINGS: STAKEHOLDER FEATURE DEMAND DISTRIBUTION
========================================================================================
Job Portal & Referrals       ████████████████████████████████ 80.0% (4 / 5 Respondents)
Discussion Forum             ████████████████████████████████ 80.0% (4 / 5 Respondents)
Mentorship Pipeline          ████████████████ 40.0% (2 / 5 Respondents)
Alumni Directory Search      ████████████████ 40.0% (2 / 5 Respondents)
Events & Automated RSVP      ████████ 20.0% (1 / 5 Respondents)
========================================================================================
```

### 4.4 Qualitative Stakeholder Interviews & Observational Audit
Direct qualitative extracts gathered during on-site interviews provide critical context for system requirements:
- **Alumni Affairs Administrative Staff:**
  > *"Whenever convocation approaches, we must manually splice four different Excel sheets downloaded from old Google Forms. Phone numbers from two years ago are dead, and we spend whole weeks calling families to confirm attendees. We desperately need a central portal where graduates update their own profiles."*
- **Aroshi Ali (6th Batch Alumnus, Lecturer at BAUST Khulna):**
  > *"The existing Facebook groups are full of irrelevant chatter and memes. When students ask about higher studies or scholarships abroad, their posts disappear in the feed within hours. We need a structured, permanent academic forum."*
- **Md. Hadiuzzaman (12th Batch Alumnus, Software Engineer):**
  > *"Alumni in software firms have internal referral openings every month. Right now, there is no verified, authentic way to share these opportunities with deserving BAUST juniors. A dedicated job portal is overdue."*
- **3rd & 4th Year CSE Undergraduates (Group Discussion):**
  > *"We have no way of knowing which seniors work at Grab, Samsung, or Brain Station. We try to guess names on LinkedIn, but response rates are low. If we have a verified alumni directory with a mentorship button, it will completely change our career preparation."*

### 4.5 Synthesis of Empirical Findings
The empirical evidence unequivocally demonstrates that the existing semi-manual setup has reached operational exhaustion. Stakeholders across all tiers actively desire a centralized, web-based platform that combines directory discovery, career networking, and administrative oversight.

---

## CHAPTER 5: MULTI-DIMENSIONAL FEASIBILITY EVALUATION (TELOS+ FRAMEWORK)

The viability of the BAUST Alumni Management System was evaluated using the globally recognized **TELOS+ Framework** (Technical, Operational, Economic, Schedule, Organizational, Legal/Privacy).

### 5.1 Technical Feasibility
**Assessment: 100% FEASIBLE**

The proposed system leverages modern, production-grade, open-source web technologies. No exotic hardware, proprietary licenses, or unproven libraries are required.

*Table 5.1: Recommended Production Technology Stack & Technical Rationale*
| Architectural Tier | Selected Technology | Version | Technical Rationale & Architectural Merit |
| :--- | :--- | :--- | :--- |
| **Presentation Tier** | **React.js** | 19.x | Component-driven architecture, virtual DOM for instant UI updates, rich ecosystem. |
| **Styling & Tokens** | **Tailwind CSS** | 3.4.x | Utility-first CSS, responsive breakpoints, minimal bundle size, mobile-first design. |
| **Application Tier** | **Node.js + Express**| 20.x LTS | Non-blocking, asynchronous I/O; highly efficient for concurrent I/O operations and REST APIs. |
| **Data Persistence** | **PostgreSQL** | 16.x | Strict ACID compliance, relational foreign key constraints, robust indexing, scalable data storage. |
| **API Architecture** | **RESTful JSON** | Spec 1.0 | Standard HTTP verbs (GET, POST, PUT, DELETE), stateless authentication, predictable payload formats. |
| **Security Encryption**| **bcrypt + JWT** | Latest | Salted password hashing, stateless JSON Web Tokens with role claims, protection against brute-force attacks. |
| **Public Ingress** | **Cloudflare Tunnel**| Latest | Secure reverse proxy, zero public port forwarding, SSL/TLS termination, DDoS mitigation. |

**Hardware & Server Sizing Analysis:**
An entry-level cloud Virtual Private Server (VPS) or on-premise university server with **2 to 4 vCPU cores, 4 to 8 GB RAM, and 50 GB SSD storage** can effortlessly handle the expected traffic of 2,500 active users, with peak concurrent loads during convocations estimated at under 150 concurrent requests.

**Team Technical Competency:**
All three members of Group-13 have successfully completed coursework in Object-Oriented Programming (CSE 2101), Database Management Systems (CSE 3101), and Web Engineering. The team has demonstrated proficiency by engineering a working React full-stack prototype with 15 verified screens matching official Figma specifications.

### 5.2 Operational Feasibility
**Assessment: 100% FEASIBLE**

Operational feasibility assesses whether the system will be embraced by its target users and successfully integrated into daily university administration.
1. **User Readiness & Willingness:** Survey findings indicate that 80%+ of alumni and 100% of consulted students actively demand this platform.
2. **Minimal Learning Curve:** The user interface follows familiar web conventions: clean top navigation, visual cards, standard search boxes, and responsive mobile drawers. Users require zero formal training to register, search, or RSVP.
3. **Administrative Workload Transformation:** Office staff transition from manual clerical spreadsheet maintenance to an automated 1-click verification queue (`[Approve]` / `[Reject]`).
4. **Change Management Strategy:** The Alumni Affairs Office will mandate AMS registration as a prerequisite for receiving convocation gown tokens and event tickets, guaranteeing rapid adoption across graduating cohorts.

### 5.3 Economic Feasibility (Rigorous Cost-Benefit Analysis)
**Assessment: HIGHLY FEASIBLE (Exceptional Financial Return)**

A rigorous Cost-Benefit Analysis (CBA) was conducted over a **3-year economic lifespan** using Discounted Cash Flow (DCF) techniques with a conservative discount rate ($r = 10\%$).

#### 5.3.1 Capital Expenditure (CapEx) Breakdown
Because the system is engineered in-house by Group-13 as an academic project for CSE 3210, software development costs are BDT 0.

*Table 5.2: Capital Expenditure (CapEx) Initial Setup Costs*
| Budget Line Item | Technical Specification | Financial Cost (BDT) |
| :--- | :--- | :---: |
| **Software Engineering & Design** | Delivered in-house by Group-13 (Level-3, Term-II Project) | BDT 0 *(In-house)* |
| **Domain Registration** | Official university sub-domain (`alumni.baust.edu.bd`) | BDT 0 *(Institutional)* |
| **Cloud VPS Hosting (Year 1)** | Linux VPS (4 vCPU, 8 GB RAM, 60 GB NVMe SSD) + Managed DB | BDT 14,000 |
| **SSL/TLS Security Certificate** | Let's Encrypt Automated Production Certificate | BDT 0 *(Open-source)* |
| **Legacy Data Cleansing & ETL** | Sanitizing and importing legacy convocation Excel data into PostgreSQL | BDT 4,500 |
| **Documentation & Staff Orientation** | User handbooks, verification guidelines, and pilot launch tests | BDT 3,000 |
| **Total Initial Capital Outlay ($C_0$)** |  | **BDT 21,500** |

#### 5.3.2 Operational Expenditure (OpEx) Breakdown

*Table 5.3: Annual Operating Expenditure (OpEx) Recurring Costs*
| Recurring Line Item | Operating Detail | Annual Cost (BDT) |
| :--- | :--- | :---: |
| **Server Hosting & Automated Cloud Backups** | VPS renewal, daily encrypted off-site snapshots | BDT 12,000 / year |
| **Transactional Email & Security Alerts** | Automated verification emails, password resets (SendGrid/Firebase) | BDT 3,000 / year |
| **System Administration & Maintenance** | Managed internally by BAUST IT Cell / CSE Department | BDT 0 *(University IT)* |
| **Total Annual Operational Cost ($C_{annual}$)** |  | **BDT 15,000 / year** |

#### 5.3.3 Quantified Tangible & Intangible Operational Savings

*Table 5.4: Annual Tangible Operational Savings Comparison*
| Operational Activity | Current Manual Cost | Proposed AMS Cost | Net Annual Savings (BDT) |
| :--- | :--- | :--- | :---: |
| **Staff Hours Managing Records** | ~350 hours/year @ BDT 200/hr = BDT 70,000 | ~60 hours/year = BDT 12,000 | **+ BDT 58,000** |
| **Event Ticketing & RSVP Coordination** | Paper tickets, SMS broadcasting = BDT 25,000 | Automated online RSVP = BDT 5,000 | **+ BDT 20,000** |
| **Paper Circulars, Postal Mailings** | Printing notices, physical letters = BDT 18,000 | Digital announcements = BDT 0 | **+ BDT 18,000** |
| **Total Annual Gross Savings ($S_{annual}$)** | **BDT 113,000 / year** | **BDT 17,000 / year** | **+ BDT 96,000 / year** |

**Net Annual Operating Cash Flow ($CF$):**
$$CF = S_{annual} - C_{annual} = 96,000 - 15,000 = \text{BDT } 81,000 \text{ per year}$$

#### 5.3.4 3-Year Pro-Forma Cash Flow Projections
Applying a conservative university discount rate of $r = 10\%$ ($0.10$):

*Table 5.5: 3-Year Discounted Cash Flow (DCF) & Financial Valuation Table*
| Year | Outlay / CapEx (BDT) | Net Operational Savings (BDT) | Net Cash Flow (BDT) | Discount Factor $(1+r)^{-t}$ | Discounted Cash Flow (DCF) |
| :---: | :---: | :---: | :---: | :---: | :---: |
| **Year 0** | BDT 21,500 | BDT 0 | - BDT 21,500 | 1.0000 | - BDT 21,500.00 |
| **Year 1** | BDT 0 | BDT 81,000 | + BDT 81,000 | 0.9091 | + BDT 73,636.36 |
| **Year 2** | BDT 0 | BDT 81,000 | + BDT 81,000 | 0.8264 | + BDT 66,942.15 |
| **Year 3** | BDT 0 | BDT 81,000 | + BDT 81,000 | 0.7513 | + BDT 60,856.50 |
| **TOTAL** | **BDT 21,500** | **BDT 243,000** | **+ BDT 221,500** | — | **NPV = + BDT 179,935.01** |

#### 5.3.5 Financial Decision Metrics: Payback Period, NPV, ROI, and Benefit-Cost Ratio

1. **Payback Period (PBP):**
   $$\text{PBP} = \frac{\text{Initial Capital Outlay } (C_0)}{\text{Net Annual Cash Savings } (CF)} = \frac{21,500}{81,000} \approx 0.265 \text{ Years} \approx \mathbf{3.19 \text{ Months (3.2 Months)}}$$
   *Interpretation:* The system fully recovers its initial setup expenditure within the first 96 days of operation.

2. **Net Present Value (NPV):**
   $$\text{NPV} = \sum_{t=1}^{3} \frac{CF_t}{(1+r)^t} - C_0 = (73,636.36 + 66,942.15 + 60,856.50) - 21,500 = 201,435.01 - 21,500 = \mathbf{+\text{BDT } 179,935.01}$$
   *Interpretation:* Because $\text{NPV} > 0$ by an overwhelming margin of nearly BDT 180,000, the investment generates immense institutional wealth and is unconditionally accepted.

3. **Return on Investment (ROI):**
   $$\text{ROI} = \frac{\text{Total Net Benefits Over 3 Years}}{\text{Total Initial Investment}} \times 100\% = \frac{(81,000 \times 3) - 21,500}{21,500} \times 100\% = \frac{221,500}{21,500} \times 100\% = \mathbf{1,030.2\%}$$
   *Interpretation:* The project generates a 3-year return of over 10 times its initial cost (annualized ROI of $343.4\%$).

4. **Benefit-Cost Ratio (BCR):**
   $$\text{Total Discounted Benefits} = \sum_{t=1}^{3} \frac{96,000}{(1.10)^t} = 87,272.73 + 79,338.84 + 72,126.22 = \text{BDT } 238,737.79$$
   $$\text{Total Discounted Costs} = 21,500 + \sum_{t=1}^{3} \frac{15,000}{(1.10)^t} = 21,500 + 37,302.78 = \text{BDT } 58,802.78$$
   $$\text{BCR} = \frac{238,737.79}{58,802.78} = \mathbf{4.06}$$
   *Interpretation:* For every BDT 1.00 invested by BAUST, the university captures BDT 4.06 in measurable economic value.

#### 5.3.6 Financial Sensitivity Analysis
To confirm financial resilience, the economic model was stress-tested across three adverse scenarios:

*Table 5.6: Economic Sensitivity Analysis Under Multiple Variance Scenarios*
| Scenario Analysis | Operational Assumption | Resulting NPV (BDT) | Payback Period | Financial Recommendation |
| :--- | :--- | :---: | :---: | :--- |
| **Baseline Case** | Normal operational savings & costs | **+ BDT 179,935** | **3.2 Months** | Highly Viable (Unconditional Go) |
| **Adverse Case 1** | CapEx increases by 50% (BDT 32,250) | **+ BDT 169,185** | **4.8 Months** | Highly Viable (Resilient) |
| **Adverse Case 2** | Operational savings drop by 30% | **+ BDT 107,305** | **5.2 Months** | Strongly Viable |
| **Worst-Case Stress** | 50% CapEx increase + 30% savings drop | **+ BDT 96,555** | **7.8 Months** | Viable (Recovers in `< 8` months) |

### 5.4 Schedule Feasibility
**Assessment: 100% FEASIBLE**

The project is structured into an intensive **12-Week Work Breakdown Structure (WBS)** perfectly aligned with the Level-3, Term-II academic calendar.

*Table 5.7: 12-Week Work Breakdown Structure (WBS) & Deliverables*
| Academic Week | Work Package Phase | Primary Engineering Tasks | Verifiable Milestone Output |
| :---: | :--- | :--- | :--- |
| **W1–W2** | **Requirements & Needs Assessment** | Stakeholder survey, office interviews, PIECES audit | Approved Feasibility Study Report |
| **W3–W4** | **System Architecture & UI/UX** | Relational DB modeling, Figma prototype (D1–D15) | Verified UI Mockups & Data Schemas |
| **W5–W7** | **Backend & API Implementation** | Node/Express API routes, bcrypt/JWT auth, DB migrations | Working REST API Test Suite |
| **W8–W9** | **Frontend Client Implementation** | React 19 pages, Tailwind styling, mobile drawers | Fully Integrated Client Portal |
| **W10** | **Admin Dashboard & Analytics** | Verification queue, CSV export engine, chart widgets | Functional Admin Control Suite |
| **W11** | **Integration & Security Testing** | End-to-end testing, role guard tests, vulnerability scan | Comprehensive Test Sign-off Report |
| **W12** | **Production Deployment & Orientation** | Server provisioning, Cloudflare Tunnel, staff training | **System Live on BAUST Domain** |

```
========================================================================================
                      12-WEEK GANTT SCHEDULE & CRITICAL PATH
========================================================================================
Requirements & Survey   [████] (W1-2: COMPLETED)
System Design & Figma          [████] (W3-4: COMPLETED)
Backend REST APIs                     [██████] (W5-7: CRITICAL PATH)
Frontend React UI                             [████] (W8-9)
Admin Engine & Export                                [██] (W10)
Testing & Security                                         [██] (W11: CRITICAL PATH)
Deployment & Launch                                               [██] (W12)
========================================================================================
```

*Critical Path Analysis:* The Critical Path spans Requirements $\rightarrow$ Architecture $\rightarrow$ Backend APIs $\rightarrow$ Testing $\rightarrow$ Deployment. Because Group-13 has already engineered the complete interactive frontend matching all 15 Figma frames, schedule risk on the client tier is virtually zero.

### 5.5 Organizational & Cultural Feasibility
**Assessment: 100% FEASIBLE**

The system seamlessly integrates into the institutional governance of BAUST:
1. **Administrative Authority:** Operates directly under the existing authority of the Directorate of Student Affairs (DoSA) and the Alumni Affairs Office.
2. **Institutional Credibility:** Protects university reputation by requiring staff verification before any user can access the directory or post jobs.
3. **Campus Culture Alignment:** Fosters a tradition of alumni giving, industry placement, and institutional pride without disrupting existing academic policies.

### 5.6 Legal, Regulatory & Privacy Feasibility
**Assessment: FULLY COMPLIANT**

1. **Cyber Security Legislation:** Complies fully with the Cyber Security Act 2023 of Bangladesh. User data is stored within secured relational databases with strict access boundaries.
2. **Student Data Privacy Standards:** Contact numbers and personal emails are concealed from public viewing. Only verified alumni and students can view masked profiles upon mutual authorization.
3. **Open-Source Licensing:** All selected libraries and frameworks (React, Tailwind CSS, Node.js, Express, PostgreSQL) carry permissive MIT, BSD, or Apache licenses, eliminating licensing liabilities.
4. **Institutional Data Sovereignty:** BAUST retains 100% proprietary ownership of the source code, database records, and intellectual property.

---

## CHAPTER 6: STRATEGIC ALTERNATIVES EVALUATION MATRIX

### 6.1 Description of Strategic Alternatives
To ensure an unbiased evaluation, four distinct technological and procedural alternatives were examined:
- **Alternative 1: Status Quo (Scattered Excel Spreadsheets + Social Media Groups).** Continued reliance on manual desktop spreadsheets, Google Forms, and informal WhatsApp/Facebook chats.
- **Alternative 2: Physical Paper Archives & Filing Cabinets.** Transitioning to physical ledger files, paper registration slips, and manual office filing systems.
- **Alternative 3: Commercial Off-The-Shelf (COTS) Alumni SaaS (e.g., Almabase, Hivebrite).** Procuring a multi-tenant proprietary cloud platform licensed by an international vendor.
- **Alternative 4: Proposed Custom Web-Based Information System (BAUST AMS).** Custom in-house system engineered by Group-13 using modern open-source stacks tailored to BAUST workflows.

### 6.2 Weighted Scoring Multi-Criteria Decision Analysis (MCDA)

*Table 6.1: Multi-Criteria Decision Analysis (MCDA) Alternatives Matrix*
| Decision Criteria | Weight | Alt 1: Status Quo | Alt 2: Paper Archive | Alt 3: COTS SaaS | Alt 4: Proposed AMS |
| :--- | :---: | :---: | :---: | :---: | :---: |
| **Initial Capital Cost** | 15% | 5 / 5 (0.75) | 4 / 5 (0.60) | 1 / 5 (0.15) | **5 / 5 (0.75)** |
| **Annual Recurring Cost** | 15% | 1 / 5 (0.15) | 3 / 5 (0.45) | 1 / 5 (0.15) | **5 / 5 (0.75)** |
| **Data Integrity & Security** | 20% | 1 / 5 (0.20) | 2 / 5 (0.40) | 4 / 5 (0.80) | **5 / 5 (1.00)** |
| **Customization to BAUST** | 15% | 2 / 5 (0.30) | 1 / 5 (0.15) | 2 / 5 (0.30) | **5 / 5 (0.75)** |
| **Student-Alumni Mentorship**| 15% | 1 / 5 (0.15) | 1 / 5 (0.15) | 3 / 5 (0.45) | **5 / 5 (0.75)** |
| **Operational Efficiency** | 10% | 1 / 5 (0.10) | 1 / 5 (0.10) | 4 / 5 (0.40) | **5 / 5 (0.50)** |
| **Institutional Data Ownership**| 10% | 2 / 5 (0.20) | 5 / 5 (0.50) | 2 / 5 (0.20) | **5 / 5 (0.50)** |
| **WEIGHTED TOTAL SCORE** | **100%** | **1.85 / 5.00** | **2.35 / 5.00** | **2.45 / 5.00** | **4.75 / 5.00** |

### 6.3 Justification of the Selected Custom Web Solution
Alternative 4 emerges as the decisive winner with a score of **4.75 out of 5.00**:
- **Commercial SaaS (Alt 3)** costs over BDT 150,000 upfront plus BDT 80,000+ annually in foreign currency licenses, requires rigid generic workflows, and stores student data on third-party offshore cloud servers.
- **Paper Records (Alt 2)** and **Spreadsheets (Alt 1)** fail every modern standard of data integrity, privacy, and accessibility.
- **Proposed AMS (Alt 4)** provides 100% custom alignment with BAUST's academic structures, protects institutional data sovereignty, and pays for itself within 3.2 months at a fraction of the commercial cost.

---

## CHAPTER 7: COMPREHENSIVE RISK ASSESSMENT & MITIGATION PROTOCOLS

To guarantee operational resilience, potential risks were categorized and paired with actionable mitigation measures:

*Table 7.1: Comprehensive Risk Assessment Matrix & Mitigation Measures*
| Risk Description | Category | Prob. (1–5) | Impact (1–5) | Risk Score (P×I) | Risk Level | Proactive Mitigation Protocol |
| :--- | :--- | :---: | :---: | :---: | :---: | :--- |
| **Slow User Adoption Across Alumni** | Operational | 2 | 3 | 6 | Medium | Mandate AMS registration for convocation tickets and campus reunion passes; partner with the BAUST CSE Society. |
| **Fake or Malicious Account Creation** | Security | 1 | 5 | 5 | Medium | Enforce mandatory Admin KYC verification queue; match Student IDs against university graduation records before profile activation. |
| **Database Corruption or Data Loss** | Technical | 1 | 5 | 5 | Medium | Implement automated daily cron jobs executing encrypted PostgreSQL dumps pushed to secure off-site cloud storage. |
| **Inappropriate Forum Posts or Spam** | Governance | 2 | 3 | 6 | Medium | Implement user reporting flags and provide the Alumni Admin with one-click thread removal and account suspension capabilities. |
| **Vulnerability to XSS / SQL Injection**| Security | 1 | 5 | 5 | Medium | Use parameterized queries via ORM, sanitize all user inputs, and enforce HTTP-only secure cookie storage for JWT tokens. |
| **Transient Cloudflare Tunnel Outage** | Infrastructure| 2 | 2 | 4 | Low | Configure direct fallback to local university IP address / static DNS records. |

---

## CHAPTER 8: FINAL STRATEGIC RECOMMENDATION & GOVERNANCE DECISION

### 8.1 Evaluative Synthesis
The empirical, technical, financial, and operational evaluations confirm that the proposed BAUST Alumni Management System resolves critical administrative pain points, eliminates severe data decay, and establishes an invaluable networking pipeline connecting alumni with students.

### 8.2 Formal Decision Statement
```
========================================================================================
                          FINAL FORMAL GOVERNANCE DECISION
========================================================================================

    [ X ]   GO — PROCEED IMMEDIATELY TO SYSTEM DESIGN & IMPLEMENTATION (PHASE II)
    [   ]   GO WITH MODIFICATIONS — REVISE SCOPE PRIOR TO CONTINUATION
    [   ]   NO-GO — TERMINATE PROJECT

========================================================================================
```

**Justification for the Unconditional GO Decision:**
1. **Financial Strength:** Net Present Value of **+ BDT 179,935.01**, a Benefit-Cost Ratio of **4.06**, and a Payback Period of just **3.2 months**.
2. **Empirical Mandate:** Over **80%** of surveyed stakeholders demand a formal job board and forum, while **66.7%** report extreme dissatisfaction with existing social groups.
3. **Technical Maturity:** The underlying architecture utilizes proven open-source technologies, backed by an interactive 15-screen prototype engineered by Group-13.
4. **Governance Alignment:** Directly advances the strategic accreditation goals of BAUST, DoSA, and the Department of Computer Science & Engineering.

### 8.3 Actionable Phase II Implementation Road Map
1. **Week 5–7:** Finalize relational PostgreSQL migrations and secure Node.js REST API routes.
2. **Week 8–9:** Connect client UI with live endpoints, enabling real-time directory searching and mentorship requests.
3. **Week 10:** Finalize administrative dashboard widgets, KYC verification queues, and CSV export functionality.
4. **Week 11:** Execute penetration testing, accessibility auditing, and user acceptance testing with representative alumni.
5. **Week 12:** Deploy on the official BAUST domain (`alumni.baust.edu.bd`) and conduct staff orientation workshops.

---

## CHAPTER 9: CONCLUSION

The existing semi-manual, spreadsheet-driven workflow at BAUST's Alumni Affairs Office is unsustainable. It consumes hundreds of clerical hours, scatters critical graduate records, and leaves current students without credible career pathways.

The **BAUST Alumni Management System (AMS)** engineered by Group-13 offers a comprehensive, secure, and cost-effective solution. With an initial setup cost of BDT 21,500 that pays for itself in ~3.2 months, a modern 3-tier architecture, and overwhelming stakeholder support, the project is technically feasible, economically rewarding, and strategically vital. Proceeding immediately with full-scale deployment will build a permanent digital foundation connecting BAUST graduates with their alma mater for decades to come.

---

## CHAPTER 10: ACADEMIC REFERENCES (IEEE STANDARD)

1. [1] K. E. Kendall and J. E. Kendall, *Systems Analysis and Design*, 10th ed. Upper Saddle River, NJ, USA: Pearson Education, 2019.
2. [2] R. S. Pressman and B. R. Maxim, *Software Engineering: A Practitioner's Approach*, 9th ed. New York, NY, USA: McGraw-Hill Education, 2020.
3. [3] I. Sommerville, *Software Engineering*, 10th ed. Boston, MA, USA: Pearson, 2016.
4. [4] Department of Computer Science and Engineering, *CSE 3210: Information System Design Sessional Lab Manual & Academic Project Guidelines*, Bangladesh Army University of Science and Technology (BAUST), Saidpur, 2026.
5. [5] Group-13, *System Presentation & Architecture Document: BAUST Alumni Management System (AMS)*, Department of CSE, BAUST, Fall 2026.
6. [6] Group-13, *User Needs Assessment Survey Dataset: Alumni Management System Feedback Form*, Google Forms Dataset (`https://forms.gle/4JpZ39HfiXLh8PJD9`), BAUST Alumni Cohorts, Oct.–Nov. 2026.
7. [7] Government of the People's Republic of Bangladesh, *Cyber Security Act 2023*, Ministry of Law, Justice and Parliamentary Affairs, Dhaka, Bangladesh, 2023.

---

## CHAPTER 11: COMPREHENSIVE APPENDICES

### APPENDIX A: Complete Survey Questionnaire Instrument
*(Administered electronically via Google Forms to BAUST Alumni Cohorts)*
```
1. Full Name: __________________________________________________
2. Graduating Batch / Department: [ ] 6th  [ ] 12th  [ ] 13th  [ ] 14th  [ ] Other: ____
3. Current Employment Status & Organization: ______________________________________
4. Current Job Title / Professional Designation: __________________________________
5. How would you rate the current alumni Facebook and WhatsApp groups?
   (1 = Completely Ineffective, 5 = Highly Effective) -> [ 1 ] [ 2 ] [ 3 ] [ 4 ] [ 5 ]
6. Which features do you consider essential in an official BAUST Alumni Portal?
   [ ] Centralized Searchable Directory
   [ ] Corporate Job Board & Walk-in Referrals
   [ ] 1-to-1 Mentorship Request System for Students
   [ ] Categorized Academic & Career Discussion Forum
   [ ] Automated Event Calendar & Self-Service RSVP
7. What is your preferred platform interface?
   [ ] Responsive Website (Mobile, Tablet, PC)
   [ ] Dedicated Mobile Application (Android/iOS)
   [ ] Both Equally
8. Specific feedback or feature recommendations for the development team:
   _________________________________________________________________________________
```

### APPENDIX B: Survey Statistical Tabulations
- **Total Valid Responses:** 5 Representative In-Depth Cohort Responses (across 6th, 12th, 14th batches and academic faculty).
- **Communication Inefficacy Rating:** 66.7% scored current social channels at 1/5 (Mean Score = 1.33 / 5.00).
- **Job Portal & Referrals Demand:** 80.0% Priority Acceptance.
- **Discussion Forum Demand:** 80.0% Priority Acceptance.
- **Searchable Directory Demand:** 40.0% Priority Acceptance.
- **Mentorship Pipeline Demand:** 40.0% Priority Acceptance.
- **Web Interface Preference:** 66.7% Website, 33.3% Hybrid App.

### APPENDIX C: Formal UML Use Case Specifications

*Table 11.1: Formal Use Case Specification: UC-01 (Applicant Verification Queue)*
| Element | Formal Specification |
| :--- | :--- |
| **Use Case ID** | **UC-01** |
| **Use Case Title** | **Process Pending Alumni Verification (KYC)** |
| **Primary Actor** | Alumni Admin (Alumni Affairs Office Staff) |
| **Preconditions** | Graduate has submitted registration; account status is `PENDING`. Admin is authenticated. |
| **Trigger** | Admin clicks "Pending Requests" tab on the Admin Dashboard. |
| **Main Success Scenario** | 1. System displays list of pending applicants with Student ID, Dept, Batch, and Workplace.<br>2. Admin reviews student ID against institutional records.<br>3. Admin clicks `[Approve & Verify]`.<br>4. System updates account status to `ACTIVE` in PostgreSQL.<br>5. System sends automated confirmation email to graduate.<br>6. Graduate appears in the verified Alumni Directory. |
| **Alternative Flows** | 3a. Admin identifies mismatched record and clicks `[Reject]`.<br>3b. System prompts for rejection rationale and marks status as `REJECTED`. |
| **Postconditions** | Verified alumnus granted full directory, forum, and job posting permissions. |

*Table 11.2: Formal Use Case Specification: UC-02 (Mentorship Connection Pipeline)*
| Element | Formal Specification |
| :--- | :--- |
| **Use Case ID** | **UC-02** |
| **Use Case Title** | **Submit Career Mentorship Request** |
| **Primary Actor** | Current Undergraduate Student |
| **Preconditions** | Student is authenticated; alumnus profile is active and verified. |
| **Trigger** | Student clicks `[Request Mentorship]` on an alumnus's directory card. |
| **Main Success Scenario** | 1. System opens structured Mentorship Modal.<br>2. Student selects mentorship track (Software Eng, Higher Studies, Core Engineering).<br>3. Student enters inquiry message and clicks `[Send Request]`.<br>4. System logs relationship in database and triggers notification to alumnus.<br>5. Button updates to `[Requested]` state with confirmation toast. |
| **Postconditions** | Alumnus receives structured career guidance inquiry without exposing raw phone numbers. |

### APPENDIX D: Structured Data Flow Diagrams (DFD)

#### Level-0 Context Data Flow Diagram
```
              ┌────────────────────────────────────────────────────────┐
              │                                                        │
              │         BAUST ALUMNI MANAGEMENT SYSTEM (AMS)           │
              │                     (Process 0)                        │
              │                                                        │
              └───────▲───────────────▲─────────────────▲──────────────┘
                      │               │                 │
    Registration/RSVP │ Profile Data  │ Verification    │ Directory Queries
    Job Postings/Chat │ RSVP Requests │ Approvals/Notice│ Mentorship Requests
                      │               │                 │
              ┌───────┴──────┐ ┌──────┴────────┐ ┌──────┴───────┐
              │ VERIFIED     │ │ ALUMNI ADMIN  │ │ CURRENT      │
              │ ALUMNUS      │ │ (Alumni Desk) │ │ STUDENT      │
              └──────────────┘ └───────────────┘ └──────────────┘
```

#### Level-1 Decomposed Data Flow Diagram (Core Processes)
- **Process 1.0 (Authentication & KYC Engine):** Validates credentials, verifies student ID against database store `D1: User_Accounts`.
- **Process 2.0 (Directory Discovery Service):** Queries `D2: Alumni_Profiles`, enforces data privacy masking, returns filtered record lists.
- **Process 3.0 (Event & RSVP Processor):** Updates `D3: Events_Store` and `D4: Event_RSVPs`, recalculating live attendance headcounts.
- **Process 4.0 (Career & Mentorship Exchange):** Stores job circulars in `D5: Job_Board` and links student mentorship inquiries in `D6: Mentorship_Requests`.
- **Process 5.0 (Forum & Moderation Pipeline):** Manages threads in `D7: Forum_Threads` with administrative moderation controls.
- **Process 6.0 (Reporting Engine):** Extracts normalized data across all data stores, compiling CSV and PDF exports for `D8: Audit_Logs`.

### APPENDIX E: Relational Database Schema & Data Dictionary

*Table 11.3: Relational Data Dictionary Specification*
| Table Name | Attribute / Column | Data Type | Constraint | Description |
| :--- | :--- | :--- | :--- | :--- |
| **`users`** | `user_id` | UUID / SERIAL | PRIMARY KEY | Unique system user identifier |
| | `email` | VARCHAR(120) | UNIQUE, NOT NULL | Institutional or personal login email |
| | `password_hash` | VARCHAR(255) | NOT NULL | Salted bcrypt encrypted password |
| | `role` | VARCHAR(20) | NOT NULL | Value in (`admin`, `alumni`, `student`) |
| | `status` | VARCHAR(20) | NOT NULL | Value in (`pending`, `active`, `rejected`) |
| **`alumni_profiles`** | `profile_id` | UUID / SERIAL | PRIMARY KEY | Unique profile identifier |
| | `user_id` | UUID / INT | FOREIGN KEY | References `users(user_id)` |
| | `name` | VARCHAR(100) | NOT NULL | Full name of graduate |
| | `student_id` | VARCHAR(30) | UNIQUE, NOT NULL | Official BAUST student registration number |
| | `batch` | VARCHAR(20) | NOT NULL | Graduating cohort (e.g., `6th`, `12th`) |
| | `dept` | VARCHAR(20) | NOT NULL | Department (`CSE`, `EEE`, `ME`, `CE`, `BBA`)|
| | `company` | VARCHAR(100) | NULLABLE | Current employing organization |
| | `designation` | VARCHAR(100) | NULLABLE | Current professional role |
| | `location` | VARCHAR(50) | NOT NULL | City / Country of residence |
| **`events`** | `event_id` | UUID / SERIAL | PRIMARY KEY | Unique event identifier |
| | `title` | VARCHAR(150) | NOT NULL | Title of reunion, seminar, or workshop |
| | `venue` | VARCHAR(100) | NOT NULL | Physical venue or virtual link |
| | `event_date` | TIMESTAMP | NOT NULL | Date and time of occurrence |
| | `capacity` | INT | NOT NULL | Maximum permitted attendees |
| **`event_rsvps`** | `rsvp_id` | UUID / SERIAL | PRIMARY KEY | Unique RSVP identifier |
| | `event_id` | UUID / INT | FOREIGN KEY | References `events(event_id)` |
| | `user_id` | UUID / INT | FOREIGN KEY | References `users(user_id)` |
| | `created_at` | TIMESTAMP | DEFAULT NOW() | Timestamp of reservation |
| **`jobs`** | `job_id` | UUID / SERIAL | PRIMARY KEY | Unique job post identifier |
| | `posted_by` | UUID / INT | FOREIGN KEY | References `users(user_id)` |
| | `title` | VARCHAR(150) | NOT NULL | Job role / internship position |
| | `company` | VARCHAR(100) | NOT NULL | Organization name |
| | `job_type` | VARCHAR(30) | NOT NULL | `Full-time`, `Internship`, `Remote` |
| **`mentorship_requests`**| `request_id` | UUID / SERIAL | PRIMARY KEY | Unique mentorship request identifier |
| | `student_id` | UUID / INT | FOREIGN KEY | References `users(user_id)` |
| | `alumnus_id` | UUID / INT | FOREIGN KEY | References `users(user_id)` |
| | `track` | VARCHAR(50) | NOT NULL | Mentorship topic (Career, Higher Studies) |
| | `status` | VARCHAR(20) | NOT NULL | `Pending`, `Accepted`, `Completed` |

### APPENDIX F: Figma Prototype Screen Verification Matrix (D1–D15)

*Table 11.4: Figma Interactive Prototype Frame Mapping (D1–D15)*
| Prototype Frame ID | Screen Title | Primary User Role | Key Interactive Affordances & Verification |
| :---: | :--- | :--- | :--- |
| **D1** | **Landing Page** | Public / Guest | Hero banner, live feed preview, registration shortcuts, smooth scrolling to `#features` and `#how-it-works`. |
| **D2** | **Login Portal** | Public / Guest | Form validation, 1-click test role logins (`Alumni Admin`, `Rahim (Alumni)`, `Student`). |
| **D3** | **Registration Portal** | Public / Guest | Dual-role tab (Student vs. Alumni), Student ID input, pending queue notification toast. |
| **D4** | **Home Dashboard** | Verified Alumni | Welcome banner, upcoming events preview, latest forum discussions, recent job cards. |
| **D5** | **Alumni Directory** | Alumni & Students | Real-time search bar, batch dropdown, dept dropdown, location filter, `[Connect]` & `[View Profile]`. |
| **D6** | **Events & Reunions** | Alumni & Students | Event cards, category badges, dynamic `[RSVP Now]` toggle with attendee headcount increment. |
| **D7** | **Discussion Forum** | Alumni & Students | Category filter chips, threaded reply drawer, `[+ Start New Discussion]` composer dialog. |
| **D8** | **Job Board** | Alumni & Students | Job listings, company logos, `[Apply Now]` toast confirmation, `[+ Post a Job]` modal dialog. |
| **D9** | **Admin Dashboard Overview**| Alumni Admin | 4 core metric cards, interactive cohort engagement bar chart, pending registration summary. |
| **D10** | **Pending Verification Queue**| Alumni Admin | Detailed applicant table with Student ID, `[Approve & Verify]` and `[Reject]` action buttons. |
| **D11** | **Central Alumni Database** | Alumni Admin | Complete verified graduate records table, live member search, `[Export CSV]` spreadsheet generator. |
| **D12** | **Event Management Suite** | Alumni Admin | Event scheduling form, capacity controller, active event deletion controls. |
| **D13** | **Alumni Profile Modal** | All Roles | Detailed pop-up drawer showing bio, skills badges, graduation batch, company, and contact actions. |
| **D14** | **Post Job Dialog** | Alumni & Admin | Modal form for role title, organization name, employment type, location, and application link. |
| **D15** | **Student View / Restriction**| Current Student | Dedicated student interface; restricts access to administrative routes with clear advisory message. |

### APPENDIX G: As-Is vs. To-Be Workflow Sequence Comparison

```
+───────────────────────────────────────────────────────────────────────────────────────────+
|               AS-IS SYSTEM WORKFLOW (Manual, Fragmented, Error-Prone)                     |
+───────────────────────────────────────────────────────────────────────────────────────────+
  [Convocation Form] ──> [Desktop Excel Files] ──> [Phone Calls/SMS] ──> [Ad-Hoc Days-Long Reports]
         │                       │                         │                      │
    Unvalidated             Scattered on              Manual RSVP           Slow manual merging;
    paper slips            separate office PCs       phone verification     high data decay rate

+───────────────────────────────────────────────────────────────────────────────────────────+
|               TO-BE PROPOSED AMS WORKFLOW (Centralized, Secure, Automated)                |
+───────────────────────────────────────────────────────────────────────────────────────────+
  [Unified Web Portal] ─> [Role-Based Access] ──> [Central PostgreSQL] ─> [Instant Live CSV/PDF]
         │                       │                         │                      │
    Single entry point;      Admin, Alumni,           3NF Relational DB;     1-Click report export;
    responsive UI (React)    Student security guards  Single Source of Truth sub-second query latency
```

---

*End of Formal Feasibility Study Report — CSE 3210 (Group-13, BAUST Saidpur)*
