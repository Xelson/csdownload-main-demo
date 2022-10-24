import { useState } from "react";

interface useDisclosureProps {
	defaultIsOpen?: boolean;
}

export type disclosureType = ReturnType<typeof useDisclosure>;

export function useDisclosure(props?: useDisclosureProps) {
	const [isOpen, setIsOpen] = useState(!!props?.defaultIsOpen);

	return {
		isOpen,
		onOpen: () => setIsOpen(true),
		onClose: () => setIsOpen(false),
		onToggle: () => setIsOpen(!isOpen),
		setOpen: setIsOpen
	}
}