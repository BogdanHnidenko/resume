import './App.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Home } from './components/home/Home';
import { Works } from './components/work/Works';
import { Skills } from './components/skills/Skills';
import { Contacts } from './components/contacts/Contacts';
import { Provider } from 'react-redux';
import { storeSkills, storeWorks } from './store/store';
import { ThemeProvider } from 'styled-components';
import { themeDark, themeLight } from './theme/theme';
import { DivWrapper, LiWrapper, LabelWrapper, InputWrapper, SliderWrapper, ButtonApp, DivMenu } from './theme/styled/tags';
import { useState, useEffect } from 'react';
import { ErrorPage } from './components/ErrorPage';
import { useTranslation } from 'react-i18next';

function App() {
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		setLoading(false);
	}, []);

	const [darkTheme, setDarkTheme] = useState(true);
	const handlDarkTheme = () => {
		setDarkTheme((prev) => !prev);
	}

	const { t, i18n } = useTranslation();
	const changeLanguage = (lng) => {
		i18n.changeLanguage(lng);
	};

	const isEnglish = i18n.language === 'en';
	const isUkrainian = i18n.language === 'ua';


	const [isOpen, setIsOpen] = useState(false);
	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<>
			<ThemeProvider theme={darkTheme ? themeDark : themeLight}>
				<DivWrapper className="wrapper">
					{loading ? <div class="lds-ring"><div></div><div></div><div></div><div></div></div> :
						<BrowserRouter basename='/home'>
							<header className='header'>
								<div className="header__container">
									<div className='header__button'>
										<LabelWrapper className='' >
											<InputWrapper type="checkbox" onClick={handlDarkTheme} checked={darkTheme} />
											<SliderWrapper />
										</LabelWrapper>
										<div className="header__button-translate">
											<ButtonApp active={isEnglish} onClick={() => changeLanguage('en')} var='en'>ENG</ButtonApp>
											<ButtonApp active={isUkrainian} onClick={() => changeLanguage('ua')}>UA</ButtonApp>
										</div>
									</div>
									<nav className={`header__nav`}>
										<button className={`nav__burger-button ${isOpen ? 'close' : ''}`} onClick={toggleMenu}>
											<DivMenu className="nav__bar" />
											<DivMenu className="nav__bar" />
											<DivMenu className="nav__bar" />
										</button>
										<ul className={`header__list  ${isOpen ? 'open' : ''}`}>
											<LiWrapper className='header__item'>
												<Link className='header__link' to='/'>{t('home')}</Link>
											</LiWrapper>
											<LiWrapper className='header__item'>
												<Link className='header__link' to='/works'>{t('works')}</Link>
											</LiWrapper>
											<LiWrapper className='header__item'>
												<Link className='header__link' to='/skills'>{t('skills')}</Link>
											</LiWrapper>
											<LiWrapper className='header__item'>
												<Link className='header__link' to='/contacts'>{t('contacts')}</Link>
											</LiWrapper>
										</ul>
									</nav>
								</div>
							</header>
							<main className='main'>
								<Provider store={storeWorks}>
									<Routes>
										<Route path='/home' element={<Home />} />
										<Route path='/works' element={<Works />} />
										<Route path='/skills' element={<Provider store={storeSkills}><Skills /></Provider>} />
										<Route path='/contacts' element={<Contacts />} />
										<Route path='/*' element={<ErrorPage />} />
									</Routes>
								</Provider>
							</main>
							<footer className='footer'>
								<div className='footer__container'>
									<h3 className='footer__text'>© Copyright 2023. All right reserved.</h3>
								</div>
							</footer>
						</BrowserRouter>
					}
				</DivWrapper>
			</ThemeProvider>
		</>
	);
}

export default App;
