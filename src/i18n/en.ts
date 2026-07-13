import type { Content } from './types';
import posTerminalImg from '../assets/projects/pos.png';
import kitchenScreenImg from '../assets/projects/kitchenscreen.png';
import aiChatImg from '../assets/projects/kova.png';

export const en: Content = {
  navAbout: 'About',
  navExperience: 'Experience',
  navSkills: 'Skills',
  navProjects: 'Projects',
  navContact: 'Contact',
  navCta: 'Contact me',
  initials: 'B.H.',

  badge: 'AVAILABLE FOR NEW PROJECTS',
  name1: 'Bohdan',
  name2: 'Hnidenko',
  role: 'Frontend Developer leveling up to Fullstack',
  heroText:
    "I build modern, high-performing interfaces with Vue and TypeScript. Recently I've been expanding into the backend — learning Node.js and database work so I can confidently handle everything from UI to API.",
  ctaContact: 'Get in touch →',
  ctaProjects: 'View projects',
  ctaResume: 'Download resume',
  yearsLabel: 'years of experience',
  photoLabel: 'PHOTO / AVATAR',

  aboutHeading: 'About me',
  aboutText:
    "I've been working as a frontend developer for over 3 years — confident with Vue and TypeScript, building interfaces that are a pleasure to use. Recently I've been actively growing into fullstack: learning Node.js, databases, and API design. I value clear communication and code that's easy to maintain.",
  stat1Label: 'products shipped',
  stat2Label: 'technologies',
  stat3Label: 'years with the team',

  expHeading: 'Experience',
  experience: [
    {
      period: 'Mar 2025 — May 2026',
      role: 'Middle Frontend Developer',
      company: 'SkyService POS',
      description:
        'Integrated 3rd-party POS APIs, built kitchen display and order management interfaces with Vue.js and Vuex, implemented Google/Apple OAuth, and delivered new product features to production within a cross-functional team.',
    },
    {
      period: 'Jun 2023 — Mar 2025',
      role: 'Junior Frontend Developer',
      company: 'SkyService POS',
      description:
        'Optimized product rendering performance in a Vue.js application, refactored legacy data-fetching logic to callback-based handling, and migrated the codebase to async/await syntax.',
    },
  ],

  skillsHeading: 'Skills & stack',
  skillGroups: [
    { label: 'Frontend', items: ['Vue', 'TypeScript', 'Vuex/Pinia', 'WebSockets', 'CSS/SCSS'] },
    { label: 'Backend (learning)', items: ['Node.js', 'PostgreSQL', 'REST API'] },
    { label: 'Tools', items: ['Docker', 'Git', 'CI/CD', 'Figma'] },
  ],

  projectsHeading: 'Projects',
  projectImgLabel: 'PROJECT SCREENSHOT',
  projects: [
    {
      title: 'POS Terminal',
      description:
        'Point-of-sale interface for a restaurant SaaS platform: order processing, payments, real-time updates via WebSockets.',
      tags: ['Vue', 'TypeScript', 'Vuex', 'WebSockets'],
      url: '#',
      image: posTerminalImg,
      sourceBadge: 'Screenshot from SkyservicePOS',
    },
    {
      title: 'Kitchen Screen',
      description: 'Kitchen display for real-time order tracking and management, synced with the POS terminal.',
      tags: ['Vue', 'TypeScript', 'WebSockets'],
      url: '#',
      image: kitchenScreenImg,
      sourceBadge: 'Screenshot from SkyservicePOS',
    },
    {
      title: 'AI Chat',
      description:
        'Personal project: an AI-powered chat app with authentication. Vue 3 + TypeScript on the frontend, Node.js + PostgreSQL on the backend.',
      tags: ['Vue', 'TypeScript', 'Node.js', 'PostgreSQL'],
      url: '#',
      image: aiChatImg,
    },
  ],

  contactHeading: 'Contact',
  contactText:
    "Open to new projects and proposals. The fastest way to reach me is by email — I usually reply within a day.",
  contactResumeCta: 'Download resume (PDF)',
  formName: 'NAME',
  formEmail: 'EMAIL',
  formMessage: 'MESSAGE',
  formNamePh: 'How should I call you',
  formMessagePh: 'Tell me about the project or proposal',
  formSubmit: 'Send →',
  formThanksTitle: 'Thanks for reaching out!',
  formThanksText: "I'll reply to your email soon.",

  footerMade: 'Made with attention to detail',
};
