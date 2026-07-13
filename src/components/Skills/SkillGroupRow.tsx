import { Tag } from '../ui';
import type { SkillGroup } from '../../i18n/types';
import styles from './SkillGroupRow.module.scss';

export function SkillGroupRow({ label, items }: SkillGroup) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>{label}</div>
      <div className={styles.tags}>
        {items.map((skill) => (
          <Tag key={skill} interactive>
            {skill}
          </Tag>
        ))}
      </div>
    </div>
  );
}
