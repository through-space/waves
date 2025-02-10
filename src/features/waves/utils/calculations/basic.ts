import { ISamplingProps } from "@features/waves/utils/calculations/calculationsTypes";
import { IWave } from "@features/waves/types/wavesInterfaces";

const getWaveValue = (
	{ frequency, amplitude = 1, phase = 0 }: IWave,
	time: number,
): number => {
	return amplitude * Math.sin(2 * Math.PI * frequency * time + phase);
};

// export const getSamplingDuration = ()
// export const getSamplingDuration = (props: {
// 	frequency: number;
// 	periods: number;
// 	// sampleRate?: number;
// 	dataLength?: number;
// }): number => {
// 	const { frequency, periods, dataLength } = props;
//
// 	const angularFrequency = getAngularFrequency(frequency);
//
// 	const radiansDisplayed = periods * 2 * Math.PI;
// 	return radiansDisplayed / angularFrequency;
// };
//
// export const get;

/**
 *
 */

export const getWaveSamples = (
	wave: IWave,
	props: ISamplingProps,
): number[] => {
	const { duration, sampleRate } = props;

	const stepTime = 1 / sampleRate;
	// console.log(sampleRate);
	const data: number[] = [];

	for (let t = 0; t < duration; t += stepTime) {
		const point = getWaveValue(wave, t);
		// console.log(point);
		data.push(point);
	}

	return data;
};
