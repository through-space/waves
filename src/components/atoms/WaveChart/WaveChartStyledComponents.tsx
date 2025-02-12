import React, { FC } from "react";

export const WaveChartWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return <div className="h-full">{children}</div>;
};
