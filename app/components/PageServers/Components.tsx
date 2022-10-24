import { Icon } from "../Icon";
import { Tag } from "../Tag";

import {
	ResourceSidebar,
	ResourceSidebarGroup,
	ResourceSidebarItem
} from "../PageResource/ResourceView";
import { StickyBar } from "../navigation/StickyBar";

const mock: {
	hostname: string,
	mapPreviewUrl: string,
	players: {online: number, max: number},
	address: string,
	map: string,
	mod: string
}[] = [
	{
		hostname: "АКАДЕМИЯ ДУШЕВНЫХ РЕБЯТ",
		mapPreviewUrl: '/img/temp/maps/7.jpg',
		players: {online: 32, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "Сборная союза 18+ (VIP ВСЕМ)",
		mapPreviewUrl: '/img/temp/maps/1.jpg',
		players: {online: 27, max: 32},
		address: "46.174.54.46:27015",
		map: "de_go_go_go",
		mod: "Public"
	},
	{
		hostname: "© Н О В А Я - З Е М Л Я ツ | НАМ 5 ЛЕТ ✔",
		mapPreviewUrl: '/img/temp/maps/2.jpg',
		players: {online: 12, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "[ASIMOV] [ПУШКИ + ЛАЗЕРЫ] нам 9 лет",
		mapPreviewUrl: '/img/temp/maps/3.jpg',
		players: {online: 2, max: 32},
		address: "46.174.54.46:27015",
		map: "deathrun_arctic",
		mod: "Deathrun"
	},
	{
		hostname: "..::RESPAWN.STRIX.RO::.. |CSDM MENU + VIP|",
		mapPreviewUrl: '/img/temp/maps/4.jpg',
		players: {online: 12, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "ZombieGround.ru # Biohazard",
		mapPreviewUrl: '/img/temp/maps/5.jpg',
		players: {online: 32, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "[MAXPLAYERS] ZOMBIE UNLIMITED© #1",
		mapPreviewUrl: '/img/temp/maps/6.jpg',
		players: {online: 28, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "[Pocтoв-нa-Дoну] Classic [Dust2] нам 10 лет",
		mapPreviewUrl: '/img/temp/maps/7.jpg',
		players: {online: 32, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "Сборная союза 18+ (VIP ВСЕМ)",
		mapPreviewUrl: '/img/temp/maps/1.jpg',
		players: {online: 32, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "АКАДЕМИЯ ДУШЕВНЫХ РЕБЯТ",
		mapPreviewUrl: '/img/temp/maps/3.jpg',
		players: {online: 32, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "CSDM.TOP FFA CLASSIC",
		mapPreviewUrl: '/img/temp/maps/2.jpg',
		players: {online: 32, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "[Zombie CSO] Всадники апокалипсиса",
		mapPreviewUrl: '/img/temp/maps/5.jpg',
		players: {online: 12, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "#1 Это Фастзумчик! 18+ © de_dust2",
		mapPreviewUrl: '/img/temp/maps/7.jpg',
		players: {online: 4, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "[ZM] AMXPLAY | Zombie DeathMatch",
		mapPreviewUrl: '/img/temp/maps/1.jpg',
		players: {online: 1, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
	{
		hostname: "ZombieGround.ru # Biohazard",
		mapPreviewUrl: '/img/temp/maps/4.jpg',
		players: {online: 12, max: 32},
		address: "46.174.54.46:27015",
		map: "de_dust2",
		mod: "Public"
	},
]

export function StickyBarServers() {
	return (
		<StickyBar 
			top={100} 
			className="StickySidebar" 
			bottomBoundary="#Anchor__CardServersList"
		>
			<ResourceSidebar>
				<ResourceSidebarGroup title="Categories">
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Deathmatch</a>
						<span>20</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Public</a>
						<span>121</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Jailbreak</a>
						<span>10</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Epic Fun Knife</a>
						<span>1</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Deathrun</a>
						<span>10</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Deathmatch</a>
						<span>20</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Public</a>
						<span>121</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Jailbreak</a>
						<span>10</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Epic Fun Knife</a>
						<span>1</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="global-line" size="18px" />
						<a href="#">Deathrun</a>
						<span>10</span>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
			</ResourceSidebar>
		</StickyBar>
	);
}

export function ListServers() {
	return (
		<div className="List__Servers">
			{mock.map((server, index) => (
				<div key={index} className="Item">
					<div className="Number">{index.toString().padStart(2, "0")}</div>
					<div className="MapImage" style={{backgroundImage: `url(${server.mapPreviewUrl})`}} />
					<div className="Hostname">{server.hostname}</div>
					<div className="Online">{server.players.online}/{server.players.online}</div>
					<div className="Address">
						<Icon icon="flags/RU" monocolor={false} size="20px"/>
						{server.address}
					</div>
					<div className="Map">{server.map}</div>
					<div className="Mod">
						<Tag>{server.mod}</Tag>
					</div>
				</div>
			))}
		</div>
	);
}

