import React, { FC } from "react";

export const WaveBoxWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		// <div className="flex flex-row justify-between border rounded border-fuchsia-800 h-[20vh] w-full p-4">
		<div className="relative border rounded border-fuchsia-800 h-[20vh] w-full">
			{children}
		</div>
	);
};

export const WaveBoxContent: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-row gap-4 justify-between p-4 w-full h-full">
			{children}
		</div>
	);
};

export const WaveBoxFloatingButtonsWrapper: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div className="absolute z-40 bottom-1 right-1 opacity-30 transition-opacity duration-0 hover:opacity-100 hover:transition-opacity hover:duration-600">
			{children}
		</div>
	);
};
export const WaveBoxChartWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		// <div className="flex flex-row justify-between border rounded border-fuchsia-800 h-[20vh] w-full p-4">
		<div className="w-4/5">{children}</div>
	);
};
export const WaveBoxSettingsWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		// <div className="flex flex-row justify-between border rounded border-fuchsia-800 h-[20vh] w-full p-4">
		<div className="h-full grow">{children}</div>
	);
};
