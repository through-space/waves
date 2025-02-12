import { FC } from "react";

export const WaveBoxWrapper: FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	return (
		// <div className="flex flex-row justify-between border rounded border-fuchsia-800 h-[20vh] w-full p-4">
		<div className="flex flex-row gap-4 justify-between border rounded border-fuchsia-800 h-[20vh] w-full p-4">
			{children}
		</div>
	);
};
