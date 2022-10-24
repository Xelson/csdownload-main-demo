import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDisclosure } from "~/helpers/hooks";
import { ResourceDownloadable } from "~/models/Resource";
import { CarouselScreenshots } from "../CarouselScreenshots";
import { CommentTree } from "../Comments";
import { Icon } from "../Icon";
import { Button } from "../input/Button";
import { Dropdown, DropdownContent, DropdownItem } from "../input/Dropdown";
import { StickyBar } from "../navigation/StickyBar";
import { WindowDownloading } from "../Windows";

import { 
	ResourceMeta, 
	ResourceMetaDescription, 
	ResourceMetaStats, 
	ResourceMetaStatsItem, 
	ResourceMetaTags, 
	ResourceMetaTitle, 
	ResourceSidebar, 
	ResourceSidebarGroup, 
	ResourceSidebarItem, 
	useResource 
} from "./ResourceView";

export function StatsItemViews() {
	const resource = useResource();
	const views = resource.views;
	const viewsFormatted = views >= 10000 ? ((views / 1000).toFixed(1) + 'k') : views;

	return (
		<ResourceMetaStatsItem>
			<Icon icon='eye-line' size='24px' /> {viewsFormatted}
		</ResourceMetaStatsItem>
	);
}

export function StatsItemRating() {
	const resource = useResource();

	return (
		<ResourceMetaStatsItem>
			<Icon icon='star-line' size='24px' /> {resource.rating}
		</ResourceMetaStatsItem>
	);
}

export function StatsItemFilesize() {
	/* Добавить сокращение текста размера файла в МБ, КБ. Поддержать многоязычность */

	const resource = useResource<ResourceDownloadable>();
	const fileSize = (resource.size / (1024 * 1024)).toFixed(1);

	return (
		<ResourceMetaStatsItem>
			<Icon icon='inbox-archive-line' size='24px' /> {fileSize} MB
		</ResourceMetaStatsItem>
	);
}

export function ResourceDownloadableMeta() {
	return (
		<ResourceMeta>
			<ResourceMetaTitle />
			<ResourceMetaStats>
				<StatsItemFilesize />
				<StatsItemRating />
				<StatsItemViews />
			</ResourceMetaStats>
			<ResourceMetaDescription />
			<ResourceMetaTags />
		</ResourceMeta>
	);
}

interface ResourceDownloadButtonProps {
	onClickDownload?: () => void;
}

function ResourceDownloadButton({onClickDownload}: ResourceDownloadButtonProps) {
	const { t } = useTranslation();

	const downloadTypes = ['link_direct', 'link_torrent', 'link_yandex', 'link_mailru'];
	const [downloadType, setDownloadType] = useState('link_direct');

	function DropdownDownloadMore() {
		const { isOpen, onToggle, onClose } = useDisclosure();
		return (
			<Dropdown className="Dropdown__downloadMore" onBlur={onClose}>
				<Button className="Button__downloadMore" onClick={onToggle} data-active={isOpen} >
					<Icon icon='ellipse-line' size='18px' />
				</Button>
				<DropdownContent isOpen={isOpen}>
					{downloadTypes.map(type => (
						<DropdownItem key={type} onClick={() => setDownloadType(type)}>
							<div>{t(`resource.edition.dropdown_download.${type}`)}</div>
							{type == downloadType && <Icon icon='ellipse-line' size='16px' />}
						</DropdownItem>
					))}
				</DropdownContent>
			</Dropdown>
		);
	}

	return (
		<div className="Group__EditionDownload">
			<Button className="Button__download" onClick={onClickDownload}>
				<span>{t('resource.edition.button_download')}</span>
				<br></br>
				<span className="DownloadType">{t(`resource.edition.dropdown_download.${downloadType}`)}</span>
			</Button>
			<DropdownDownloadMore />	
		</div>
	);
}	

export function ResourceDownloadBar() {
	const { t } = useTranslation();
	const disclosure = useDisclosure();

	function onClickDownload() {
		if(!localStorage.getItem("isIgnoringDownloadWindows"))
			disclosure.onOpen();
	}

	return (
		<div className="ResourceDownloadBar">
			<ResourceDownloadButton onClickDownload={onClickDownload}/>
			<div className="Link__Virustotal">
				<a href="#">{t('resource.edition.link_virustotal')}</a>
			</div>
			<WindowDownloading disclosure={disclosure}/>
		</div>
	);
}

export function ResourceCarouselScreenshots() {
	return (
		<CarouselScreenshots>
			<img src="/img/temp/maps/1.jpg" />
			<img src="/img/temp/maps/2.jpg" />
			<img src="/img/temp/maps/3.jpg" />
			<img src="/img/temp/maps/4.jpg" />
			<img src="/img/temp/maps/5.jpg" />
			<img src="/img/temp/maps/6.jpg" />
			<img src="/img/temp/maps/7.jpg" />
		</CarouselScreenshots>
	);
}

export function ResourceInformation() {
	const resource = useResource();
	const information = resource.information;
	const isEmpty = information.length == 0;

	return (
		<div className="ResourceInformation" hidden={isEmpty}>
			{information.map(i => (
				<div key={i.key}>
					<span>{i.key}</span>
					<span>{i.value}</span>
				</div>
			))}
		</div>
	);
}

export function ResourceRatePanel() {
	const { t } = useTranslation();
	const [rate, setRate] = useState(0);
	const starsCount = 5;

	return (
		<div className="ResourceRatePanel">
			<div className="Stars">
				<div hidden><Icon icon="star-s-fill" /></div>

				{Array.from({length: starsCount}).map((_, index) => {
					const star = index + 1;
					const filled = rate >= star;

					return (
						<div key={star} onClick={() => setRate(star)}>
							<Icon 
								icon={filled ? "star-s-fill" : "star-line"} 
								size="36px"
								data-filled={filled}
							/>
						</div>
					)
				})}
			</div>
			<span>{t('resource.card.information.text_rate')}</span>
		</div>
	)
}

export function ResourceQuickLink({children, anchor, icon}: React.PropsWithChildren<{anchor: string, icon: string}>) {
	function scrollIntoView() {
		const element = document.querySelector(anchor);
		if(element) {
			element.scrollIntoView({block: "center", behavior: "smooth"});
		}
	}

	const [active, setActive] = useState(false);
	
	useEffect(() => {
		const element = document.querySelector(anchor);
		setActive(!!element);
	}, [])

	if(!active) return null;

	return (
		<ResourceSidebarItem>
			<Icon icon={icon} size="18px" />
			<a onClick={scrollIntoView}>{children}</a>
		</ResourceSidebarItem>
	);
}

export function ResourceQuickLinks() {
	const { t } = useTranslation();

	return (
		<ResourceSidebar>
			<ResourceSidebarGroup title="Quick Links">
				<ResourceQuickLink icon="home-3-fill" anchor="#Anchor__Downloadable">
					{t('resource.sidebar.quicklinks.download')}
				</ResourceQuickLink>
				<ResourceQuickLink icon="article-fill" anchor="#Anchor__Description">
					{t('resource.sidebar.quicklinks.description')}
				</ResourceQuickLink>
				<ResourceQuickLink icon="chat-smile-3-fill" anchor="#Anchor__Comments">
					{t('resource.sidebar.quicklinks.comments')}
				</ResourceQuickLink>
				<ResourceQuickLink icon="information-fill" anchor="#Anchor__Information">	
					{t('resource.sidebar.quicklinks.information')}
				</ResourceQuickLink>
				<ResourceQuickLink icon="compass-fill" anchor="#Anchor__Discover">
					{t('resource.sidebar.quicklinks.discover')}
				</ResourceQuickLink>
			</ResourceSidebarGroup>
		</ResourceSidebar>
	);
}

export function ResourceStickyQuickLinks({bottomBoundary}: {bottomBoundary: string}) {
	return (
		<StickyBar 
			top={100} 
			bottomBoundary={bottomBoundary}
			className="StickyQuickLink"
		>
			<ResourceQuickLinks />
		</StickyBar>
	);
}

export function ResourceComments() {
	const resource = useResource();

	return (
		<CommentTree comments={resource.comments} />
	);
}