import { Button, Container } from '../ui';
import { HeroBadge } from './HeroBadge';
import { HeroPhoto } from './HeroPhoto';
import { useLanguage } from '../../i18n/LanguageContext';
import { useTheme } from '../../theme/ThemeContext';
import styles from './Hero.module.scss';

export function Hero() {
  const { t } = useLanguage();
  const { photoShape } = useTheme();

  return (
    <div id="top" className={styles.hero}>
      <Container>
        <div className={styles.grid}>
          <div>
            <HeroBadge label={t.badge} />
            <h1 className={styles.name}>
              {t.name1}
              <br />
              {t.name2}
            </h1>
            <div className={styles.role}>{t.role}</div>
            <p className={styles.text}>{t.heroText}</p>
            <div className={styles.actions}>
              <Button as="a" href="#contact" variant="filled">
                {t.ctaContact}
              </Button>
              <Button as="a" href="#projects" variant="outline">
                {t.ctaProjects}
              </Button>
              <Button as="a" href="/Bohdan_Hnidenko_Frontend.pdf" download variant="outline">
                {t.ctaResume}
              </Button>
            </div>
          </div>
          <HeroPhoto
            shape={photoShape}
            photoLabel={t.photoLabel}
            photoSrc="/1.PNG"
            yearsValue="3+"
            yearsLabel={t.yearsLabel}
          />
        </div>
      </Container>
    </div>
  );
}
