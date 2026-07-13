import styles from './HeroBadge.module.scss';

export function HeroBadge({ label }: { label: string }) {
  return (
    <div className={styles.badge}>
      <span className={styles.line} />
      {label}
    </div>
  );
}
