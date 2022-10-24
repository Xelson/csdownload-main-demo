import { CardsFlow } from "~/components/CardsFlow";
import { CardEditionsPageHeader, CardEditionsListWithFilters } from "~/components/PageEdition/Cards";

export let handle = {
	i18n: "common",
};

export default function PageEditionsList() {
	return (
		<CardsFlow className="CardsFlow__fullWidth">
			<CardEditionsPageHeader />
			<CardEditionsListWithFilters />
		</CardsFlow>
	);
}