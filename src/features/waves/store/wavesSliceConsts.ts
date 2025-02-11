import {
	getSumWaveSamplesByFunction,
	getWaveSamples,
} from "@features/waves/utils/calculations/basic";
import {
	IWave,
	IWaveListSettings,
	IWavesList,
} from "@features/waves/types/wavesInterfaces";
import {
	EGetSamplingPropsMethod,
	getSamplingProps,
} from "@features/waves/utils/calculations/getDataPointMethods";

export const DEFAULT_WAVE: IWave = {
	id: "",
	frequency: 110,
	enabled: true,
	amplitude: 1,
};

export const INITIAL_WAVES_STATE: IWavesList = {
	items: [
		{ ...DEFAULT_WAVE, id: "0", frequency: 440 },
		{ ...DEFAULT_WAVE, id: "1", frequency: 110 },
	],
	settings: {
		sampling: {
			sampleRate: 5000,
			maxDataPoints: 100,
			duration: 0.02,
		},
	},
	sumWave: {},
};

// const

export const getPopulatedWave = (
	wave: IWave,
	waveListSettings: IWaveListSettings,
): IWave => {
	const { sampleRate, duration, maxDataPoints } = waveListSettings.sampling;

	const samplingProps = getSamplingProps(
		EGetSamplingPropsMethod.BY_SAMPLING_RATE_AND_DURATION,
		{ sampleRate, duration },
	);
	return {
		...wave,
		dataPoints: getWaveSamples(wave, samplingProps),
	};
};

export const getPopulatedWaves = (
	waves: IWave[],
	waveListSettings: IWaveListSettings,
): IWave[] => {
	return waves.map((wave) => getPopulatedWave(wave, waveListSettings));
};

export const getPopulatedSumWave = (
	waves: IWave[],
	waveListSettings: IWaveListSettings,
): Partial<IWave> => {
	const summedWaves = waves.filter((wave) => wave.enabled);

	// TODO: repetition here
	const { sampleRate, duration, maxDataPoints } = waveListSettings.sampling;

	const samplingProps = getSamplingProps(
		EGetSamplingPropsMethod.BY_SAMPLING_RATE_AND_DURATION,
		{ sampleRate, duration },
	);

	return {
		dataPoints: getSumWaveSamplesByFunction(summedWaves, samplingProps),
	};
};

export const getInitialWavesState = (
	initialWavesState: IWavesList,
): IWavesList => {
	const populatedWaves = getPopulatedWaves(
		initialWavesState.items,
		initialWavesState.settings,
	);

	const sumWave = getPopulatedSumWave(
		initialWavesState.items,
		initialWavesState.settings,
	);

	return {
		...initialWavesState,
		items: populatedWaves,
		sumWave,
	};
};
