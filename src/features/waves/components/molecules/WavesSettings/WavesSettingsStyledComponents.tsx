import React, { FC } from "react";

export const WavesSettingsWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="w-full flex flex-1 flex-row sticky top-0 self-start bg-stone-800 z-50 pt-4 pb-4">
			{children}
		</div>
	);
};

export const WavesSettingsFadersWrapper: FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	return (
		<div className="flex flex-col gap-1 border-fuchsia-700 border-1 p-3">
			{children}
		</div>
	);
};
