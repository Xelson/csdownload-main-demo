import { forwardRef, ComponentPropsWithoutRef } from "react";
import { classNames } from "~/helpers/attributes";

interface ContentCardProps extends ComponentPropsWithoutRef<'div'> {
}

export const ContentCard = forwardRef<HTMLDivElement, ContentCardProps>((props, ref) => {
	const { className } = props;
	return <div ref={ref} {...props} className={classNames('ContentCard', className)}></div>;
});