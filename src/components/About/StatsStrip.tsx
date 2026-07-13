import { StatItem } from '../ui';
import styles from './StatsStrip.module.scss';

interface StatsStripProps {
  stats: { value: string; label: string }[];
}

export function StatsStrip({ stats }: StatsStripProps) {
  return (
    <div className={styles.strip}>
      {stats.map((stat, i) => (
        <StatItem key={stat.label} value={stat.value} label={stat.label} bordered={i < stats.length - 1} />
      ))}
    </div>
  );
}
