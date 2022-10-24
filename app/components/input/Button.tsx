import { forwardRef, ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>((props, ref) => {
	return (
		<button ref={ref} {...props}>

		</button>
	)
});