import { forwardRef, ComponentPropsWithoutRef } from "react";
import { classNames } from "~/helpers/attributes";

interface CardsFlowProps extends ComponentPropsWithoutRef<'div'> {}
export const CardsFlow = forwardRef<HTMLDivElement, CardsFlowProps>((props, ref) => {
	const { className } = props;
	return <div ref={ref} {...props} className={classNames('CardsFlow', className)}></div>;
});