import { createContext, PropsWithChildren, useContext, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { classNames } from "~/helpers/attributes";
import { useDisclosure } from "~/helpers/hooks";
import { Resource } from "~/models/Resource";
import { DraggbleContainer } from "../Draggable";
import { Breadcrumb, BreadcrumbItem } from "../navigation/Breadcrumb";
import { Tag } from "../Tag";

const ResourceContext = createContext<Resource | null>(null);

export function ResourceProvider<T extends Resource = Resource>({children, resource}: PropsWithChildren<{resource : T}>) {
	return (
		<ResourceContext.Provider value={resource}>
			{children}
		</ResourceContext.Provider>
	);
}

export function useResource<T extends Resource = Resource>() {
	return useContext(ResourceContext) as T;
}

export function ResourceBreadcrumb() {
	const resource = useResource();

	return (
		<Breadcrumb>
			<BreadcrumbItem>{resource.type}</BreadcrumbItem>
			<BreadcrumbItem>{resource.category}</BreadcrumbItem>
			<BreadcrumbItem data-active>{resource.title}</BreadcrumbItem>
		</Breadcrumb>
	)
}

export function ResourceMeta({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="ResourceMeta">
			{children}
		</div>
	);
}

export function ResourceMetaTitle() {
	const { title } = useResource();
	return <h1>{title}</h1>;
}

export function ResourceMetaStats({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="Stats">
			{children}
		</div>
	);
}

export function ResourceMetaStatsItem({children}: React.PropsWithChildren<{}>) {
	return (
		<h2 className="Item">{children}</h2>
	);
}

export function ResourceMetaDescription() {
	const { description_short } = useResource();
	return <div className="Description">{description_short}</div>;
}

export function ResourceMetaTags() {
	const { tags } = useResource();
	
	return (
		<DraggbleContainer className="Tags">
			{tags.map(tag => (
				<Tag key={tag}>{tag}</Tag>
			))}
		</DraggbleContainer>
	);
}

export function ResourceDescription() {
	const { description_full } = useResource();
	const { isOpen, onToggle, onOpen } = useDisclosure();
	const { t } = useTranslation();
	const [ hideable, setHideable ] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const element = ref.current;
		if(element) {
			setHideable(element.scrollHeight - element.offsetHeight > 5);
		}
	}, [])	

	return (
		<div className="ResourceDescription">
			<span 
				className={classNames('Content', hideable && 'Hideable')} 
				ref={ref} 
				data-opened={isOpen}
				onClick={onOpen}
			>
				{description_full}
			</span>
			{hideable && 
				<a className="Link__showMore" onClick={onToggle}>
					{isOpen ?
						t('resource.card.description.button_showless')
						:
						t('resource.card.description.button_showmore')
					}
				</a>
			}
		</div>
	);
}

export function ResourceSidebar({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="ResourceSidebar">
			{children}
		</div>
	);
}

export function ResourceSidebarGroup({children, title}: React.PropsWithChildren<{title: string}>) {
	return (
		<div className="Group">
			<h6>{title}</h6>
			<div className="Items">{children}</div>
		</div>
	);
}

export function ResourceSidebarItem({children}: React.PropsWithChildren<{}>) {
	return (
		<div className="Item">
			{children}
		</div>
	);
}