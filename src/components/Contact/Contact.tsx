import { Section, SectionHeading } from '../ui';
import { ContactInfo } from './ContactInfo';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Contact.module.scss';

export function Contact() {
  const { t } = useLanguage();

  return (
    <Section id="contact" inverted>
      <SectionHeading number="05" title={t.contactHeading} />
      <div className={styles.grid}>
        <ContactInfo text={t.contactText} />
      </div>
    </Section>
  );
}
