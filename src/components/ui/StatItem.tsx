import styles from './StatItem.module.scss';

interface StatItemProps {
  value: string;
  label: string;
  bordered?: boolean;
}

export function StatItem({ value, label, bordered = false }: StatItemProps) {
  return (
    <div className={`${styles.stat} ${bordered ? styles.bordered : ''}`}>
      <div className={styles.value}>{value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
}
