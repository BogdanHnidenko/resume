import styles from './Tag.module.scss';

interface TagProps {
  children: string;
  size?: 'sm' | 'md';
  interactive?: boolean;
}

export function Tag({ children, size = 'md', interactive = false }: TagProps) {
  const classes = [styles.tag, styles[size], interactive ? styles.interactive : ''].join(' ');
  return <span className={classes}>{children}</span>;
}
