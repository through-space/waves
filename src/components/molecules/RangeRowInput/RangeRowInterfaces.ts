import React from "react";

export interface IRangeRowProps {
	value: number;
	onChange: (value: number) => void;
	min: number;
	max: number;
	step: number;
	displayValue?: boolean;
	title?: React.ReactNode;
}
