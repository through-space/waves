import React, { ChangeEvent, FC } from "react";
import { IRangeProps } from "@components/atoms/Range/RangeInterfaces";
import { DEFAULT_RANGE_PROPS } from "@components/atoms/Range/RangeConsts";

export const Range: FC<IRangeProps> = (props) => {
	const { min, max, value, onChange, name, label } = {
		...props,
		...DEFAULT_RANGE_PROPS,
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		onChange(Number(e.target.value));
	};

	return (
		<>
			<input
				type="range"
				name={name}
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
			/>
			<label htmlFor={name}>{label}</label>
		</>
	);
};
