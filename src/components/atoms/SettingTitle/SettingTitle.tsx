import React, { FC } from "react";

export const SettingTitle: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="text-left text-ellipsis w-full overflow-hidden text-nowrap">
			{children}
		</div>
	);
};
