import React, { FC } from "react";

export const WaveSettingsWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-row justify-between h-full w-full gap-1">
			{children}
		</div>
	);
};
