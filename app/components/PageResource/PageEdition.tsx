import { 
	CardResourceDownloadableHeader, 
	CardResourceDescription, 
	CardResourceInformation,
	CardResourceDiscover,
	CardResourceComments
} from "./Cards";

import { 
	ResourceInformation, 
	ResourceStickyQuickLinks, 
	ResourceRatePanel 
} from "./Components";

import { Edition } from "~/models/Edition";
import { CardsFlow } from "../CardsFlow";
import { ResourceProvider } from "./ResourceView";
import { EditionPreview } from "../PageEdition/Components";

export const mockEdition: Edition = {
	id: 1,
	created_at: new Date().toISOString(),

	type: "edition",
	title: "CS 1.6 Classic Edition",
	description_short: "This edition of the game has all classic elements of this FPS which we all love so much: original pre-steam player models, all standard weapon skins, maps we love and so much more.",
	description_full: "CS:GO features new maps, characters, and weapons and delivers updated versions of the classic Counter-Strike maps like Dust, Inferno, Nuke, Train, and more. In addition, CS:GO introduces new game modes like Arms Race, Flying Scoutsman and Wingman, and features online matchmaking and Competitive Skill Groups. This is the classic game mode that put Counter-Strike on the map. Two teams of five compete in a best-of-30 match using standard competitive Counter-Strike rules. Players must purchase armor, weapons, defuse or rescue kits, and manage their in-game economy to maximize their chance of success",
	category: "Models",
	tags: ['Original Versions', 'For Weak PCs', 'For Shooting'],
	rating: 4.9,
	views: 48732,
	size: 14365491,
	information: [
		{key: "Language", value: "Russian"},
		{key: "Weapons", value: "Classic"},
		{key: "Player Models", value: "Classic"},
		{key: "Graphic Arts", value: "Standart"},
		{key: "Weapon Sounds", value: "Standart"},
		{key: "Config", value: "Standart"},
		{key: "Bots", value: "zBots 1.5 with addons folder"}
	],
	comments: [
		{
			id: 1,
			created_at: new Date(Date.now() - 60 * 1000).toISOString(),
			username: "Jonh Appleseed",
			avatar_url: "/img/avatars/1.jpg",
			content: "Man. The day I first tried CSGO at a PC cafe, I fell in love. It's why I own a PC from MSI of my own today, and why gaming and FPS titles in general became a major part of my life. Counter-Strike has one of the largest fanbased communities backing it up, which quickly becomes apparent with a quick YouTube or Twitch search.",
			is_admin: false,
			likes: 2,
			reply_for: null
		},
		{
			id: 2,
			created_at: new Date(Date.now() - 60 * 2500).toISOString(),
			username: "Marrianna West",
			avatar_url: "/img/avatars/2.jpg",
			content: "People say valorant will replace cs go, but they are completely wrong. Csgo the the OG of all games on pc. This is easily the most fun first person shooter game on steam. It's free as well. Not only does this game impress me with its gun skins, knives, weapons, gamemodes etc. But it is also amazing how you can get custom maps from your steam workshop! You can change your crosshair, resolution, controls and, well, you can basically do anything. Amazing. This game has impressed me.",
			is_admin: false,
			likes: 4,
			reply_for: null
		},
		{
			id: 3,
			created_at: new Date(Date.now() - 60 * 2600).toISOString(),
			username: "Theia Shannon",
			avatar_url: "/img/avatars/3.jpg",
			content: "I personally recommend everyone to plz plz play this game. It's too awesome, better than any other PC game. The day I played this game, I literally got so much addicted that I cannot Express myself now. This is truly the best game in terms of graphics, gameplay, different modes of playing the game and the weapons and skins which are so insane and epic. Thank you Valve and Hidden Path Entertainment. This is the BEST GAME.👏🏻👏🏻🎊🎉🎉😍😍",
			is_admin: false,
			likes: -10,
			reply_for: null
		},
		{
			id: 4,
			created_at: new Date(Date.now() - 60 * 2700).toISOString(),
			username: "Mailey Serios",
			avatar_url: "/img/avatars/4.jpg",
			content: "I first found out about this game in 2013 and I still play it today. A very balanced game that rewards you for playing a lot. It's great because it doesn't require an absolute beast of a computer to run and it's not very big either. I highly recommend this game.",
			is_admin: false,
			likes: 10,
			reply_for: null
		},
		{
			id: 5,
			created_at: new Date(Date.now() - 60 * 3300).toISOString(),
			username: "Kaison Hickman",
			avatar_url: "/img/avatars/7.jpg",
			content: "I told my wife the truth. I told her I was seeing a bird",
			is_admin: true,
			likes: 41,
			reply_for: 1
		},
		{
			id: 6,
			created_at: new Date(Date.now() - 60 * 3400).toISOString(),
			username: "Marrianna West",
			avatar_url: "/img/avatars/2.jpg",
			content: "what's wrong?",
			is_admin: false,
			likes: 0,
			reply_for: 5
		},
		{
			id: 7,
			created_at: new Date(Date.now() - 60 * 3400).toISOString(),
			username: "Marrianna West",
			avatar_url: "/img/avatars/2.jpg",
			content: "I'm asking myself...",
			is_admin: false,
			likes: 0,
			reply_for: 6
		},
		{
			id: 8,
			created_at: new Date(Date.now() - 60 * 3300).toISOString(),
			username: "Kaison Hickman",
			avatar_url: "/img/avatars/7.jpg",
			content: "WHO IS",
			is_admin: true,
			likes: 32,
			reply_for: 3
		},
		{
			id: 9,
			created_at: new Date(Date.now() - 60 * 3300).toISOString(),
			username: "Kaison Hickman",
			avatar_url: "/img/avatars/7.jpg",
			content: "DOWNWOTED THIS",
			is_admin: true,
			likes: 34,
			reply_for: 3
		},
		{
			id: 10,
			created_at: new Date(Date.now() - 60 * 3300).toISOString(),
			username: "Kaison Hickman",
			avatar_url: "/img/avatars/7.jpg",
			content: "FROM 10 ACCOUNTS",
			is_admin: true,
			likes: 33,
			reply_for: 3
		},
	]
}

export function PageEdition() {
	return (
		<ResourceProvider<Edition> resource={mockEdition}>
			<ResourceStickyQuickLinks bottomBoundary=".CardsFlow" />
			<CardsFlow>
				<CardResourceDownloadableHeader />
				<CardResourceDescription />
				<CardResourceComments />
				<CardResourceInformation>
					<ResourceInformation />
					<ResourceRatePanel />
				</CardResourceInformation>
				<CardResourceDiscover>
					<EditionPreview edition={1} />
					<EditionPreview edition={2} />
					<EditionPreview edition={3} />
					<EditionPreview edition={4} />
					<EditionPreview edition={5} />
					<EditionPreview edition={6} />
					<EditionPreview edition={7} />
					<EditionPreview edition={8} />
				</CardResourceDiscover>
			</CardsFlow>
		</ResourceProvider>
	);
}