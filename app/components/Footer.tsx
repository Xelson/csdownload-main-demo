import { useTranslation } from "react-i18next";
import { LogoWhite } from "./Logo";

const mockLinks: {
	title: string,
	links: string[]
}[] = [
	{
		title: 'Editions',
		links: [
			'New',
			'Professional',
			'Seasonal',
			'National',
			'YouTube',
			'Classic',
			'Popular',
			'Unique'
		]
	},
	{
		title: 'Files',
		links: [
			'Patches',
			'Sprites',
			'Plugins',
			'Themes',
			'Sounds',
			'Models',
			'CFGs',
			'Maps',
			'Bots'
		]
	},
	{
		title: 'Servers',
		links: [
			'Guns & Lasers',
			'Deathmatch',
			'ZombieMod',
			'Epic Fun Knife',
			'Jailbreak',
			'Gun Game',
			'Multimod',
			'FurienMod'
		]
	},
	{
		title: 'Articles',
		links: [
			'News',
			'Gameplay',
			'Settings',
			'Editions',
			'Training',
			'Bugfixes',
			'Updates',
			'Servers',
			'Guides',
			'Files'
		]
	}
]

export function Footer() {
	const { t } = useTranslation();

	return (
		<footer>
			<div className="LogoAndLinks">
				<div className="BlockLogo">
					<LogoWhite />
					<p>{t('footer.logo.text')}</p>
				</div>
				<div className="Links">
					{mockLinks.map(g => (
						<div key={g.title} className="Column">
							<h6>{g.title}</h6>
							{g.links.map(l => (
								<a key={l} href="#">{l}</a>
							))}
						</div>
					))}
				</div>
			</div>
			<div className="Legal">
				<span>{t('footer.legal.part1')}</span>
				<span>{t('footer.legal.part2')}</span>
			</div>
		</footer>
	);
}