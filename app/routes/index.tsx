import { AutoScroll } from "~/components/AutoScroll";
import { CardsFlow } from "~/components/CardsFlow";
import { CardArticlesList } from "~/components/PageArticles/Cards";
import { CardEdition, CardEditionsList } from "~/components/PageEdition/Cards";
import { CardFilesList } from "~/components/PageFiles/Cards";
import { CardAbout } from "~/components/PageMain/CardAbout";
import { CardServersList } from "~/components/PageServers/Cards";

export let handle = {
	i18n: "common",
};

export default function PageMain() {
	return (
		<>
			<CardsFlow className="CardsFlow__rightAlign">
				<CardEdition />
				<CardEditionsList />
				<CardFilesList />
				<CardServersList />
				<CardArticlesList />
				<CardAbout />
			</CardsFlow>
			<AutoScroll />
		</>
	)	
}