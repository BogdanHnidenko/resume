import profilPhoto from "../../img/Home_img.jpg";
import './Home.css';
import { useSpring, animated } from 'react-spring';
import { AHome, SvgHome, H1Home } from "../../theme/styled/tags";
import { useTranslation } from "react-i18next";

export function Home() {
	const { t, i18n } = useTranslation();
	const isUkrainian = i18n.language === 'ua';

	const animationPhoto = useSpring({
		from: { opacity: 0, transform: 'translate(-50px, 0)' },
		to: { opacity: 1, transform: 'translate(0, 0)' },
		config: { duration: 1000 },
	});
	const animationTitle = useSpring({
		from: { opacity: 0, transform: 'translate(-50px, 0)' },
		to: { opacity: 1, transform: 'translate(0, 0)' },
		config: { duration: 1500 },
	});
	const animationText = useSpring({
		from: { opacity: 0, transform: 'translate(-50px, 0)' },
		to: { opacity: 1, transform: 'translate(0, 0)' },
		config: { duration: 1700 },
	});
	const animationLink = useSpring({
		from: { opacity: 0, transform: 'translate(-50px, 0)' },
		to: { opacity: 1, transform: 'translate(0, 0)' },
		config: { duration: 2000 },
	});

	return (
		<section className="home__container">
			<div className="home__info info" >
				<div className="info__animation" >
					<animated.div style={animationTitle}>
						<H1Home ukr={isUkrainian} className="info__title" >
							{t('homeTitle')}
						</H1Home>
					</animated.div>
					<animated.p style={animationText} className="info__text">{t('homeText')}</animated.p>
					<animated.div style={animationLink}>
						<AHome className="info__link" type="email" href="mailto:bodyaghnidenko@gmail.com">
							<SvgHome width="23" height="19" viewBox="0 0 23 19" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M20.4286 1.5H2.14286C1.51167 1.5 1 2.01167 1 2.64286V16.3571C1 16.9883 1.51167 17.5 2.14286 17.5H20.4286C21.0598 17.5 21.5714 16.9883 21.5714 16.3571V2.64286C21.5714 2.01167 21.0598 1.5 20.4286 1.5Z" stroke="white" stroke-width="2" stroke-linecap="round" />
								<path d="M1 3.21436L11.2857 9.50007L21.5714 3.21436" stroke="white" stroke-width="2" stroke-linecap="round" />
							</SvgHome>
							<span>{t('homeEmail')}</span>
						</AHome>
					</animated.div>
				</div>
			</div>
			<div className="home__photo photo">
				<animated.div className="photo__img" style={animationPhoto}>
					<img src={profilPhoto} alt="Profile" />
				</animated.div>
			</div>
		</section>
	)
}