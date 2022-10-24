import { matchClientRoutes } from "@remix-run/react/dist/routeMatching";
import React, { createContext, useContext, useState } from "react";
import { useDisclosure } from "~/helpers/hooks";
import { Select, SelectItem } from "./input/Select";

export function FilterSelect() {
	return (
		<Select buttonTitle="Filter">
			<SelectItem>Variant 1</SelectItem>
			<SelectItem>Variant 2</SelectItem>
			<SelectItem>Variant 3</SelectItem>
			<SelectItem>Variant 4</SelectItem>
			<SelectItem>Variant 5</SelectItem>
			<SelectItem>Variant 6</SelectItem>
		</Select>
	);
}

const filterGroupContext = createContext<[string, (v: string) => void]>(['default', v => v]);

export function FilterCategory() {
	return <FilterCircle title="Title" value={Math.random().toString()} count={43} />
}

interface FilterCircleProps {
	title: string;
	value: string;
	count?: number;
}

export function FilterCircle({value, title, count}: FilterCircleProps) {
	const { isOpen, onToggle } = useDisclosure();
	const [option, setOption] = useContext(filterGroupContext);

	return (
		<div className="FilterCircle" onClick={() => setOption(value)}>
			<div className="Preview" data-active={option == value} style={{backgroundImage: `url(/img/temp/editions/1.jpg)`}}></div>
			<div className="BottomPanel">
				<span>{title}</span>
				{count && <span>{count}</span>}
			</div>
		</div>
	);
}

export function FilterGroup({children, initialSelect}: React.PropsWithChildren<{initialSelect?: string}>) {
	const state = useState(initialSelect ?? 'default');
	return (
		<filterGroupContext.Provider value={state}>
			{children}
		</filterGroupContext.Provider>
	)
}