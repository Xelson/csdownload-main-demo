import { createContext, useContext } from 'react';
import ReactModal from 'react-modal';
import { classNames } from '~/helpers/attributes';
import { useDisclosure, disclosureType } from '~/helpers/hooks';
import { Icon } from './Icon';

interface ModalProps extends React.PropsWithChildren<{}> {
	className?: string;
	disclosure: disclosureType;
}

const modalContext = createContext<disclosureType | null>(null)

export function Modal({children, className, disclosure}: ModalProps) {
	const { isOpen, onClose } = disclosure;

	return (
		<ReactModal 
			isOpen={isOpen}
			onRequestClose={onClose}
			className={classNames("Content", className)} 
			closeTimeoutMS={100}
			
			portalClassName="ModalPortal"
			bodyOpenClassName="ModalOpened"
			shouldCloseOnOverlayClick={true}
			ariaHideApp={false}
			shouldCloseOnEsc={true}
		>
			<modalContext.Provider value={disclosure}>
				{children}
			</modalContext.Provider>
		</ReactModal>
	);
}

export function ModalCloseButton() {
	const disclosure = useContext(modalContext);
	if(!disclosure) return null;

	return (
		<div className="Button__Close" onClick={disclosure.onClose}>
			<Icon icon="close-fill" size="24px" />
		</div>
	);
}