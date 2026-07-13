import { useEffect } from 'react';
import { Icon } from '../../assets/icons/Icon';
import styles from './Lightbox.module.scss';

interface LightboxProps {
  src: string;
  alt: string;
  onClose: () => void;
}

export function Lightbox({ src, alt, onClose }: LightboxProps) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKeyDown);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <button type="button" className={styles.close} onClick={onClose} aria-label="Close">
        <Icon name="x" size={24} />
      </button>
      <img src={src} alt={alt} className={styles.image} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
