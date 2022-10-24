import { useTranslation } from "react-i18next";
import { ContentCard } from "../BaseContentCard";
import { ListServers, StickyBarServers } from "./Components";

import { 
	ResourceButtonShowMore, 
	ResourceFilterBar, 
	ResourcePreviews,
	ResourceFilters, 
	ResourceHeader, 
	ResourceList,
	ResourceTags
} from "../ResourceList";
import { FilterCategory, FilterGroup, FilterSelect } from "../DataFilters";
import { Tag } from "../Tag";
import { SearchBar } from "../PageMain/Components";
import { Paginator } from "../input/Paginator";

export function CardServersList() {
	const { t } = useTranslation();

	return (
		<ContentCard id="Anchor__CardServersList">
			<ResourceList className="ResourceList__Servers">
				<ResourceHeader>
					{t('resource.server.title_main')}
				</ResourceHeader>
				<ListServers />
				<ResourceButtonShowMore />
				<StickyBarServers />
			</ResourceList>
		</ContentCard>
	);
}

export function CardServersListWithFilters() {
	return (
		<ContentCard>
			<ResourceList>
				<ResourceFilterBar>
					<SearchBar />
					<ResourceFilters>	
						<FilterSelect />
						<FilterSelect />
					</ResourceFilters>
				</ResourceFilterBar>
				<ListServers />
				<Paginator />
			</ResourceList>
		</ContentCard>
	);
}

export function CardServersPageHeader() {
	const { t } = useTranslation();

	return (
		<ContentCard className="ContentCard__PageHeader Background__Servers">
			<h1>{t('resource.server.title')}</h1>
			<p>{t('resource.server.description')}</p>
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