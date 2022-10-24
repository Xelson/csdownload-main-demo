import { Icon } from "../Icon";

import { 
	ResourcePreview,
	ResourcePreviewButtonDownload,
	ResourcePreviewImages,
	ResourcePreviewMeta,
	ResourcePreviewMetaStats
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
			bottomBoundary="#Anchor__CardFilesList"
		>
			<ResourceSidebar>
				<ResourceSidebarGroup title="Categories">
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Maps</a>
						<span>16330</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Bots</a>
						<span>3</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Patches</a>
						<span>23</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Sprites</a>
						<span>232</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Plugins</a>
						<span>3992</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Maps</a>
						<span>16330</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Bots</a>
						<span>3</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Patches</a>
						<span>23</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Sprites</a>
						<span>232</span>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="folder-download-line" size="18px" />
						<a href="#">Plugins</a>
						<span>3992</span>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
			</ResourceSidebar>
		</StickyBar>
	);
}

export function FilePreview({file}: {file: number}) { 
	return (
		<ResourcePreview>
			<ResourcePreviewButtonDownload url="#" />
			<ResourcePreviewImages urls={[`/img/temp/files/${file}.jpg`, `/img/temp/files/${(file + 1) % 15}.jpg`]} />
			<ResourcePreviewMeta>
				<span>File #{file}</span>
				<ResourcePreviewMetaStats>
					<div>
						<Icon icon='star-line' size='24px' /> 4.2
					</div>
					<div>
						<Icon icon='eye-line' size='24px' /> 76k
					</div>
				</ResourcePreviewMetaStats>
			</ResourcePreviewMeta>
		</ResourcePreview>
	);
}