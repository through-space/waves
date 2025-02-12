import { FC } from "react";

export const FaderWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-col items-center justify-between h-full">
			{children}
		</div>
	);
};

export const VerticalRangeInputWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="[writing-mode:vertical-rl] h-full p-1">{children}</div>
	);
};
