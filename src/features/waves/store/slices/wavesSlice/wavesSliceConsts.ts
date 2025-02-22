import {
	getSumWaveSamplesByFunction,
	getWaveSamples,
} from "@features/waves/utils/calculations/basic";
import {
	IWave,
	IWavesSettings,
	IWavesState,
	TWaveID,
} from "@features/waves/types/wavesInterfaces";
import {
	EGetSamplingPropsMethod,
	getSamplingProps,
} from "@features/waves/utils/calculations/getDataPointMethods";
import { createEntityAdapter } from "@reduxjs/toolkit";

export const DEFAULT_WAVE: Partial<IWave> = {
	frequency: 110,
	enabled: true,
	amplitude: 1,
	phase: 0,
};

export const INITIAL_WAVES: Record<TWaveID, IWave> = {
	"0": { ...DEFAULT_WAVE, id: "0", frequency: 440 },
	"1": { ...DEFAULT_WAVE, id: "1", frequency: 110 },
};

export const INITIAL_WAVES_STATE: IWavesState = {
	ids: [],
	entities: {},
	settings: {
		sampling: {
			sampleRate: 5000,
			maxDataPoints: 1000,
			duration: 0.02,
		},
	},
};

export const wavesAdapter = createEntityAdapter<IWave>();
// items: [
// 	{ ...DEFAULT_WAVE, id: "0", frequency: 440 },
// 	{ ...DEFAULT_WAVE, id: "1", frequency: 110 },
// ],
// settings: {
// 	sampling: {
// 		sampleRate: 100,
// 		maxDataPoints: 100,
// 		duration: 0.02,
// 	},
// },
// sumWave: {},
// };

// TODO: Add global type waveID to be string

export const getRandomWaveID: () => string = () => {
	return self.crypto.randomUUID();
};

export const isWaveExist = (waves: IWave[], waveId: string): boolean => {
	return waves.some((wave) => wave.id === waveId);
};

export const getPopulatedWavesByID = (
	wavesByID: Record<TWaveID, IWave>,
	waveListSettings: IWavesSettings,
): Record<TWaveID, IWave> => {
	return Object.fromEntries(
		Object.entries(wavesByID).map(([waveID, wave]) => {
			return [
				waveID,
				{
					...wave,
					// dataPoints: getWaveDataPoints(wave, waveListSettings),
				},
			];
		}),
	);
	// return waves.map((wave) => getWaveDataPoints(wave, waveListSettings));
};

export const getPopulatedSumWave = (
	waves: IWave[],
	waveListSettings: IWavesSettings,
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

// export const getInitialWavesState = (
// 	initialWavesState: IWavesState,
// ): IWavesState => {
// 	const populatedWaves = getPopulatedWavesByID(
// 		initialWavesState.items.byID,
// 		initialWavesState.settings,
// 	);
//
// 	return {
// 		...initialWavesState,
// 		items: { byID: populatedWaves },
// 		sumWave: getPopulatedSumWave(
// 			Object.values(initialWavesState.items.byID),
// 			initialWavesState.settings,
// 		),
// 	};
// };
