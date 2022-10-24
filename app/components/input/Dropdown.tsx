import React, { createContext, forwardRef } from "react";
import { classNames } from "~/helpers/attributes";

interface SelectDisclosure {
	isOpen: boolean,
	onOpen: () => void,
	onClose: () => void,
	onToggle: () => void
}

const SelectContext = createContext<SelectDisclosure | null>(null);

export interface DropdownProps extends React.ComponentPropsWithoutRef<'div'> {
}

export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
	const { className } = props;
	return (
		<div {...props} className={classNames('Dropdown', className)} ></div>
	);
});

interface DropdownContentProps {
	isOpen: boolean;
	isLazy?: boolean;
}

export function DropdownContent({children, isOpen, isLazy} : React.PropsWithChildren<DropdownContentProps>) {
	if(isLazy) return isOpen ? <div className="Content">{children}</div>: null;
	return <div className="Content" data-visible={isOpen}>{children}</div>;
}

export const DropdownItem = forwardRef<HTMLDivElement, DropdownProps>((props, ref) => {
	const { className } = props;
	return (
		<div {...props} className={classNames('Item', className)} ></div>
	);
});