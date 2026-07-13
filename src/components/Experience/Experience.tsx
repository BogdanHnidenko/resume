import { Section, SectionHeading } from '../ui';
import { ExperienceRow } from './ExperienceRow';
import { useLanguage } from '../../i18n/LanguageContext';

export function Experience() {
  const { t } = useLanguage();

  return (
    <Section id="experience">
      <SectionHeading number="02" title={t.expHeading} />
      <div>
        {t.experience.map((job) => (
          <ExperienceRow key={`${job.company}-${job.period}`} {...job} />
        ))}
      </div>
    </Section>
  );
}
