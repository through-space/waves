import {
	IDataPointsProps,
	IGetWaveDataPointsProps,
} from "@features/waves/types/wavesInterfaces";

const getAngularFrequency = (frequency: number): number => {
	return 2 * Math.PI * frequency;
};

const getPointValue = (props: IDataPointsProps): number => {
	const { time, frequency, amplitude, phase } = props;
	const angularFrequency = getAngularFrequency(frequency);
	return amplitude * Math.sin(time * angularFrequency + phase);
};

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

export const getWaveDataPoints = (props: IGetWaveDataPointsProps): number[] => {
	const { wave, samplingDuration, samplingRate } = props;
	const { frequency, amplitude, phase } = wave;

	/**
	 * ::: AngularSpeed (rad/sec) * FullCircleTime (sec) = 2 Pi (rad)
	 * ::: 5 times a second = each time is 5th of a second
	 * ::: 1 / FullCircleTime (sec) = Frequency(Hz)
	 *
	 */

	const stepTime = 1 / samplingRate;
	const data: number[] = [];

	for (let t = 0; t < samplingDuration; t += stepTime) {
		const point = getPointValue({
			time: t,
			frequency,
			phase,
			amplitude,
		});
		data.push(point);
	}

	return data;
};
