import { useTranslation } from "react-i18next";
import { ContentCard } from "../BaseContentCard";
import { Tag } from "../Tag";
import { EditionPreview, StickyBarEditions } from "./Components";

import { 
	ResourceButtonShowMore, 
	ResourceFilterBar, 
	ResourceFilters, 
	ResourceHeader, 
	ResourceList, 
	ResourcePreviews, 
	ResourceTags,
} from "../ResourceList";
import { FilterCategory, FilterGroup, FilterSelect } from "../DataFilters";

export function CardEditionsList() {
	const { t } = useTranslation();

	return (
		<ContentCard id="Anchor__CardEditionsList">
			<ResourceList>
				<ResourceHeader>
					{t('resource.edition.title_main')}
				</ResourceHeader>
				<ResourceTags>
					<Tag>From CS:GO</Tag>
					<Tag>Original Versions</Tag>
					<Tag>For Weak PCs</Tag>
					<Tag>For Shooting</Tag>
					<Tag>For Deathrun</Tag>
					<Tag>For Surfing</Tag>
					<Tag>Improved Graphics</Tag>
					<Tag>Admin Panel</Tag>
					<Tag>Red And Blue Models</Tag>
				</ResourceTags>
				<ResourcePreviews>
					<EditionPreview edition={1} />
					<EditionPreview edition={2} />
					<EditionPreview edition={3} />
					<EditionPreview edition={4} />
					<EditionPreview edition={5} />
					<EditionPreview edition={6} />
					<EditionPreview edition={7} />
					<EditionPreview edition={13} />
					<EditionPreview edition={9} />
					<EditionPreview edition={10} />
					<EditionPreview edition={11} />
					<EditionPreview edition={12} />
					<EditionPreview edition={13} />
					<EditionPreview edition={14} />
					<EditionPreview edition={15} />
					<EditionPreview edition={5} />
				</ResourcePreviews>
				<ResourceButtonShowMore />
			</ResourceList>
		</ContentCard>
	);
}

export function CardEditionsListWithFilters() {
	return (
		<ContentCard>
			<ResourceList>
				<ResourceFilterBar>
					<ResourceTags>
						<Tag>From CS:GO</Tag>
						<Tag>Original Versions</Tag>
						<Tag>For Weak PCs</Tag>
						<Tag>For Shooting</Tag>
						<Tag>For Deathrun</Tag>
						<Tag>For Surfing</Tag>
						<Tag>Improved Graphics</Tag>
						<Tag>Admin Panel</Tag>
						<Tag>Red And Blue Models</Tag>
					</ResourceTags>	
					<ResourceFilters>	
						<FilterSelect />
						<FilterSelect />
					</ResourceFilters>
				</ResourceFilterBar>
				<ResourcePreviews>
					<EditionPreview edition={1} />
					<EditionPreview edition={2} />
					<EditionPreview edition={3} />
					<EditionPreview edition={4} />
					<EditionPreview edition={5} />
					<EditionPreview edition={6} />
					<EditionPreview edition={7} />
					<EditionPreview edition={13} />
					<EditionPreview edition={9} />
					<EditionPreview edition={10} />
					<EditionPreview edition={11} />
					<EditionPreview edition={12} />
					<EditionPreview edition={13} />
					<EditionPreview edition={14} />
					<EditionPreview edition={15} />
					<EditionPreview edition={5} />
				</ResourcePreviews>
				<ResourceButtonShowMore />
			</ResourceList>
		</ContentCard>
	);
}

export function CardEditionsPageHeader() {
	const { t } = useTranslation();

	return (
		<ContentCard className="ContentCard__PageHeader Background__Edition">
			<h1>{t('resource.edition.title')}</h1>
			<p>{t('resource.edition.description')}</p>
			<div className="Categories">
				<FilterGroup>
					<FilterCategory />
					<FilterCategory />
					<FilterCategory />
					<FilterCategory />
					<FilterCategory />
					<FilterCategory />
				</FilterGroup>
			</div>
		</ContentCard>
	);
}

import { ResourceProvider } from "../PageResource/ResourceView";
import { Edition } from "~/models/Edition";
import { mockEdition } from "../PageResource/PageEdition";

import { 
	ResourceCarouselScreenshots, 
	ResourceDownloadableMeta, 
	ResourceDownloadBar 
} from "../PageResource/Components";

export function CardResourceDownloadableHeader() {
	return (
		<ContentCard 
			id="Anchor__Downloadable"
			className="ContentCard__ResourceHeader Background__Edition"
		>
			<ResourceDownloadableMeta />
			<ResourceDownloadBar />
			<ResourceCarouselScreenshots />
			<StickyBarEditions />
		</ContentCard>
	);
}

export function CardEdition() {
	return (
		<ResourceProvider<Edition> resource={mockEdition}>
			<CardResourceDownloadableHeader />
		</ResourceProvider>
	);
}