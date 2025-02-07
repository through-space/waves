import { getWaveSamples } from "@features/waves/utils/calculations/basic";
import { IWavesList } from "@features/waves/types/wavesInterfaces";
import { getSamplingPropsByTimeRange } from "@features/waves/utils/calculations/getDataPointMethods";

export const INITIAL_WAVES_STATE: IWavesList = {
	items: [
		{ id: "0", frequency: 440 },
		{ id: "1", frequency: 110 },
	],
	settings: {
		sampling: {
			sampleRate: 100,
			maxDataPoints: 100,
			timeSpan: 100,
		},
	},
};

// const

export const getInitialWavesState = (
	initialWavesState: IWavesList,
): IWavesList => {
	return {
		...initialWavesState,
		items: initialWavesState.items.map((wave) => {
			// const samplingProps = getSamplingPropsByPeriod(wave, 1, 100);
			// TODO: change the numbers to consts or get function?
			// TODO: export them
			const { sampleRate, timeSpan, maxDataPoints } =
				initialWavesState.settings.sampling;

			//TODO: maybe move to slice consts?
			const samplingProps = getSamplingPropsByTimeRange(
				maxDataPoints,
				timeSpan,
			);
			return {
				...wave,
				dataPoints: getWaveSamples(wave, samplingProps),
			};
		}),
	};
};
