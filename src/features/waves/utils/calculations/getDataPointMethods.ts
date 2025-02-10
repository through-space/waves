import { IWave } from "@features/waves/types/wavesInterfaces";
import { ISamplingProps } from "@features/waves/utils/calculations/calculationsTypes";

// const getSamplingPropsByPeriod = (
// 	{ frequency }: IWave,
// 	periods: number,
// 	numberOfSamples: number,
// ): ISamplingProps => {
// 	const samplingDuration = periods / frequency;
//
// 	return {
// 		duration: samplingDuration,
// 		sampleRate: numberOfSamples / samplingDuration,
// 	};
// };
//
// const getSamplingPropsByTimeRange = (
// 	maxDataPoints: number,
// 	timeSpan: number,
// ): ISamplingProps => {
// 	return {
// 		sampleRate: maxDataPoints / timeSpan,
// 		duration: timeSpan,
// 	};
// };

//TODO : add min max

// type ValidatorFn = (value: any) => string | null;

// ✅ Basic Validators
// const isInRange =
// 	(min: number, max: number): ValidatorFn =>
// 	(value) =>
// 		value >= min && value <= max
// 			? null
// 			: `Value must be between ${min} and ${max}`;
//
// const minLength =
// 	(min: number): ValidatorFn =>
// 	(value) =>
// 		typeof value === "string" && value.length >= min
// 			? null
// 			: `Minimum length is ${min}`;
//
// const isRequired: ValidatorFn = (value) =>
// 	value ? null : "This field is required";
//
// // ✅ Validation Map
// const fieldValidators: Record<string, ValidatorFn[]> = {
// 	age: [isRequired, isInRange(18, 60)],
// 	name: [isRequired, minLength(3)],
// };
//
// // ✅ Function to Run Validations
// const validateField = (field: string, value: any): string[] => {
// 	const validators = fieldValidators[field] || [];
// 	return validators
// 		.map((validate) => validate(value))
// 		.filter((error) => error !== null) as string[];
// };
//
// // ✅ Example Usage
// console.log(validateField("age", 15)); // ["Value must be between 18 and 60"]
// console.log(validateField("name", "Jo")); // ["Minimum length is 3"]
// console.log(validateField("name", "John")); // []

type TSamplingPropsValidatorsFn = (value: any) => string | null;

// TODO: move to common?
const isInRange =
	(min: number, max: number): TSamplingPropsValidatorsFn =>
	(value: number) => {
		if (value < min || value > max) {
			return `Value should be from ${min} to ${max}`;
		}
		return null;
	};

const samplingPropsValidators: Record<string, TSamplingPropsValidatorsFn[]> = {
	sampleRate: [isInRange(0, 10000)],
};

const validateField = (field: string, value: any): string[] => {
	const validators = samplingPropsValidators[field] || [];
	return validators
		.map((validate) => validate(value))
		.filter(Boolean) as string[];
};

const getSamplingPropsByDurationAndSampleRate: TGetSamplingPropsMethod = ({
	sampleRate,
	duration,
	maxDataPoints,
}): ISamplingProps => {
	const errors = [
		...validateField("sampleRate", sampleRate),
		...validateField("duration", duration),
	];

	if (errors.length) {
		throw new Error(errors.join(" "));
	}

	//TODO: check max points reached

	return { sampleRate: sampleRate, duration };
};

export enum EGetSamplingPropsMethod {
	BY_SAMPLING_RATE_AND_DURATION,
}

export interface IGetSamplingPropsPayload {
	sampleRate?: number;
	maxDataPoints?: number;
	duration?: number;
}

export type TGetSamplingPropsMethod = (
	payload: IGetSamplingPropsPayload,
) => ISamplingProps;

export const GetSamplingPropsMethodsMap: Record<
	EGetSamplingPropsMethod,
	TGetSamplingPropsMethod
> = {
	[EGetSamplingPropsMethod.BY_SAMPLING_RATE_AND_DURATION]:
		getSamplingPropsByDurationAndSampleRate,
};

export const getSamplingProps = (
	method: EGetSamplingPropsMethod,
	payload: IGetSamplingPropsPayload,
) => {
	const getSamplingPropsMethod = GetSamplingPropsMethodsMap[method];

	if (getSamplingPropsMethod === undefined) {
		throw new Error("Method not found for getSamplingProps");
	}

	return getSamplingPropsMethod(payload);
};
