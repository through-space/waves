import { FC } from "react";

export const RemoveWaveButtonWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return <div className="flex flex-col items-center">{children}</div>;
};
