import { Link } from "@remix-run/react";

export function LogoBlack() {
	return (
		<div className="Logo">
			<Link to="/">
				<img draggable="false" src="/img/logo/black.png" />
			</Link>
		</div>
	);
}

export function LogoWhite() {
	return (
		<div className="Logo">
			<Link to="/">
				<img draggable="false" src="/img/logo/white.png" />
			</Link>
		</div>
	);
}

export function LogoRainbowBlack() {
	return (
		<div className="Logo">
			<Link to="/">
				<img draggable="false" src="/img/logo/rainbow-black.png" />
			</Link>
		</div>
	);
}

export function LogoRainbowWhite() {
	return (
		<div className="Logo">
			<Link to="/">
				<img draggable="false" src="/img/logo/rainbow-white.png" />
			</Link>
		</div>
	);
}