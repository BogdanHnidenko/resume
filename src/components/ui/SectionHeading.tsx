import styles from './SectionHeading.module.scss';

interface SectionHeadingProps {
  number: string;
  title: string;
}

export function SectionHeading({ number, title }: SectionHeadingProps) {
  return (
    <div className={styles.heading}>
      <span className={styles.number}>{number}</span>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}
