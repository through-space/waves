import React, { FC } from "react";

export const WavesViewWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="flex flex-col gap-4">{children}</div>;
};

export const WaveViewTopPanel: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="flex flex-row gap-4 h-[20vh]">{children}</div>;
};

export const WaveListWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className="flex flex-col gap-4">{children}</div>;
};
