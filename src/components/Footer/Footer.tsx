import { Container } from '../ui';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Footer.module.scss';

export function Footer() {
  const { t } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.row}>
          <span>
            © {year} {t.name1} {t.name2}
          </span>
          <span>{t.footerMade}</span>
        </div>
      </Container>
    </div>
  );
}
