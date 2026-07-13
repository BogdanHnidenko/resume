import { useState } from 'react';
import { Icon } from '../../assets/icons/Icon';
import { Tag, Lightbox } from '../ui';
import type { ProjectItem } from '../../i18n/types';
import styles from './ProjectCard.module.scss';

interface ProjectCardProps extends ProjectItem {
  imgLabel: string;
}

export function ProjectCard({ title, description, tags, url, image, sourceBadge, imgLabel }: ProjectCardProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openFullscreen = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsFullscreen(true);
  };

  return (
    <>
      <a href={url} className={styles.card}>
        {image ? (
          <div className={styles.imageWrap} onClick={openFullscreen}>
            <img src={image} alt={title} className={styles.image} />
            {sourceBadge && <span className={styles.sourceBadge}>{sourceBadge}</span>}
          </div>
        ) : (
          <div className={styles.imagePlaceholder}>
            <span className={styles.imgLabel}>{imgLabel}</span>
          </div>
        )}
        <div className={styles.body}>
          <div className={styles.header}>
            <h3 className={styles.title}>{title}</h3>
            <Icon name="arrow-up-right" size={18} className={styles.arrow} />
          </div>
          <p className={styles.description}>{description}</p>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <Tag key={tag} size="sm">
                {tag}
              </Tag>
            ))}
          </div>
        </div>
      </a>
      {isFullscreen && image && (
        <Lightbox src={image} alt={title} onClose={() => setIsFullscreen(false)} />
      )}
    </>
  );
}
