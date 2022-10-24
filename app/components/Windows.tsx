import { disclosureType } from "~/helpers/hooks";
import { Icon } from "./Icon";
import { Button } from "./input/Button"


export function WindowDownloading({disclosure}: {disclosure: disclosureType}) {
	const { isOpen, onClose } = disclosure;

	function onClickDontShowAgain() {
		onClose();
		localStorage.setItem('isIgnoringDownloadWindows', 'yes');
	}

	return (
		<div className="Window" data-hidden={!isOpen}>
			<Button className="Button__Close" onClick={onClose}>
				<Icon icon="close-fill" size="24px" />
			</Button>
			<h2>Thank you for downloading</h2>
			<span>
				This edition of the game has all classic elements of this FPS which we all love so much: 
				original pre-steam player models, all standard weapon skins, maps we love and so much more. 
			</span>
			<img src="/img/temp/steam_logo.png" />
			<div className="Footer">
				<Button className="Button__DontShowAgain" onClick={onClickDontShowAgain}>
					Don't Show Again
				</Button>
				<Button className="Button__Close" onClick={onClose}>
					Close
				</Button>
			</div>
		</div>
	);
}