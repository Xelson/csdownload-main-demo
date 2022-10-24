import { ContentCard } from "../BaseContentCard";
import React from "react";

import { 
	ResourceBreadcrumb, 
	ResourceDescription 
} from "./ResourceView";

import { 
	ResourceCarouselScreenshots, 
	ResourceComments, 
	ResourceDownloadableMeta, 
	ResourceDownloadBar,
	ResourceInformation
} from "./Components";
import { useTranslation } from "react-i18next";

export function CardResourceDownloadableHeader() {
	return (
		<ContentCard 
			id="Anchor__Downloadable"
			className="ContentCard__ResourceHeader Background__Edition"
		>
			<ResourceBreadcrumb />
			<ResourceDownloadableMeta />
			<ResourceDownloadBar />
			<ResourceCarouselScreenshots />
		</ContentCard>
	);
}

export function CardResourceDescription() {
	const { t } = useTranslation();

	return (
		<ContentCard id="Anchor__Description">
			<h1>{t('resource.card.description.title')}</h1>
			<ResourceDescription />
		</ContentCard>
	);
}

export function CardResourceInformation({children}: React.PropsWithChildren<{}>) {
	const { t } = useTranslation();

	return (
		<ContentCard 
			id="Anchor__Information"
			className="ContentCard__ResourceInformation"
		>
			<h1>{t('resource.card.information.title')}</h1>
			<div className="Items">
				{children ? children : <ResourceInformation />}
			</div>
		</ContentCard>
	);
}

export function CardResourceDiscover({children}: React.PropsWithChildren<{}>) {
	const { t } = useTranslation();

	return (
		<ContentCard 
			id="Anchor__Discover"
			className="ContentCard__ResourceDiscover"
		>
			<h1>{t('resource.card.discover.title')}</h1>
			<div className="Items">
				{children}
			</div>
		</ContentCard>
	);
}

export function CardResourceComments() {
	const { t } = useTranslation();

	return (
		<ContentCard 
			id="Anchor__Comments"
			className="ContentCard__ResourceComments"
		>
			<h1>{t('resource.card.comments.title')}</h1>
			<div className="Content">
				<ResourceComments />
			</div>
		</ContentCard>
	);
}