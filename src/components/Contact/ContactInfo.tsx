import { Button } from '../ui';
import { ContactLinkRow } from './ContactLinkRow';
import { CONTACT_LINKS } from './contactLinks';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './ContactInfo.module.scss';

export function ContactInfo({ text }: { text: string }) {
  const { t } = useLanguage();

  return (
    <div>
      <div className={styles.textRow}>
        <p className={styles.text}>{text}</p>
        <Button
          as="a"
          href="/Bohdan_Hnidenko_Frontend.pdf"
          download
          variant="accent"
          className={styles.resumeBtn}
        >
          {t.contactResumeCta}
        </Button>
      </div>
      <div className={styles.list}>
        {CONTACT_LINKS.map((link) => (
          <ContactLinkRow key={link.label} {...link} />
        ))}
      </div>
    </div>
  );
}
