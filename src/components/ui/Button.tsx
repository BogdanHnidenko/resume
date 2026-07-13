import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import styles from './Button.module.scss';

type Variant = 'filled' | 'outline' | 'accent';

interface CommonProps {
  variant?: Variant;
  size?: 'md' | 'sm';
  children: ReactNode;
  className?: string;
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: 'button' };

type ButtonAsAnchor = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: 'a'; href: string };

export type ButtonProps = ButtonAsButton | ButtonAsAnchor;

export function Button({
  variant = 'outline',
  size = 'md',
  children,
  className = '',
  ...rest
}: ButtonProps) {
  const classes = `${styles.btn} ${styles[variant]} ${styles[size]} ${className}`;

  if (rest.as === 'a') {
    const { as: _as, ...anchorProps } = rest;
    return (
      <a className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { as: _as, ...buttonProps } = rest as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
