import { CardsFlow } from "~/components/CardsFlow";
import { CardServersPageHeader, CardServersListWithFilters } from "~/components/PageServers/Cards";

export let handle = {
	i18n: "common",
};

export default function PageServersList() {
	return (
		<CardsFlow className="CardsFlow__fullWidth">
			<CardServersPageHeader />
			<CardServersListWithFilters />
		</CardsFlow>
	);
}