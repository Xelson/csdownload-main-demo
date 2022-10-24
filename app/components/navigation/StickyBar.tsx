import { forwardRef, ComponentPropsWithoutRef, Children, Fragment, PropsWithChildren } from "react";
import { classNames } from "~/helpers/attributes";
import Sticky from 'react-stickynode';

type StickyProps = typeof Sticky.defaultProps;

interface StickyBarProps extends StickyProps {
}

export const StickyBar = forwardRef<HTMLDivElement, StickyBarProps>((props, ref) => {
	const { className } = props;
 	return <Sticky {...props} className={classNames('StickyBar', className)}></Sticky>
});
