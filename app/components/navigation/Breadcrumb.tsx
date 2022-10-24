import { forwardRef, ComponentPropsWithoutRef, Children, Fragment, PropsWithChildren } from "react";
import { classNames } from "~/helpers/attributes";

interface BreadcrumbProps extends ComponentPropsWithoutRef<'ol'> {
	separator?: JSX.Element
}

export const Breadcrumb = forwardRef<HTMLOListElement, BreadcrumbProps>((propsAll, ref) => {
	const { children, className, separator, ...props } = propsAll;

	return (
		<ol ref={ref} {...props} className={classNames('Breadcrumb', className)}>
			{Children.map(children, (child, index) => (
				<Fragment key={index}>
					{!!index && <span>{separator ?? '/'}</span>}
					{child}
				</Fragment>
			))}
		</ol>
	);
});

interface BreadcrumbItemProps extends ComponentPropsWithoutRef<'li'> {
	'data-active'?: boolean
}

export const BreadcrumbItem = forwardRef<HTMLLIElement, BreadcrumbItemProps>((propsAll, ref) => {
 	return <li ref={ref} {...propsAll}></li>
});
