import { FC } from "react";

export const FaderWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return <div className="flex flex-col">{children}</div>;
};

export const VerticalRangeInputWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return <div className="rotate-270">{children}</div>;
};
