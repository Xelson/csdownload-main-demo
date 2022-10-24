import { useRef, useState } from "react";
import { Icon } from "~/components/Icon";
import { Button } from "~/components/input/Button";
import { Input } from "~/components/input/Input";
import { NavLink } from "~/components/navigation/NavLink";
import { disclosureType, useDisclosure } from "~/helpers/hooks";
import { Dropdown, DropdownContent, DropdownItem } from "../input/Dropdown";
import { useTranslation } from "react-i18next";
import { useFetcher } from "@remix-run/react";
import { easeOutCubic, shuffle } from "~/helpers/utils";

export function NavigationBar() {
	const { t } = useTranslation();
	const links = ['editions', 'files', 'servers', 'articles'];

	return (
		<nav>	
			{links.map(l => (
				<NavLink key={l} to={l}>
					{t(`header.${l}`)}
				</NavLink>
			))}
		</nav>
	);
}	

export function SearchBar() {
	const { t } = useTranslation();
	const {isOpen, onOpen, onClose, setOpen} = useDisclosure();

	return (
		<Dropdown className='Dropdown__SearchBar'>
			<Input 
				icon={<Icon icon='search-line' size='18px'/>} 
				placeholder={t('header.search.placeholder')}
				onChange={e => setOpen(e.target.value.length > 0)}
				onFocus={e => setOpen(e.target.value.length > 0)}
			/>
			<DropdownContent isOpen={isOpen}>
				<DropdownItem>
					<Icon icon='editions/1' size='16px' monocolor={false} /> content 1
				</DropdownItem>
				<DropdownItem>
					<Icon icon='editions/2' size='16px' monocolor={false} /> content 2
				</DropdownItem>
				<DropdownItem>
					<Icon icon='editions/3' size='16px' monocolor={false} /> content 3
				</DropdownItem>
				<DropdownItem>
					<Icon icon='editions/4' size='16px' monocolor={false} /> content 4
				</DropdownItem>
				<DropdownItem>
					<Icon icon='editions/5' size='16px' monocolor={false} /> content 4
				</DropdownItem>
			</DropdownContent>
		</Dropdown>
	);
}

export function SelectLanguage() {
	const { i18n } = useTranslation();
	const fetcher = useFetcher();
	const {isOpen, onOpen, onClose, onToggle} = useDisclosure();
	const [lang, setLang] = useState(i18n.language);
	const availableLangs = ['en', 'ru', 'pl', 'ua', 'dk'];

	function LangItem({lang}: {lang: string}) {
		const upperLang = lang.toUpperCase();
		return (
			<>
			 	<Icon icon={`flags/${upperLang}`} size='20px' monocolor={false} /> {upperLang}
			</>
		);
	}

	function onLangButtonClick(newLang: string) {
		if(newLang != lang) {
			i18n.changeLanguage(newLang);
			setLang(newLang);
			fetcher.submit(null, {action: `lang/${newLang}`, method: 'post'});
		}
	}	

	return (
		<Dropdown className='Dropdown__flag' onBlur={onClose}>
			<Button className="Button__flag" onClick={onToggle} data-active={isOpen}>
				<LangItem lang={lang} />
			</Button>
			<DropdownContent isOpen={isOpen}>
				{availableLangs.map(l => (
					<DropdownItem key={l} onClick={onLangButtonClick.bind(null, l)}>
						<LangItem lang={l} />
					</DropdownItem>
				))}
			</DropdownContent>
		</Dropdown>
	);
}

export function RouletteButton({disclosure}: {disclosure: disclosureType}) {
	const {isOpen, onToggle} = disclosure;

	return (
		<Button className="Button__roulette" onClick={onToggle} data-active={isOpen}>
			<Icon icon='signal-tower-fill' size='20px' />
		</Button>
	);
}

var boxesCount = 75;
var animDuration = 5000;
var editions = Array.from({length: 75}, (_, i) => i % 15 + 1);
shuffle(editions);

export function Roulette() {
	const { t } = useTranslation();
	const [gameState, setGameState] = useState(0);
	const boxesContainterRef = useRef<HTMLDivElement>(null);
	const targetBoxRef = useRef<HTMLDivElement>(null);

	function rollTheRoulette() {
		const boxesContainter = boxesContainterRef.current;
		const targetBox = targetBoxRef.current;

		if(boxesContainter && targetBox) {
			targetBox.scrollIntoView({inline: 'center'});
			const scrollTo = 
				boxesContainter.scrollLeft 
				- (targetBox.offsetWidth / 2)
				+ targetBox.offsetWidth * (0.1 + Math.random() * 0.9);

			boxesContainter.scrollLeft = 0;

			const startTime = Date.now();

			function performMove() {
				if(boxesContainter && targetBox) {
					const elapsed = Date.now() - startTime;
					boxesContainter.scrollLeft = scrollTo * easeOutCubic(elapsed / animDuration);
	
					if (elapsed < animDuration) requestAnimationFrame(performMove);
					else {
						setGameState(2)
						targetBox.scrollIntoView({inline: 'center', behavior: 'smooth'});
					}
				}
			}
			requestAnimationFrame(performMove);
		}
	}

	function onSpinButtonClick() {
		setGameState(1);
		rollTheRoulette();
	}

	return (
		<div className="Roulette">
			<div className="Items" ref={boxesContainterRef}>
				{editions.map((e, index) => (
					<div className="Item" key={index} ref={index == boxesCount - 4 ? targetBoxRef : undefined}>
						<img draggable="false" src={`/img/temp/editions/${e}.jpg`} />
					</div>
				))}
			</div>
			<Button className="Button__spin" onClick={onSpinButtonClick} data-visible={gameState == 0}>
				{t('header.roulette.button_spin')}
			</Button>
			<div className="AimLine" data-visible={gameState == 1} />
			<div className="Results" data-visible={gameState == 2} >
				<Button className="Button__open">
					{t('header.roulette.button_open')}
					<br></br>
					<span>CS 1.6 Edition</span>
				</Button>	
				<Button className="Button__spin" onClick={onSpinButtonClick}>
					{t('header.roulette.button_spin')}
				</Button>	
			</div>
		</div>
	);
}