import type { PhotoShape } from '../../theme/ThemeContext';
import styles from './HeroPhoto.module.scss';

interface HeroPhotoProps {
  shape: PhotoShape;
  photoLabel: string;
  photoSrc?: string;
  yearsValue: string;
  yearsLabel: string;
}

export function HeroPhoto({ shape, photoLabel, photoSrc, yearsValue, yearsLabel }: HeroPhotoProps) {
  return (
    <div className={styles.wrap}>
      <div className={`${styles.photo} ${shape === 'circle' ? styles.circle : styles.square}`}>
        {photoSrc ? (
          <img className={styles.image} src={photoSrc} alt={photoLabel} />
        ) : (
          <span className={styles.label}>{photoLabel}</span>
        )}
      </div>
      <div className={styles.badge}>
        <div className={styles.value}>{yearsValue}</div>
        <div className={styles.badgeLabel}>{yearsLabel}</div>
      </div>
    </div>
  );
}
