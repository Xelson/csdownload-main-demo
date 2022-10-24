import { Icon } from "../Icon";

import { 
	ResourcePreview,
	ResourcePreviewImages,
	ResourcePreviewMeta,
	ResourcePreviewMetaStats,	
} from "../ResourceList";

import {
	ResourceSidebar,
	ResourceSidebarGroup,
	ResourceSidebarItem
} from "../PageResource/ResourceView";
import { StickyBar } from "../navigation/StickyBar";

export function StickyBarArticles() {
	return (
		<StickyBar 
			top={100} 
			className="StickySidebar" 
			bottomBoundary="#Anchor__CardArticlesList"
		>
			<ResourceSidebar>
				<ResourceSidebarGroup title="Categories">
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">News</a>
						<span>20</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Gameplay</a>
						<span>121</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Settings</a>
						<span>10</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Editions</a>
						<span>1</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Training</a>
						<span>10</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Bugfixes</a>
						<span>20</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Updates</a>
						<span>121</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Servers</a>
						<span>10</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Guides</a>
						<span>1</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="article-line" size="18px" />
						<a href="#">Files</a>
						<span>10</span>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
			</ResourceSidebar>
		</StickyBar>
	);
}

export function ArticlePreview({article}: {article: number}) { 
	return (
		<ResourcePreview className="ResourcePreview__Article">
			<ResourcePreviewImages urls={[`/img/temp/articles/${article}.jpg`]} />
			<ResourcePreviewMeta>
				<h1>Tips from professionals on the game CS 1.6</h1>
				<span>
					Many players in Counter Strike 1.6 do not just want to get exciting 
					entertainment that will help brighten up their leisure time, but strive 
					for self-development and try to constantly develop their own skills in this game
				</span>
				<ResourcePreviewMetaStats>
					<div>
						<Icon icon='star-line' size='24px' /> 4.1
					</div>
					<div>
						<Icon icon='eye-line' size='24px' /> 16k
					</div>
				</ResourcePreviewMetaStats>
			</ResourcePreviewMeta>
		</ResourcePreview>
	);
}