import React, { ChangeEvent, FC } from "react";
import { IRangeProps } from "@components/atoms/Range/RangeInterfaces";
import { DEFAULT_RANGE_PROPS } from "@components/atoms/Range/RangeConsts";

export const Range: FC<IRangeProps> = (props) => {
	const { min, max, value, onChange, name, label, step } = {
		...DEFAULT_RANGE_PROPS,
		...props,
	};

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		// debugger;
		onChange(Number(e.target.value));
	};

	return (
		<>
			<label htmlFor={name}>{label}</label>
			<input
				type="range"
				name={name}
				min={min}
				max={max}
				value={value}
				onChange={handleChange}
				step={step}
			/>
		</>
	);
};
