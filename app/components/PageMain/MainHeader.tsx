import { LogoRainbowWhite } from "~/components/Logo";
import { useDisclosure } from "~/helpers/hooks";
import { Dropdown, DropdownContent } from "../input/Dropdown";
import { 
	SelectLanguage, 
	RouletteButton, 
	SearchBar, 
	NavigationBar, 
	Roulette 
} from "./Components";

export function MainHeader() {
	const disclosure = useDisclosure();
	const { isOpen } = disclosure;

	return (
		<Dropdown className="Dropdown__rullete">
			<header className="MainHeader">
				<LogoRainbowWhite />
				
				<div className="Interaction">
					<NavigationBar />
					<SearchBar />
					<SelectLanguage />
					<RouletteButton disclosure={disclosure} />
				</div>
			</header>
			<DropdownContent isOpen={isOpen}>
				<Roulette />
			</DropdownContent>
		</Dropdown>
	)
}