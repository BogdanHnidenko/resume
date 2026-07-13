import { RevealLink } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './NavLinks.module.scss';

export function NavLinks() {
  const { t } = useLanguage();

  const links = [
    { href: '#about', label: t.navAbout },
    { href: '#experience', label: t.navExperience },
    { href: '#skills', label: t.navSkills },
    { href: '#projects', label: t.navProjects },
    { href: '#contact', label: t.navContact },
  ];

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <RevealLink key={link.href} href={link.href}>
          {link.label}
        </RevealLink>
      ))}
    </div>
  );
}
