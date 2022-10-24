import { useTranslation } from "react-i18next";
import { ContentCard } from "../BaseContentCard";
import { FilePreview, StickyBarArticles } from "./Components";
import { Tag } from "../Tag";

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

export function CardFilesList() {
	const { t } = useTranslation();

	return (
		<ContentCard id="Anchor__CardFilesList">
			<ResourceList>
				<ResourceHeader>
					{t('resource.file.title_main')}
				</ResourceHeader>
				<ResourceTags>
					<Tag>With Gloves</Tag>
					<Tag>With Sounds</Tag>
					<Tag>With Stickers</Tag>
					<Tag>No Animation</Tag>
					<Tag>From CS:GO</Tag>
					<Tag>From Games</Tag>
					<Tag>Standart</Tag>
					<Tag>Unusual</Tag>
					<Tag>Golden</Tag>
					<Tag>Skins</Tag>
					<Tag>Guns And Lasers</Tag>
				</ResourceTags>
				<ResourcePreviews>
					<FilePreview file={1} />
					<FilePreview file={2} />
					<FilePreview file={3} />
					<FilePreview file={4} />
					<FilePreview file={5} />
					<FilePreview file={6} />
					<FilePreview file={7} />
					<FilePreview file={13} />
					<FilePreview file={9} />
					<FilePreview file={10} />
					<FilePreview file={11} />
					<FilePreview file={12} />
					<FilePreview file={13} />
					<FilePreview file={14} />
					<FilePreview file={15} />
					<FilePreview file={5} />
				</ResourcePreviews>
				<ResourceButtonShowMore />
				<StickyBarArticles />
			</ResourceList>
		</ContentCard>
	);
}

export function CardFilesListWithFilters() {
	return (
		<ContentCard>
			<ResourceList>
				<ResourceFilterBar>
					<ResourceTags>
						<Tag>With Gloves</Tag>
						<Tag>With Sounds</Tag>
						<Tag>With Stickers</Tag>
						<Tag>No Animation</Tag>
						<Tag>From CS:GO</Tag>
						<Tag>From Games</Tag>
						<Tag>Standart</Tag>
						<Tag>Unusual</Tag>
						<Tag>Golden</Tag>
						<Tag>Skins</Tag>
						<Tag>Guns And Lasers</Tag>
					</ResourceTags>	
					<ResourceFilters>	
						<FilterSelect />
						<FilterSelect />
					</ResourceFilters>
				</ResourceFilterBar>
				<ResourcePreviews>
					<FilePreview file={1} />
					<FilePreview file={2} />
					<FilePreview file={3} />
					<FilePreview file={4} />
					<FilePreview file={5} />
					<FilePreview file={6} />
					<FilePreview file={7} />
					<FilePreview file={13} />
					<FilePreview file={9} />
					<FilePreview file={10} />
					<FilePreview file={11} />
					<FilePreview file={12} />
					<FilePreview file={13} />
					<FilePreview file={14} />
					<FilePreview file={15} />
					<FilePreview file={5} />
				</ResourcePreviews>
				<ResourceButtonShowMore />
			</ResourceList>
		</ContentCard>
	);
}

export function CardFilesPageHeader() {
	const { t } = useTranslation();

	return (
		<ContentCard className="ContentCard__PageHeader Background__Files">
			<h1>{t('resource.file.title')}</h1>
			<p>{t('resource.file.description')}</p>
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