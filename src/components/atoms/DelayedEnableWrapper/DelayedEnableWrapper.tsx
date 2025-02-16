import React, { FC, useRef, useState } from "react";
import { IDelayedEnableWrapperProps } from "@components/atoms/DelayedEnableWrapper/DelayedWrapperInterfaces";

//TODO: finish delay CSS
export const DelayedEnableWrapper: FC<IDelayedEnableWrapperProps> = ({
	children,
	delay,
	opacity,
}) => {
	const [isDisabled, setIsDisabled] = useState<boolean>(false);
	const timeOut = useRef<NodeJS.Timeout>(null);

	const handleMouseEnter = () => {
		console.log("mouse enter");

		if (timeOut.current) {
			clearTimeout(timeOut.current);
			timeOut.current = null;
			return;
		}

		setIsDisabled(true);
		timeOut.current = setTimeout(() => setIsDisabled(false), delay);
	};

	const handleMouseLeave = () => {
		console.log("mouse leave");

		if (timeOut.current || isDisabled) {
			clearTimeout(timeOut.current);
			timeOut.current = null;
			return;
		}
		setIsDisabled(false);
	};
	// });

	const opacityStyle =
		delay && opacity
			? ` opacity-${opacity} transition-opacity duration-0 `
			: "";

	const disabledStyle = isDisabled
		? " hover:opacity-100 hover:duration-" + delay
		: " ";
	// console.log(opacityStyle);

	return (
		<div
			onMouseEnter={delay && handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			className={opacityStyle + disabledStyle}
		>
			<div className={isDisabled ? " pointer-events-none " : ""}>
				{children}
			</div>
		</div>
	);
};
