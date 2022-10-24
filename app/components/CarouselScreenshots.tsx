import React, { Children, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useDisclosure } from "~/helpers/hooks";
import { DraggbleContainer } from "./Draggable";
import { Modal, ModalCloseButton } from "./Modal";

export function CarouselScreenshots({children}: React.PropsWithChildren<{}>) {
	const disclosure = useDisclosure();
	const childrenArray = Children.toArray(children);
	const [imageIndex, setImageIndex] = useState(0);

	function onDraggableThumbClick(imageIndex: number) {
		setImageIndex(imageIndex);
		disclosure.onOpen();
	}

	return (
		<>
			<DraggbleContainer className="DraggbleContainter__Screenshots">
				{childrenArray.map((child, index) => (
					<div key={index} onClick={() => onDraggableThumbClick(index)}>
						{child}
					</div>
				))}
			</DraggbleContainer>
			<Modal disclosure={disclosure}>
				<ModalCloseButton />

				<Carousel
					className="Carousel"
					showArrows={false}
					swipeable={true}
					showStatus={false}
					showIndicators={false}
					emulateTouch={true}
					selectedItem={imageIndex}
					thumbWidth={120}
					useKeyboardArrows={true}
					infiniteLoop={true}
					onSwipeStart={() => document.querySelector('.slider-wrapper')?.classList.add("swipping")}
					onSwipeEnd={() => document.querySelector('.slider-wrapper')?.classList.remove("swipping")}
				>
					{children as React.ReactChild[]}
				</Carousel>
			</Modal>
		</>
	);
}