import React from "react";
import { classNames } from "~/helpers/attributes";
import { useDisclosure } from "~/helpers/hooks";
import { Icon } from "../Icon";
import { Button } from "./Button";
import { Dropdown, DropdownContent, DropdownItem as SelectItem } from "./Dropdown";

export interface SelectProps extends React.PropsWithChildren<{}> {
	className?: string,
	buttonTitle: JSX.Element | string
}

export function Select({children, buttonTitle, className}: SelectProps) {
	const { isOpen, onToggle, onClose } = useDisclosure();

	return (
		<Dropdown className={classNames("Dropdown__Select", className)} onBlur={onClose}>
			<Button onClick={onToggle} data-active={isOpen}>
				{buttonTitle}
				<Icon icon={isOpen ? "arrow-up-s-line" : "arrow-down-s-line"} size="18px" />
			</Button>
			<DropdownContent isOpen={isOpen}>
				{children}
			</DropdownContent>
		</Dropdown>
	);
}

export { SelectItem };