export const initialAlumni = [
  {
    id: 'alm-1',
    name: 'Rahim Uddin',
    initials: 'RU',
    email: 'rahim.uddin@cloudsystems.com',
    batch: '12th',
    dept: 'CSE',
    designation: 'Software Engineer',
    company: 'Cloud Systems Ltd.',
    location: 'Dhaka',
    avatarBg: 'bg-[#ece7fa]',
    avatarText: 'text-[#5b3fa8]',
    bio: 'Backend & Cloud specialist with 3+ years in scalable microservices. Former President of BAUST Computer Club. Passionate about helping junior developers with system design and interview prep.',
    skills: ['Go', 'Node.js', 'PostgreSQL', 'Docker', 'AWS'],
    linkedin: 'https://linkedin.com/in/example',
    status: 'Verified',
    joinedDate: 'Jan 2024'
  },
  {
    id: 'alm-2',
    name: 'Sadia Rahman',
    initials: 'SR',
    email: 'sadia.rahman@pixellabs.io',
    batch: '14th',
    dept: 'CSE',
    designation: 'QA Engineer',
    company: 'Pixel Labs',
    location: 'Remote',
    avatarBg: 'bg-[#e1f2fc]',
    avatarText: 'text-[#17608c]',
    bio: 'Test automation advocate focusing on Cypress and Playwright. Mentoring current BAUST students on transitioning into Software Quality Assurance and remote work.',
    skills: ['Cypress', 'Playwright', 'API Testing', 'Selenium', 'CI/CD'],
    linkedin: 'https://linkedin.com/in/example',
    status: 'Verified',
    joinedDate: 'Mar 2024'
  },
  {
    id: 'alm-3',
    name: 'Nusrat Jahan',
    initials: 'NJ',
    email: 'nusrat.jahan@baust.edu.bd',
    batch: '14th',
    dept: 'CSE',
    designation: 'Lecturer',
    company: 'BAUST, Saidpur',
    location: 'Saidpur',
    avatarBg: 'bg-[#e4e9fb]',
    avatarText: 'text-[#33409b]',
    bio: 'Academic researcher and Lecturer at BAUST. Research interests in Machine Learning, Computer Vision, and Natural Language Processing for low-resource languages.',
    skills: ['Machine Learning', 'Python', 'PyTorch', 'Data Structures', 'Algorithms'],
    linkedin: 'https://linkedin.com/in/example',
    status: 'Verified',
    joinedDate: 'Feb 2024'
  },
  {
    id: 'alm-4',
    name: 'Mahmudul Karim',
    initials: 'MK',
    email: 'mahmudul.karim@insightworks.org',
    batch: '10th',
    dept: 'CSE',
    designation: 'Data Analyst',
    company: 'Insight Works',
    location: 'Dhaka',
    avatarBg: 'bg-[#ece7fa]',
    avatarText: 'text-[#5b3fa8]',
    bio: 'Data professional converting messy datasets into executive decision dashboards. Enthusiastic about organizing university-wide data analytics competitions.',
    skills: ['SQL', 'Tableau', 'Power BI', 'Python', 'Pandas'],
    linkedin: 'https://linkedin.com/in/example',
    status: 'Verified',
    joinedDate: 'Dec 2023'
  },
  {
    id: 'alm-5',
    name: 'Tanvir Hasan',
    initials: 'TH',
    email: 'tanvir.hasan@netlink.com.bd',
    batch: '16th',
    dept: 'EEE',
    designation: 'Network Engineer',
    company: 'NetLink Solutions',
    location: 'Saidpur',
    avatarBg: 'bg-[#e1f2fc]',
    avatarText: 'text-[#17608c]',
    bio: 'Network architect managing telecom switches, enterprise firewalls, and campus-wide optical fiber distribution.',
    skills: ['Cisco CCNA', 'Routing & Switching', 'BGP', 'Firewalls', 'Optical Networks'],
    linkedin: 'https://linkedin.com/in/example',
    status: 'Verified',
    joinedDate: 'Apr 2024'
  },
  {
    id: 'alm-6',
    name: 'Farhana Akter',
    initials: 'FA',
    email: 'farhana.akter@studionoor.design',
    batch: '12th',
    dept: 'CSE',
    designation: 'Product Designer',
    company: 'Studio Noor',
    location: 'Dhaka',
    avatarBg: 'bg-[#e4e9fb]',
    avatarText: 'text-[#33409b]',
    bio: 'Product designer focusing on user research, responsive UI design systems, and mobile accessibility for fintech and edtech products.',
    skills: ['Figma', 'UI/UX', 'Wireframing', 'Prototyping', 'Design Systems'],
    linkedin: 'https://linkedin.com/in/example',
    status: 'Verified',
    joinedDate: 'Nov 2023'
  }
];

export const initialPendingRegistrations = [
  {
    id: 'pending-1',
    name: 'Tanvir Hasan',
    initials: 'TH',
    batch: '16th batch',
    dept: 'EEE',
    email: 'tanvir.hasan16@gmail.com',
    workplace: 'Network Associate · NetLink Solutions',
    date: 'Today, 2:15 PM',
    studentId: '160201020',
    avatarBg: 'bg-[#ece7fa]',
    avatarText: 'text-[#5b3fa8]'
  },
  {
    id: 'pending-2',
    name: 'Sadia Rahman',
    initials: 'SR',
    batch: '14th batch',
    dept: 'CSE',
    email: 'sadia.rah14@gmail.com',
    workplace: 'QA Engineer · Pixel Labs',
    date: 'Yesterday, 8:40 PM',
    studentId: '140101045',
    avatarBg: 'bg-[#e1f2fc]',
    avatarText: 'text-[#17608c]'
  },
  {
    id: 'pending-3',
    name: 'Mahmudul Karim',
    initials: 'MK',
    batch: '10th batch',
    dept: 'CSE',
    email: 'mahmud.karim10@gmail.com',
    workplace: 'Data Analyst · Insight Works',
    date: '2 days ago',
    studentId: '100101012',
    avatarBg: 'bg-[#ece7fa]',
    avatarText: 'text-[#5b3fa8]'
  }
];

export const initialEvents = [
  {
    id: 'evt-1',
    title: 'Career Talk: Software Industry',
    dateMonth: 'NOV',
    dateDay: '14',
    time: '4:00 PM',
    venue: 'Campus Auditorium',
    category: 'Seminar',
    categoryColor: 'bg-[#ece7fa] text-[#5b3fa8]',
    attendees: 86,
    isRsvp: true,
    description: 'An interactive seminar with alumni senior software engineers covering market trends, technical interview cracking strategies, and campus-to-corporate transitions.'
  },
  {
    id: 'evt-2',
    title: 'Mentorship Orientation',
    dateMonth: 'NOV',
    dateDay: '28',
    time: '7:30 PM',
    venue: 'Online · Google Meet',
    category: 'Mentorship',
    categoryColor: 'bg-[#e1f2fc] text-[#17608c]',
    attendees: 54,
    isRsvp: true,
    description: 'Kick-off session for the Fall 2026 Alumni-Student Mentorship Cohort. Matching undergraduates with industry professionals for 3-month focused career guidance.'
  },
  {
    id: 'evt-3',
    title: 'Annual Alumni Reunion 2026',
    dateMonth: 'DEC',
    dateDay: '19',
    time: '10:00 AM',
    venue: 'BAUST Campus · Saidpur',
    category: 'Reunion',
    categoryColor: 'bg-[#e4e9fb] text-[#33409b]',
    attendees: 212,
    isRsvp: false,
    description: 'The premier annual gathering of all BAUST alumni batches. Experience memorable nostalgic memories, meet former faculty members, gala lunch, and cultural night.'
  }
];

export const initialForumThreads = [
  {
    id: 'thm-1',
    title: 'Preparing for software engineering interviews in Dhaka',
    category: 'Career',
    categoryColor: 'bg-[#ece7fa] text-[#5b3fa8]',
    author: 'Rahim Uddin',
    initials: 'RU',
    batch: '12th batch',
    timeAgo: '2h ago',
    repliesCount: 24,
    content: 'Hi everyone! For those preparing for fresh graduate software engineer positions in Dhaka, focus heavily on DSA (arrays, trees, dynamic programming), clean OOP principles, and basic SQL query optimization. What resources are you finding most effective right now?',
    replies: [
      {
        id: 'rep-1-1',
        author: 'Sadia Rahman',
        initials: 'SR',
        batch: '14th batch',
        timeAgo: '1h ago',
        text: 'LeetCode top 75 and NeetCode roadmap helped me tremendously. Don’t skip behavioral questions either!'
      },
      {
        id: 'rep-1-2',
        author: 'Tanvir Hasan',
        initials: 'TH',
        batch: '16th batch',
        timeAgo: '45m ago',
        text: 'Thanks Rahim bhai! Could you also share some tips on system design basics for junior roles?'
      }
    ]
  },
  {
    id: 'thm-2',
    title: 'Scholarships for MSc abroad: share your experience',
    category: 'Higher Studies',
    categoryColor: 'bg-[#e4e9fb] text-[#33409b]',
    author: 'Nusrat Jahan',
    initials: 'NJ',
    batch: '14th batch',
    timeAgo: '5h ago',
    repliesCount: 18,
    content: 'Many 4th-year students have been asking about German universities and Erasmus Mundus scholarship applications. Let’s create a collaborative document detailing application deadlines and professor emailing etiquette.',
    replies: [
      {
        id: 'rep-2-1',
        author: 'Mahmudul Karim',
        initials: 'MK',
        batch: '10th batch',
        timeAgo: '3h ago',
        text: 'Great initiative ma’am. I can provide the guidelines for Swedish Institute and Italian DSU scholarships.'
      }
    ]
  },
  {
    id: 'thm-3',
    title: 'Which stack is best for a final year web project?',
    category: 'Technical',
    categoryColor: 'bg-[#e1f2fc] text-[#17608c]',
    author: 'Tanvir Hasan',
    initials: 'TH',
    batch: '16th batch',
    timeAgo: '1d ago',
    repliesCount: 31,
    content: 'We are designing our 4th-year capstone project. Our options are React + Spring Boot or Next.js + FastAPI. Which stack offers better market demand in Bangladesh right now?',
    replies: [
      {
        id: 'rep-3-1',
        author: 'Rahim Uddin',
        initials: 'RU',
        batch: '12th batch',
        timeAgo: '18h ago',
        text: 'Both are stellar. If you enjoy enterprise software, Spring Boot is in huge demand in banking & telecom. For startups, Next.js + FastAPI gives blazing speed.'
      }
    ]
  },
  {
    id: 'thm-4',
    title: 'Reunion 2026: venue and date suggestions',
    category: 'Campus News',
    categoryColor: 'bg-[#ece7fa] text-[#5b3fa8]',
    author: 'Sadia Rahman',
    initials: 'SR',
    batch: '14th batch',
    timeAgo: '1d ago',
    repliesCount: 42,
    content: 'The Alumni Affairs Office has announced December 19th for the Annual Alumni Reunion at BAUST Campus, Saidpur. Let’s make sure all batch coordinators are looped in.',
    replies: []
  },
  {
    id: 'thm-5',
    title: 'Referral for QA roles at growing startups',
    category: 'Career',
    categoryColor: 'bg-[#ece7fa] text-[#5b3fa8]',
    author: 'Mahmudul Karim',
    initials: 'MK',
    batch: '10th batch',
    timeAgo: '2d ago',
    repliesCount: 9,
    content: 'Our partner companies in Dhaka are hiring 2 Junior QA Automation engineers and 1 Data Analyst trainee. BAUST fresh graduates with strong fundamentals can DM me for direct referrals.',
    replies: []
  }
];

export const initialJobs = [
  {
    id: 'job-1',
    title: 'Junior Software Engineer',
    company: 'Cloud Systems Ltd.',
    companyInitial: 'C',
    companyBg: 'bg-[#ece7fa]',
    companyText: 'text-[#5b3fa8]',
    type: 'Full time',
    location: 'Dhaka',
    sharedBy: 'Shared by Rahim Uddin · 12th batch',
    saved: false,
    description: 'Looking for a passionate junior software engineer with proficiency in JavaScript/TypeScript, React, and REST APIs. Opportunity to work with high-throughput cloud services.',
    salary: 'BDT 45,000 - 65,000 / month',
    deadline: 'Nov 30, 2026'
  },
  {
    id: 'job-2',
    title: 'QA Engineer Intern',
    company: 'Pixel Labs',
    companyInitial: 'P',
    companyBg: 'bg-[#e1f2fc]',
    companyText: 'text-[#17608c]',
    type: 'Internship',
    location: 'Remote',
    sharedBy: 'Shared by Sadia Rahman · 14th batch',
    saved: true,
    description: '6-month paid internship with opportunity for full-time conversion. You will learn test automation pipelines, writing test specs in Cypress, and continuous integration.',
    salary: 'BDT 20,000 / month',
    deadline: 'Nov 20, 2026'
  },
  {
    id: 'job-3',
    title: 'Network Associate',
    company: 'NetLink Solutions',
    companyInitial: 'N',
    companyBg: 'bg-[#e4e9fb]',
    companyText: 'text-[#33409b]',
    type: 'Full time',
    location: 'Saidpur',
    sharedBy: 'Shared by Tanvir Hasan · 16th batch',
    saved: false,
    description: 'Onsite network engineer position at Saidpur. Responsible for router configurations, fiber optic splicing oversight, and campus LAN maintenance.',
    salary: 'BDT 35,000 - 45,000 / month',
    deadline: 'Dec 05, 2026'
  },
  {
    id: 'job-4',
    title: 'Data Analyst Trainee',
    company: 'Insight Works',
    companyInitial: 'I',
    companyBg: 'bg-[#ece7fa]',
    companyText: 'text-[#5b3fa8]',
    type: 'Internship',
    location: 'Dhaka',
    sharedBy: 'Shared by Mahmudul Karim · 10th batch',
    saved: false,
    description: 'Work with real-world financial and supply chain datasets. Strong SQL and Python skills required; prior visualization experience in Power BI or Tableau is a plus.',
    salary: 'BDT 22,000 / month',
    deadline: 'Nov 25, 2026'
  },
  {
    id: 'job-5',
    title: 'UI/UX Designer',
    company: 'Studio Noor',
    companyInitial: 'S',
    companyBg: 'bg-[#e1f2fc]',
    companyText: 'text-[#17608c]',
    type: 'Full time',
    location: 'Remote',
    sharedBy: 'Shared by Farhana Akter · 12th batch',
    saved: false,
    description: 'Join a dynamic design studio creating high-impact web and mobile products. You will build design systems, conduct usability tests, and collaborate with frontend developers.',
    salary: 'BDT 50,000 - 75,000 / month',
    deadline: 'Dec 10, 2026'
  },
  {
    id: 'job-6',
    title: 'Research Assistant',
    company: 'BAUST, Saidpur',
    companyInitial: 'B',
    companyBg: 'bg-[#ece7fa]',
    companyText: 'text-[#5b3fa8]',
    type: 'Part time',
    location: 'Saidpur',
    sharedBy: 'Shared by Nusrat Jahan · 14th batch',
    saved: false,
    description: 'Part-time research position for BAUST graduate students in Natural Language Processing and Bengali LLM fine-tuning. Includes tuition stipend and conference submission support.',
    salary: 'BDT 18,000 / month',
    deadline: 'Nov 15, 2026'
  }
];

export const batchEngagementStats = [
  { batch: '6th', count: 80, height: 80 },
  { batch: '8th', count: 110, height: 110 },
  { batch: '10th', count: 130, height: 130 },
  { batch: '12th', count: 150, height: 150 },
  { batch: '14th', count: 170, height: 170, highlight: true },
  { batch: '16th', count: 95, height: 95 },
];
