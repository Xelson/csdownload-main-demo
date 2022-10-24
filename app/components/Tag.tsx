import { forwardRef, ComponentPropsWithoutRef } from "react";
import { classNames } from "~/helpers/attributes";

interface TagProps extends ComponentPropsWithoutRef<'div'> {}
export const Tag = forwardRef<HTMLDivElement, TagProps>((props, ref) => {
	const { className } = props;
	return <div ref={ref} {...props} className={classNames('Tag', className)}></div>;
});