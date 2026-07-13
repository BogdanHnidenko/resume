import { useTheme } from '../../theme/ThemeContext';
import { Icon } from '../../assets/icons/Icon';
import styles from './ThemeToggle.module.scss';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      className={styles.toggle}
    >
      <Icon name={theme === 'dark' ? 'moon' : 'sun'} size={16} />
    </button>
  );
}
