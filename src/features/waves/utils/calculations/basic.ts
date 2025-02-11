import { ISamplingProps } from "@features/waves/utils/calculations/calculationsTypes";
import { IWave } from "@features/waves/types/wavesInterfaces";

const getWaveValue = (
	{ frequency, amplitude = 1, phase = 0 }: IWave,
	time: number,
): number => {
	return amplitude * Math.sin(2 * Math.PI * frequency * time + phase);
};

export const getWaveSamples = (
	wave: IWave,
	props: ISamplingProps,
): number[] => {
	const { duration, sampleRate } = props;

	const stepTime = 1 / sampleRate;
	const data: number[] = [];

	for (let t = 0; t < duration; t += stepTime) {
		const pointValue = getWaveValue(wave, t);
		data.push(pointValue);
	}

	return data;
};

export const getSumWaveSamplesByFunction = (
	waves: IWave[],
	props: ISamplingProps,
): number[] => {
	if (waves.length < 1) {
		return [];
	}

	const { duration, sampleRate } = props;

	const amplitudeSum = waves.reduce(
		(sum: number, wave) => sum + wave.amplitude,
		0,
	);

	if (amplitudeSum === 0) {
		return [];
	}

	const stepTime = 1 / sampleRate;

	const data: number[] = [];

	for (let t = 0; t < duration; t += stepTime) {
		const pointValue = waves.reduce((sumValue: number, wave) => {
			const waveWeight = wave.amplitude / amplitudeSum;
			return sumValue + waveWeight * getWaveValue(wave, t);
		}, 0);

		data.push(pointValue);
	}

	return data;
};
