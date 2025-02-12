import { FC } from "react";
import { RangeRowInput } from "@components/molecules/RangeRowInput/RangeRowInput";

export const RangeRowInputWrapper: FC<{ children?: React.ReactNode }> = ({
	children,
}) => {
	return (
		<div className="flex flex-row gap-2 items-center justify-end">
			{children}
		</div>
	);
};
