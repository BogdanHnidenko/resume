import { Section, SectionHeading } from '../ui';
import { SkillGroupRow } from './SkillGroupRow';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Skills.module.scss';

export function Skills() {
  const { t } = useLanguage();

  return (
    <Section id="skills">
      <SectionHeading number="03" title={t.skillsHeading} />
      <div className={styles.groups}>
        {t.skillGroups.map((group) => (
          <SkillGroupRow key={group.label} {...group} />
        ))}
      </div>
    </Section>
  );
}
