import { getWaveSamples } from "@features/waves/utils/calculations/basic";
import {
	IWave,
	IWaveListSettings,
	IWavesList,
} from "@features/waves/types/wavesInterfaces";
import {
	EGetSamplingPropsMethod,
	getSamplingProps,
} from "@features/waves/utils/calculations/getDataPointMethods";

export const INITIAL_WAVES_STATE: IWavesList = {
	items: [
		{ id: "0", frequency: 440 },
		{ id: "1", frequency: 110 },
	],
	settings: {
		sampling: {
			sampleRate: 5000,
			maxDataPoints: 100,
			duration: 0.02,
		},
	},
};

// const
export const getPopulatedWaves = (
	waves: IWave[],
	waveListSettings: IWaveListSettings,
) => {
	return waves.map((wave) => {
		const { sampleRate, duration, maxDataPoints } =
			waveListSettings.sampling;

		const samplingProps = getSamplingProps(
			EGetSamplingPropsMethod.BY_SAMPLING_RATE_AND_DURATION,
			{ sampleRate, duration },
		);
		return {
			...wave,
			dataPoints: getWaveSamples(wave, samplingProps),
		};
	});
};

export const getInitialWavesState = (
	initialWavesState: IWavesList,
): IWavesList => {
	return {
		...initialWavesState,
		items: getPopulatedWaves(
			initialWavesState.items,
			initialWavesState.settings,
		),
	};
};
