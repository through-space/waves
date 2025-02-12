import React, { FC } from "react";

export const SettingNumberDisplay: FC<{ value: number }> = ({ value }) => {
	return (
		<div className="border-fuchsia-800 border-1 rounded p-1 w-20">
			{value}
		</div>
	);
};
