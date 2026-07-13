import type { AnchorHTMLAttributes, ReactNode } from 'react';
import styles from './RevealLink.module.scss';

interface RevealLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode;
  className?: string;
}

export function RevealLink({ children, className = '', ...rest }: RevealLinkProps) {
  return (
    <a className={`${styles.link} ${className}`} {...rest}>
      {children}
    </a>
  );
}
