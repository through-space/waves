export interface IFaderProps {
	value: number;
	onChange: (value: number) => void;
	min: number;
	max: number;
	step: number;
	displayValue?: boolean;
	title?: string;
}
