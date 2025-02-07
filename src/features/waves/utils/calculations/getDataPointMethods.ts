import { IWave } from "@features/waves/types/wavesInterfaces";
import { ISamplingProps } from "@features/waves/utils/calculations/calculationsTypes";

export const getSamplingPropsByPeriod = (
	{ frequency }: IWave,
	periods: number,
	numberOfSamples: number,
): ISamplingProps => {
	const samplingDuration = periods / frequency;

	return {
		samplingDuration,
		samplingRate: numberOfSamples / samplingDuration,
	};
};

export const getSamplingPropsByTimeRange = (
	maxDataPoints: number,
	timeSpan: number,
): ISamplingProps => {
	return {
		samplingRate: maxDataPoints / timeSpan,
		samplingDuration: timeSpan,
	};
};
