export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  description: string;
}

export interface SkillGroup {
  label: string;
  items: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  tags: string[];
  url: string;
  image?: string;
  sourceBadge?: string;
}

export interface Content {
  navAbout: string;
  navExperience: string;
  navSkills: string;
  navProjects: string;
  navContact: string;
  navCta: string;
  initials: string;

  badge: string;
  name1: string;
  name2: string;
  role: string;
  heroText: string;
  ctaContact: string;
  ctaProjects: string;
  ctaResume: string;
  yearsLabel: string;
  photoLabel: string;

  aboutHeading: string;
  aboutText: string;
  stat1Label: string;
  stat2Label: string;
  stat3Label: string;

  expHeading: string;
  experience: ExperienceItem[];

  skillsHeading: string;
  skillGroups: SkillGroup[];

  projectsHeading: string;
  projectImgLabel: string;
  projects: ProjectItem[];

  contactHeading: string;
  contactText: string;
  contactResumeCta: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  formNamePh: string;
  formMessagePh: string;
  formSubmit: string;
  formThanksTitle: string;
  formThanksText: string;

  footerMade: string;
}

export type Lang = 'ua' | 'en';
