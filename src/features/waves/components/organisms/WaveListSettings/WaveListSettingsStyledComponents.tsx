import React, { FC } from "react";

export const WaveListSettingsWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return <div className={"w-full"}>{children}</div>;
};
