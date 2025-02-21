import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { IDataPoints } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceInterfaces";
import { getWaveSamples } from "@features/waves/utils/calculations/basic";
import {
	IWave,
	IWaveListSamplingSettings,
	IWavesSettings,
} from "@features/waves/types/wavesInterfaces";
import { getSamplingProps } from "@features/waves/utils/calculations";
import { EGetSamplingPropsMethod } from "@features/waves/utils/calculations/getDataPointMethods";
import { wavesSlice } from "@features/waves/store/slices/wavesSlice/wavesSlice";

export const dataPointsAdapter = createEntityAdapter({
	selectId: (dataPoints: IDataPoints) => dataPoints.waveID,
});

export const getInitialDataPoints = () => {
	const wavesSliceState = wavesSlice.getInitialState();
	const samplingSettings = wavesSliceState.settings.sampling;
	const initialDataPoints = Object.values(wavesSliceState.entities).map(
		(wave) => {
			return {
				waveID: wave.id,
				dataPoints: getWaveDataPoints(wave, samplingSettings),
			};
		},
	);

	return dataPointsAdapter.getInitialState(undefined, initialDataPoints);
};

//TODO: move to dataPointsSlice
export const getWaveDataPoints = (
	wave: IWave,
	waveListSamplingSettings: IWaveListSamplingSettings,
): number[] => {
	const { sampleRate, duration, maxDataPoints } = waveListSamplingSettings;

	//TODO: add min(maxDataPoints)
	// const estimatedDataPoints = sampleRate * duration;
	//
	// if (estimatedDataPoints > maxDataPoints) {
	//
	// }

	const samplingProps = getSamplingProps(
		EGetSamplingPropsMethod.BY_SAMPLING_RATE_AND_DURATION,
		{ sampleRate, duration },
	);

	// console.log(samplingProps, wave);
	// console.log(getWaveSamples(wave, samplingProps));
	return getWaveSamples(wave, samplingProps);
};
