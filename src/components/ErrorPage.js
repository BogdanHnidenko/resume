import { useTranslation } from 'react-i18next';


export function ErrorPage() {
	const { t } = useTranslation();

	return (
		<section className="error-page__container" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
			<p style={{ fontSize: "50px" }}>{t("errorPage")}</p>
		</section>
	)
}