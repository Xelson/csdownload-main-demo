import { forwardRef, useRef, ComponentPropsWithoutRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { classNames } from "~/helpers/attributes";

interface DraggbleContainerProps extends ComponentPropsWithoutRef<'div'> {}
export const DraggbleContainer = forwardRef<HTMLDivElement, DraggbleContainerProps>((props, fowardedRef) => {
	const ref = useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
	const { events } = useDraggable(ref);
	const { className } = props;

	return (
		<div 
			{...events}
			{...props} 
			ref={ref}
			className={classNames('DraggableContainer', className)}
		/>
	);
});