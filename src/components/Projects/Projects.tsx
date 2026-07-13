import { Section, SectionHeading } from '../ui';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../../i18n/LanguageContext';
import styles from './Projects.module.scss';

export function Projects() {
  const { t } = useLanguage();

  return (
    <Section id="projects">
      <SectionHeading number="04" title={t.projectsHeading} />
      <div className={styles.grid}>
        {t.projects.map((project) => (
          <ProjectCard key={project.title} {...project} imgLabel={t.projectImgLabel} />
        ))}
      </div>
    </Section>
  );
}
