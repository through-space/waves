import React, { FC } from "react";

export const WaveSettingsWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-row gap-1 justify-evenly h-full">
			{children}
		</div>
	);
};
