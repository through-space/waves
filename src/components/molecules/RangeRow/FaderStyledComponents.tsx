import { FC } from "react";

export const RangeRowWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-row gap-2 items-center justify-end">
			{children}
		</div>
	);
};
