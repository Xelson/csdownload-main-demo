import { CardsFlow } from "~/components/CardsFlow";
import { CardFilesPageHeader, CardFilesListWithFilters } from "~/components/PageFiles/Cards";

export let handle = {
	i18n: "common",
};

export default function PageFilesList() {
	return (
		<CardsFlow className="CardsFlow__fullWidth">
			<CardFilesPageHeader />
			<CardFilesListWithFilters />
		</CardsFlow>
	);
}