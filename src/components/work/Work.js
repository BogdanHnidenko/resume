import { SectionWorks, AWorks } from "../../theme/styled/tags";
import { useTranslation } from 'react-i18next';

export function WorkPost(props) {
	const { t, i18n } = useTranslation();
	const isUkrainian = i18n.language === 'ua';

	return (
		<SectionWorks className="work">
			<div className="work__image">
				<img src={props.photo} alt={props.title} />
			</div>
			<div className="work__info">
				<h2 className="work__title">{isUkrainian ? props.titleUA : props.title}</h2>
				<p className="work__text">{isUkrainian ? props.textUA : props.text}</p>
				<AWorks className="work__link" href={props.link}>{t('worksVisitSite')}</AWorks>
			</div>
		</SectionWorks>
	)
}