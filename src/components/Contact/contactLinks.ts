import type { BrandName } from '../../assets/icons/BrandIcon';

export interface ContactLink {
  icon: BrandName;
  label: string;
  value: string;
  href: string;
}

export const CONTACT_LINKS: ContactLink[] = [
  { icon: 'mail', label: 'EMAIL', value: 'bodyaghnidenko@gmail.com', href: 'mailto:bodyaghnidenko@gmail.com' },
  { icon: 'linkedin', label: 'LINKEDIN', value: 'linkedin.com/in/bohdan-hnidenko', href: 'https://www.linkedin.com/in/bohdan-hnidenko-802a0b288' },
  { icon: 'github', label: 'GITHUB', value: 'github.com/BogdanHnidenko', href: 'https://github.com/BogdanHnidenko' },
  { icon: 'telegram', label: 'TELEGRAM', value: '@Bohdan_Hnidenko', href: 'https://t.me/Bohdan_Hnidenko' },
];
