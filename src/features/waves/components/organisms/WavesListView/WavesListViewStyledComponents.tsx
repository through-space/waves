import React, { FC } from "react";

export const WaveListViewWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="flex flex-col">{children}</div>;
};

export const WaveListWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div>{children}</div>;
};
