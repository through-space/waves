export interface IRangeProps {
	min?: number;
	max?: number;
	value?: number;
	onChange?: (value: number) => void;
	label?: string;
	name?: string;
}
