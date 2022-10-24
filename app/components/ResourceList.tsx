import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./input/Button";

import { forwardRef, ComponentPropsWithoutRef } from "react";
import { classNames } from "~/helpers/attributes";
import { Icon } from "./Icon";
import { DraggbleContainer } from "./Draggable";
import { Link } from "@remix-run/react";

interface ResourceListProps extends ComponentPropsWithoutRef<'div'> {}
export const ResourceList = forwardRef<HTMLDivElement, ResourceListProps>(({ className, ...props}, ref) => {
	return <div ref={ref} {...props} className={classNames('ResourceList', className)}></div>;
});

interface ResourcePreviewProps extends ComponentPropsWithoutRef<'div'> {}
export const ResourcePreview = forwardRef<HTMLDivElement, ResourcePreviewProps>(({ className, ...props}, ref) => {
	return (
		<Link to="/resource/edition">
			<div ref={ref} {...props} className={classNames('ResourcePreview', className)} />
		</Link>
	)
});

export function ResourceFilterBar({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="FiltersBar">
			{children}
		</div>
	);
}

export function ResourceFilters({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="Filters">
			{children}
		</div>
	);
}

export function ResourcePreviewMeta({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="Meta">
			{children}
		</div>
	);
}

export function ResourcePreviewMetaStats({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="Stats">
			{children}
		</div>
	);
}

export function ResourcePreviewButtonDownload({url}: {url: string}) {
	return (
		<Button className="Button__Download">
			<Icon icon="download-fill" size="18px" />
		</Button>
	);
}

export function ResourcePreviewImages({urls}: {urls: string[]}) {
	const [image, setImage] = useState(urls[0]);
	const isShouldShowSwitcher = urls.length > 1;

	return (
		<div className="Image" style={{backgroundImage: `url(${image})`}} onMouseLeave={() => setImage(urls[0])}>
			{isShouldShowSwitcher && 
				<div className="Switcher">
					{urls.map(u => (
						<div key={u} onMouseEnter={() => setImage(u)} />
					))}
				</div>
			}
		</div>
	);
}

export function ResourceHeader({children}: React.PropsWithChildren<{}>) {
	const { t } = useTranslation();

	return (
		<div className="Header">
			<h1>{children}</h1>
			<a href="#">
				<h2>{t('resource.list.header.show_all')}</h2>
			</a>
		</div>
	);
}

export function ResourceTags({children}: React.PropsWithChildren<{}>) {
	return (
		<DraggbleContainer className="Tags">
			{children}
		</DraggbleContainer>
	);
}

export function ResourcePreviews({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="Previews">
			{children}
		</div>
	);
}

export function ResourceButtonShowMore() {
	const { t } = useTranslation();
	
	return (
		<Button className="Button_showMore">
			{t('resource.list.button_showmore')}
		</Button>
	);
}