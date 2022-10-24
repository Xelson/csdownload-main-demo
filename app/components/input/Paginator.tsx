import { Icon } from "../Icon";

function ButtonPrev() {
	return (
		<div>
			<Icon icon="arrow-left-s-line" size="18px" />
		</div>
	);
}

function ButtonNext() {
	return (
		<div>
			<Icon icon="arrow-right-s-line" size="18px" />
		</div>
	);
}

function ButtonPage({page, isActive}: {page: number, isActive?: boolean}) {
	return (
		<div data-active={isActive ?? false}>{page}</div>
	);
}

export function Paginator() {
	return (
		<div className="Paginator">
			<ButtonPrev />
			<ButtonPage page={1} isActive />
			<ButtonPage page={2} />
			<ButtonPage page={3} />
			<ButtonPage page={4} />
			<ButtonPage page={5} />
			<ButtonPage page={6} />
			<ButtonPage page={7} />
			<ButtonNext />
		</div>
	);
}