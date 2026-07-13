import type { ReactNode } from 'react';
import styles from './Section.module.scss';

interface SectionProps {
  id?: string;
  children: ReactNode;
  inverted?: boolean;
}

export function Section({ id, children, inverted = false }: SectionProps) {
  return (
    <div id={id} className={`${styles.section} ${inverted ? styles.inverted : ''}`}>
      <div className={styles.inner}>{children}</div>
    </div>
  );
}
