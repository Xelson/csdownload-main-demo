import { useTranslation } from "react-i18next";
import { ContentCard } from "../BaseContentCard";

export function CardAbout() {
	const { t } = useTranslation();

	return (
		<ContentCard className="ContentCard__About">
			<h1>{t('about.title')}</h1>
			<p>{t('about.paragraph1')}</p>
			<p>{t('about.paragraph2')}</p>
		</ContentCard>
	);
}