import React, { forwardRef, HTMLProps } from "react";
import { ReactSVG, Props } from 'react-svg'

interface IconProps extends Props {
    icon: string;
	size?: string;
	monocolor?: boolean;
}

export const Icon = forwardRef<HTMLOrSVGElement, IconProps>((propsAll, refPassed) => {
	const { icon, size, monocolor, ref, ...props } = propsAll;

	return (
		<ReactSVG 
			afterInjection={(error, svg) => {
				if(svg) {
					if(size) {
						svg.style.height = size;
						svg.style.width = size;
					}
					if(monocolor ?? true) {
						svg.setAttribute('fillWithCurrentColor', '')
					}
				}
			}}
			{...props}
			src={`/icons/${icon}.svg`}
			style={{height: size, width: size}}
			data-icon
		/>
	)
});