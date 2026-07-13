import { NavLinks } from './NavLinks';
import { Button, Container, LangSwitch, ThemeToggle } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Nav.module.scss';

export function Nav() {
  const { t } = useLanguage();

  return (
    <div className={styles.nav}>
      <Container>
        <div className={styles.row}>
          <a href="#top" className={styles.logo}>
            {t.initials}
          </a>
          <NavLinks />
          <div className={styles.actions}>
            <LangSwitch />
            <ThemeToggle />
            <Button as="a" href="#contact" variant="outline" size="sm" className={styles.ctaBtn}>
              {t.navCta}
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
