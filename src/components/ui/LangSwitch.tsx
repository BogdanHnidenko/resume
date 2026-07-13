import { useLanguage } from '../../i18n/LanguageContext';
import type { Lang } from '../../i18n/types';
import styles from './LangSwitch.module.scss';

const OPTIONS: { code: Lang; label: string }[] = [
  { code: 'ua', label: 'UA' },
  { code: 'en', label: 'EN' },
];

export function LangSwitch() {
  const { lang, setLang } = useLanguage();

  return (
    <div className={styles.switcher}>
      {OPTIONS.map((opt) => (
        <button
          key={opt.code}
          type="button"
          onClick={() => setLang(opt.code)}
          className={`${styles.option} ${lang === opt.code ? styles.active : ''}`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
