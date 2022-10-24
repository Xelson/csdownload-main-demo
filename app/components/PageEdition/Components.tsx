import { Icon } from "../Icon";

import { 
	ResourcePreview,
	ResourcePreviewMetaStats,
	ResourcePreviewMeta,
	ResourcePreviewButtonDownload,
	ResourcePreviewImages,
} from "../ResourceList";

import {
	ResourceSidebar,
	ResourceSidebarGroup,
	ResourceSidebarItem
} from "../PageResource/ResourceView";
import { StickyBar } from "../navigation/StickyBar";

export function StickyBarEditions() {
	return (
		<StickyBar 
			top={100} 
			className="StickySidebar" 
			bottomBoundary="#Anchor__CardEditionsList"
		>
			<ResourceSidebar>
				<ResourceSidebarGroup title="Classic">
					<ResourceSidebarItem>
						<Icon icon="editions/1" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Classic</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/1" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Bots</a>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
				<ResourceSidebarGroup title="Professional">
					<ResourceSidebarItem>
						<Icon icon="editions/2" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Russian</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/3" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Spetsnaz</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/4" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Weak PCs</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/5" size="16px" monocolor={false} />
						<a href="#">CS 1.6 All Servers</a>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
				<ResourceSidebarGroup title="Popular">
					<ResourceSidebarItem>
						<Icon icon="editions/2" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Russian</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/3" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Spetsnaz</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/4" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Weak PCs</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/5" size="16px" monocolor={false} />
						<a href="#">CS 1.6 All Servers</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/1" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Classic</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/1" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Bots</a>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
				<ResourceSidebarGroup title="National">
					<ResourceSidebarItem>
						<Icon icon="editions/1" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Russian</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/2" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Belarus</a>
					</ResourceSidebarItem>
					<ResourceSidebarItem>
						<Icon icon="editions/3" size="16px" monocolor={false} />
						<a href="#">CS 1.6 Ukraine</a>
					</ResourceSidebarItem>
				</ResourceSidebarGroup>
			</ResourceSidebar>
		</StickyBar>
	);
}

export function EditionPreview({edition}: {edition: number}) { 
	return (
		<ResourcePreview>
			<ResourcePreviewButtonDownload url="#" />
			<ResourcePreviewImages urls={[`/img/temp/files/${edition}.jpg`, `/img/temp/files/${(edition + 1) % 15}.jpg`]} />
			<ResourcePreviewMeta>
				<span>CS 1.6 Cantexnik</span>
				<ResourcePreviewMetaStats>
					<div>
						<Icon icon='star-line' size='24px' /> 4.9
					</div>
					<div>
						<Icon icon='eye-line' size='24px' /> 106k
					</div>
				</ResourcePreviewMetaStats>
			</ResourcePreviewMeta>
		</ResourcePreview>
	);
}