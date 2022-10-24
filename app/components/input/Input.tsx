import { forwardRef } from "react";

interface IconInputProps extends React.ComponentPropsWithoutRef<'input'> {
    icon?: JSX.Element;
}

export const Input = forwardRef<HTMLInputElement, React.PropsWithRef<IconInputProps>>((propsAll, ref) => {
	const { icon, ...props } = propsAll;
	return (
		<div className="Input">
			{icon}
			<input {...props} ref={ref}/>
		</div>
	)
});