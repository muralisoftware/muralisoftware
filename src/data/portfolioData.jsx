import React from 'react';
import LanguageIcon from '@mui/icons-material/Language';
import CodeIcon from '@mui/icons-material/Code';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SettingsIcon from '@mui/icons-material/Settings';
import StorageIcon from '@mui/icons-material/Storage';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';

export const navItems = [
  { label: 'Home', id: 'home', path: '#home' },
  { label: 'About', id: 'about', path: '#about' },
  { label: 'Skills', id: 'skills', path: '#skills' },
  { label: 'Services', id: 'services', path: '#services' },
  { label: 'Innovations', id: 'personal-projects', path: '#personal-projects' },
  { label: 'Enterprise Solutions', id: 'projects', path: '#projects' },
  { label: 'Contact', id: 'contact', path: '#contact' },
];

export const skillsData = [
  {
    icon: '🐍',
    title: 'Python',
    level: 'Expert Level',
    description: 'Advanced proficiency in Python for backend development, data processing, and automation. Extensive experience with Django, Flask, and building RESTful APIs.',
    tags: ['Django', 'Flask', 'FastAPI', 'Automation', 'Data Processing'],
    color: '#306998'
  },
  {
    icon: '🐘',
    title: 'PHP',
    level: 'Advanced Level',
    description: 'Strong foundation in PHP development with a focus on modern frameworks. Proficient in building scalable web applications and RESTful backend architectures.',
    tags: ['Laravel', 'CodeIgniter', 'MVC', 'OOP', 'REST APIs'],
    color: '#777BB4'
  },
  {
    icon: '🔴',
    title: 'Laravel',
    level: 'Advanced Level',
    description: 'Expertise in building enterprise-grade web applications using Laravel. Skilled in Eloquent ORM, Blade templating, queues, and API development.',
    tags: ['Eloquent ORM', 'Blade', 'Queues', 'Authentication', 'APIs'],
    color: '#FF2D20'
  },
  {
    icon: '⚛️',
    title: 'React.js',
    level: 'Advanced Level',
    description: 'Specialized in creating dynamic and responsive user interfaces with React.js. Proficient in state management (Redux, Context API), hooks, and performance optimization.',
    tags: ['Redux', 'Hooks', 'Context API', 'SPA', 'Material-UI'],
    color: '#00a3a3'
  },
  {
    icon: '▲',
    title: 'Next.js',
    level: 'Intermediate Level',
    description: 'Experienced in building SEO-friendly and server-rendered React applications using Next.js. Familiar with static site generation and full-stack API routes.',
    tags: ['SSR', 'SSG', 'API Routes', 'App Router', 'Vercel'],
    color: '#051d24'
  },
  {
    icon: '☕',
    title: 'Java',
    level: 'Intermediate Level',
    description: 'Core Java proficiency with strong object-oriented programming concepts. Experience in developing Android applications and backend services.',
    tags: ['Core Java', 'OOP', 'Android Dev', 'Multithreading'],
    color: '#b03823'
  },
  {
    icon: '📱',
    title: 'Flutter',
    level: 'Intermediate Level',
    description: 'Developing cross-platform mobile applications for iOS and Android using Flutter & Dart. Clean UI design and seamless state management.',
    tags: ['Dart', 'Cross-Platform', 'State Mgmt', 'Mobile UI'],
    color: '#02569B'
  },
  {
    icon: '🐬',
    title: 'MySQL',
    level: 'Advanced Level',
    description: 'Comprehensive database design, query optimization, and management using MySQL. Experienced in writing complex queries and indexing strategies.',
    tags: ['Query Optimization', 'Indexing', 'Stored Procedures', 'DB Design'],
    color: '#00758f'
  },
  {
    icon: '🐘',
    title: 'PostgreSQL',
    level: 'Advanced Level',
    description: 'Strong expertise in PostgreSQL for enterprise applications and Odoo ERP backends. Skilled in relational data modeling and performance tuning.',
    tags: ['Relational Modeling', 'JSONB', 'Performance Tuning', 'Odoo DB'],
    color: '#336791'
  },
  {
    icon: '⚙️',
    title: 'ODOO',
    level: 'Proficient Level',
    description: 'Experienced in ODOO ERP customization and module development. Capable of building custom business applications and integrating third-party systems.',
    tags: ['Module Dev', 'Customization', 'ERP', 'Integration'],
    color: '#875A7B'
  }
];

export const servicesData = [
  {
    icon: <LanguageIcon sx={{ fontSize: 35 }} />,
    title: 'Web Development',
    description: 'Custom, responsive, and SEO-friendly websites that elevate your online presence.',
    color: '#0F2C59'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 35 }} />,
    title: 'Web Application',
    description: 'Scalable and secure web apps for businesses of all sizes.',
    color: '#777BB4'
  },
  {
    icon: <DesignServicesIcon sx={{ fontSize: 35 }} />,
    title: 'UI/UX Design',
    description: 'Intuitive and visually stunning designs that enhance user experience.',
    color: '#c21d80'
  },
  {
    icon: <SmartphoneIcon sx={{ fontSize: 35 }} />,
    title: 'Mobile App',
    description: 'Native & cross-platform mobile solutions for iOS and Android.',
    color: '#02569B'
  },
  {
    icon: <SettingsIcon sx={{ fontSize: 35 }} />,
    title: 'End-to-End Development',
    description: 'Proficient in both frontend (React.js) and backend (Python, PHP, etc.) technologies.',
    color: '#bfa100'
  },
  {
    icon: <StorageIcon sx={{ fontSize: 35 }} />,
    title: 'Database Management',
    description: 'Skilled in handling SQL (PostgreSQL, MySQL) databases for optimized performance.',
    color: '#336791'
  },
  {
    icon: <CodeIcon sx={{ fontSize: 35 }} />,
    title: 'API Dev & Integration',
    description: 'Building RESTful APIs and integrating third-party services seamlessly.',
    color: '#1d9354'
  },
  {
    icon: <BusinessCenterIcon sx={{ fontSize: 35 }} />,
    title: 'Odoo App Development',
    description: 'Customizing, developing, and integrating Odoo ERP solutions for business automation.',
    color: '#875A7B'
  }
];

export const personalProjectsData = [
  {
    title: 'Resume Builder',
    description: 'A modern, ATS-friendly professional resume & CV builder with real-time typographic live previews and pixel-perfect PDF export capabilities.',
    features: [
      '10+ Distinct Typographic Templates tailored for modern hiring standards.',
      'Instant live preview with real-time responsive rendering.',
      'Pixel-perfect PDF export and 100% client-side privacy.'
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'PDF.js'],
    link: 'https://mavora-resume-builder.vercel.app/'
  },
  {
    title: 'Mavora Bookvexa',
    description: 'An interactive vintage 3D book & PDF reading sanctuary that turns study documents into authentic antique leather-bound books.',
    features: [
      'Upload study PDFs and transform them into 3D realistic flip-books.',
      'Authentic paper roll page-turn animations with ornate vintage typography.',
      'Atmospheric candlelight reading ambiance and immersive reading controls.'
    ],
    tech: ['React.js', 'Vite', 'Canvas API', 'Tailwind CSS'],
    link: 'https://mavorabookvexa.vercel.app/'
  },
  {
    title: 'HomeWallet',
    description: 'A smart family finance and home management tracker designed to easily monitor income, expenses, utility bills, subscriptions, and home maintenance.',
    features: [
      'Comprehensive family expense tracking and multi-category budgeting.',
      'Bill reminders, loan tracking, and home maintenance schedules.',
      'Interactive analytics charts and financial health metrics.'
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS', 'TypeScript'],
    link: 'https://homewalletweb.vercel.app/'
  },
  {
    title: 'Nuvexa Utility',
    description: 'A 100% browser-based utility toolkit designed for developers, containing instant JSON formatters, URL encoders/decoders, JWT decoders, cryptographic hash generators, unit converters, and CSS styling generators.',
    features: [
      'Client-Side execution: All operations run locally inside the user\'s browser ensuring total data privacy.',
      'Core Hashing & Utility Tools: Dynamic JWT decoding, JSON formatting, URL handling, and cryptographic hashing.',
      'Fully Responsive & Instant: Built on a lightweight bundle structure that loads immediately on both mobile and desktop screens.'
    ],
    tech: ['React.js', 'Vite', 'Tailwind CSS'],
    link: 'https://nuvexa-swart.vercel.app/'
  }
];

export const officeProjectsData = [
  {
    title: 'Events - Registration Application',
    description: 'A flexible event registration system supporting three delegate types with secure email OTP authentication for reliable sign-ups and attendee verification.',
    features: [
      'Three user flows: Delegate, Team Leader, Invitee',
      'Email OTP authentication for secure registration',
      'Backend API routes for registrations and team management'
    ],
    tech: ['Next.js', 'SMTP / Email OTP', 'PostgreSQL']
  },
  {
    title: 'DWM - Daily Work Management System',
    description: 'Organization-wide daily work management system with org-chart, roles, and rolesheets. Built using Next.js for unified codebase and fast development.',
    features: [
      'Org chart & role management with role-based permissions',
      'Rolesheet generation, import / export (CSV / XLSX)',
      'Shared Next.js frontend + backend code for rapid development'
    ],
    tech: ['Next.js', 'CSV / XLSX', 'PostgreSQL']
  },
  {
    title: 'Kontact',
    description: 'A customized Odoo ERP solution for managing complete business workflow including Sales, Purchase, and Inventory operations with enhanced automation.',
    features: [
      'Custom quotation templates & automated email triggers',
      'Vendor comparison & dynamic pricing rules',
      'Real-time stock status & barcode scanning'
    ],
    tech: ['Odoo', 'Python', 'XML', 'PostgreSQL']
  },
  {
    title: 'In Process QA Module',
    description: 'A custom ERP platform designed for manufacturing workflows, integrating Production, Inventory, and Procurement modules for improved operational efficiency.',
    features: [
      'Helps ensure product quality is checked at every stage of production, not just at the end.',
      'Helps reduce errors and maintain process consistency.',
      'By following clear quality standards and inspection steps, it helps teams stay organized and focused.',
      'It also speeds up problem detection, so issues can be fixed before they become bigger problems.',
      'This reduces waste, saves time, and helps deliver better products to customers.',
      'This reduces manual error and ensures timely corrective actions.'
    ],
    tech: ['Odoo', 'Python', 'XML', 'PostgreSQL']
  },
  {
    title: 'Central Kitchen Manager App',
    description: 'Point of Sale solution with real-time syncing between React frontend and Odoo backend, providing intuitive interface for retail operations.',
    features: [
      'Streamlining large-scale food preparation.',
      'Improving consistency, and reducing operational costs.',
      'Enables real-time inventory tracking, and efficient dispatch management.',
      'Helps food safety, minimize waste, and ensures on-time deliveries.',
      'Vehicle Maintenance: Track fuel consumption, service history, and upkeep schedules.',
      'Attendance Management: Monitor employee attendance with real-time logs and shift-based tracking.',
      'Leave Management: Simplify leave requests, approvals, and balances.'
    ],
    tech: ['React.js', 'Odoo', 'PostgreSQL', 'Python']
  },
  {
    title: 'Canine Office App',
    description: 'Specialized Odoo application for Kennel Club of India to manage dog registrations, pedigree certificates, and breeding history with traceable lineage.',
    features: [
      'Convenient form submission anytime from anywhere.',
      'Flexible payment system.',
      'Full transparency into form lifecycle.',
      'Users preferring offline methods can still submit forms via courier.',
      'Eliminates manual bottlenecks and accelerates form approvals.',
      'Improves traceability and compliance.'
    ],
    tech: ['Odoo', 'Python', 'XML', 'PostgreSQL']
  },
  {
    title: 'TMS - Task Management Mobile App',
    description: 'Mobile-first application for team task assignments, daily reporting, and progress tracking with real-time notifications for enhanced productivity.',
    features: [
      'Task creation, assignment, and status tracking',
      'Push notifications for deadlines and updates',
      'Optimized for Android with offline sync'
    ],
    tech: ['Java', 'Android Studio']
  },
  {
    title: 'Education Fund Manager System',
    description: 'Odoo-based financial platform for NGOs to manage student sponsorships, donations, and fund disbursement with complete transparency.',
    features: [
      'Centralized Donation Management.',
      'Expenses are directly linked to schools, students, or activities.',
      'Generate student-wise, school-wise, and donor-wise reports.',
      'Enhances donor trust and supports fundraising efforts.',
      'Offers granular transparency across the foundation’s educational support efforts.',
      'All financial data and reports are stored and ready for audits or board reviews.'
    ],
    tech: ['Python', 'XML', 'PostgreSQL']
  },
  {
    title: 'SBAS - Road Safety System',
    description: 'Comprehensive road safety application for Chola MS to monitor, report, and ensure compliance with safety protocols across transportation operations.',
    features: [
      'Road incident tracking and digital logbooks',
      'Compliance dashboard with safety metrics',
      'Real-time alerts for violations and incidents'
    ],
    tech: ['React.js', 'Laravel', 'PHP']
  },
  {
    title: 'Sacola - Blockchain Platform',
    description: 'Internal blockchain-based platform for secure crypto wallet management and NFT trading, empowering users to manage digital assets with ease.',
    features: [
      'Secure crypto wallet integration',
      'NFT minting and marketplace module',
      'Dashboard for asset tracking'
    ],
    tech: ['React.js', 'PHP', 'MySQL']
  },
  {
    title: 'Hotplates - Food Delivery',
    description: 'Location and time-slot-based online food ordering platform designed for optimized restaurant delivery logistics ensuring fresh and timely meals.',
    features: [
      'Location-based restaurant listing',
      'Time-slot-based delivery scheduling',
      'Real-time order tracking'
    ],
    tech: ['Laravel', 'PHP', 'MySQL']
  }
];

export const clientsData = [
  { logo: 'images/magaltech-logo.jpeg', name: 'Magaltech' },
  { logo: 'images/swadha-logo.png', name: 'Swadha Foundation' },
  { logo: 'images/cholsms-logo.jpeg', name: 'Chola MS' },
  { logo: 'images/kci.jpg', name: 'KCI' },
  { logo: 'images/rubix.jpg', name: 'Rubix' },
  { logo: 'images/kontact_consortium_logo.jpeg', name: 'Kontact Consortium' }
];
