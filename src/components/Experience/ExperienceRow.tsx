import type { ExperienceItem } from '../../i18n/types';
import styles from './ExperienceRow.module.scss';

export function ExperienceRow({ period, role, company, description }: ExperienceItem) {
  return (
    <div className={styles.row}>
      <div className={styles.period}>{period}</div>
      <div>
        <div className={styles.titleRow}>
          <h3 className={styles.role}>{role}</h3>
          <span className={styles.company}>{company}</span>
        </div>
        <p className={styles.description}>{description}</p>
      </div>
    </div>
  );
}
