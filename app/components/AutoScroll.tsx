import { useEffect, useState } from "react";
import { Icon } from "./Icon";
import { Button } from "./input/Button";

export function AutoScroll() {
	const [visible, setVisible] = useState(false);

	function onButtonClick() {
		window.scrollTo({top: 0, behavior: 'smooth'});
	}

	useEffect(() => {
		const listener = () => {
			setVisible(window.scrollY > 2000);
		};
		
		window.addEventListener('scroll', listener);
		return () => window.removeEventListener('scroll', listener);
	}, []);

	return (
		<Button className="Button__AutoScroll" onClick={onButtonClick} data-visible={visible}>
			<Icon icon="arrow-up-s-line" size="35px" />
		</Button>
	);
}