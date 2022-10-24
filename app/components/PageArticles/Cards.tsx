import { useTranslation } from "react-i18next";
import { ContentCard } from "../BaseContentCard";
import { Tag } from "../Tag";

import { 
	ResourceButtonShowMore, 
	ResourceFilterBar, 
	ResourceFilters, 
	ResourceHeader, 
	ResourceList, 
	ResourcePreviews, 
	ResourceTags
} from "../ResourceList";
import { ArticlePreview, StickyBarArticles } from "./Components";
import { FilterCategory, FilterGroup, FilterSelect } from "../DataFilters";

export function CardArticlesList() {
	const { t } = useTranslation();

	return (
		<ContentCard id="Anchor__CardArticlesList">
			<ResourceList className="ResourceList__Articles">
				<ResourceHeader>
					{t('resource.article.title_main')}
				</ResourceHeader>
				<ResourceTags>
					<Tag>Installation</Tag>
					<Tag>Modification</Tag>
					<Tag>Learning</Tag>
					<Tag>Tactics</Tag>
					<Tag>Shooting</Tag>
					<Tag>Setting Up</Tag>
					<Tag>Update</Tag>
					<Tag>How To</Tag>
					<Tag>Server</Tag>
					<Tag>Guide</Tag>
					<Tag>Tips</Tag>
					<Tag>Professionals</Tag>
				</ResourceTags>
				<ResourcePreviews>
					<ArticlePreview article={1} />
					<ArticlePreview article={2} />
					<ArticlePreview article={3} />
					<ArticlePreview article={4} />
				</ResourcePreviews>
				<ResourceButtonShowMore />
				<StickyBarArticles />
			</ResourceList>
		</ContentCard>
	);
}

export function CardArticlesListWithFilters() {
	return (
		<ContentCard>
			<ResourceList className="ResourceList__Articles">
				<ResourceFilterBar>
					<ResourceTags>
						<Tag>Installation</Tag>
						<Tag>Modification</Tag>
						<Tag>Learning</Tag>
						<Tag>Tactics</Tag>
						<Tag>Shooting</Tag>
						<Tag>Setting Up</Tag>
						<Tag>Update</Tag>
						<Tag>How To</Tag>
						<Tag>Server</Tag>
						<Tag>Guide</Tag>
						<Tag>Tips</Tag>
						<Tag>Professionals</Tag>
					</ResourceTags>	
					<ResourceFilters>	
						<FilterSelect />
						<FilterSelect />
					</ResourceFilters>
				</ResourceFilterBar>
				<ResourcePreviews>
					<ArticlePreview article={1} />
					<ArticlePreview article={2} />
					<ArticlePreview article={3} />
					<ArticlePreview article={4} />
				</ResourcePreviews>
				<ResourceButtonShowMore />
			</ResourceList>
		</ContentCard>
	);
}

export function CardArticlesPageHeader() {
	const { t } = useTranslation();

	return (
		<ContentCard className="ContentCard__PageHeader Background__Articles">
			<h1>{t('resource.article.title')}</h1>
			<p>{t('resource.article.description')}</p>
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