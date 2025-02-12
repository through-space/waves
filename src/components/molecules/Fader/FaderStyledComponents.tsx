import { FC } from "react";

export const FaderWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-col items-center justify-between h-full flex-1 overflow-x-hidden">
			{children}
		</div>
	);
};

export const VerticalRangeInputWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="[writing-mode:sideways-lr] h-full p-1">{children}</div>
	);
};
