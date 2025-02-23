import { getSumWaveSamplesByFunction } from "@features/waves/utils/calculations/basic";
import {
	IWave,
	IWaveListSamplingSettings,
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
			duration: 0.4,
		},
	},
};

export const wavesAdapter = createEntityAdapter<IWave>();

// TODO: Add global type waveID to be string

export const getRandomWaveID: () => string = () => {
	return self.crypto.randomUUID();
};

export const isWaveExist = (waves: IWave[], waveId: string): boolean => {
	return waves.some((wave) => wave.id === waveId);
};

export const getSumWaveDataPoints = (
	waves: IWave[],
	samplingSettings: IWaveListSamplingSettings,
): number[] => {
	const summedWaves = waves.filter((wave) => wave.enabled);

	// TODO: repetition here
	const { sampleRate, duration, maxDataPoints } = samplingSettings;

	const samplingProps = getSamplingProps(
		EGetSamplingPropsMethod.BY_SAMPLING_RATE_AND_DURATION,
		{ sampleRate, duration },
	);

	return getSumWaveSamplesByFunction(summedWaves, samplingProps);
	// return getSumWaveSamplesByFunction(summedWaves, samplingProps);
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
