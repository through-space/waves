import {
	IDataPointsProps,
	IGetWaveDataPointsProps,
} from "@features/waves/types/wavesInterfaces";
import { DEFAULT_WAVE_PROPS } from "@features/waves/wavesConsts";

const getAngularFrequency = (frequency: number): number => {
	return 2 * Math.PI * frequency;
};

const getPoint = (props: IDataPointsProps): number => {
	const { time, frequency, amplitude, phase } = props;
	return amplitude * Math.sin(time * frequency + phase);
};

export const getWaveDataPoints = (props: IGetWaveDataPointsProps): number[] => {
	const { wave, periods, dataLength } = props;
	const { frequency, amplitude, phase } = { ...DEFAULT_WAVE_PROPS, ...wave };

	const angularFrequency = getAngularFrequency(frequency);
	const radiansDisplayed = periods * 2 * Math.PI;

	/**
	 * ::: AngularSpeed (rad/sec) * FullCircleTime (sec) = 2 Pi (rad)
	 * ::: 5 times a second = each time is 5th of a second
	 * ::: 1 / FullCircleTime (sec) = Frequency(Hz)
	 *
	 */

	const totalSamplingDuration = radiansDisplayed / angularFrequency;
	const stepTime = totalSamplingDuration / dataLength;

	const data: number[] = [];

	for (let t = 0; t < totalSamplingDuration; t += stepTime) {
		const point = getPoint({
			time: t,
			frequency: angularFrequency,
			phase,
			amplitude,
		});
		data.push(point);
	}

	return data;
};
