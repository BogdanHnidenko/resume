import type { BrandName } from '../../assets/icons/BrandIcon';
import { BrandIcon } from '../../assets/icons/BrandIcon';
import styles from './ContactLinkRow.module.scss';

interface ContactLinkRowProps {
  icon: BrandName;
  label: string;
  value: string;
  href: string;
}

export function ContactLinkRow({ icon, label, value, href }: ContactLinkRowProps) {
  return (
    <a href={href} className={styles.card}>
      <BrandIcon name={icon} size={40} />
      <span className={styles.text}>
        <span className={styles.label}>{label}</span>
        <span className={styles.value}>{value}</span>
      </span>
    </a>
  );
}
