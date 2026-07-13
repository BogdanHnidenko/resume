import { Section, SectionHeading } from '../ui';
import { StatsStrip } from './StatsStrip';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './About.module.scss';

export function About() {
  const { t } = useLanguage();

  const stats = [
    { value: '3', label: t.stat1Label },
    { value: '8+', label: t.stat2Label },
    { value: '3', label: t.stat3Label },
  ];

  return (
    <Section id="about">
      <SectionHeading number="01" title={t.aboutHeading} />
      <div className={styles.grid}>
        <p className={styles.text}>{t.aboutText}</p>
        <StatsStrip stats={stats} />
      </div>
    </Section>
  );
}
