import { CardsFlow } from "~/components/CardsFlow";
import { CardArticlesPageHeader, CardArticlesListWithFilters } from "~/components/PageArticles/Cards";

export let handle = {
	i18n: "common",
};

export default function PageArticlesList() {
	return (
		<CardsFlow className="CardsFlow__fullWidth">
			<CardArticlesPageHeader />
			<CardArticlesListWithFilters />
		</CardsFlow>
	);
}