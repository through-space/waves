import { createEntityAdapter } from "@reduxjs/toolkit";
import { IDataPointsEntity } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceInterfaces";
import { getWaveSamples } from "@features/waves/utils/calculations/basic";
import {
	IWave,
	IWaveListSamplingSettings,
} from "@features/waves/types/wavesInterfaces";
import { getSamplingProps } from "@features/waves/utils/calculations";
import { EGetSamplingPropsMethod } from "@features/waves/utils/calculations/getDataPointMethods";
import { wavesSlice } from "@features/waves/store/slices/wavesSlice/wavesSlice";
import { getSumWaveDataPoints } from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

export const dataPointsAdapter = createEntityAdapter({
	selectId: (dataPointsEntity: IDataPointsEntity) => dataPointsEntity.waveID,
});

export const getInitialDataPoints = () => {
	const wavesSliceState = wavesSlice.getInitialState();
	const samplingSettings = wavesSliceState.settings.sampling;

	//TODO: check when no waves exist
	console.log("getInitialDataPoints()");

	//TODO: filter by enabled waves and not muted
	const allWaves: IWave[] = Object.values(wavesSliceState.entities);

	const initialDataPoints = allWaves.map((wave) => {
		return {
			waveID: wave.id,
			dataPoints: getWaveDataPoints(wave, samplingSettings),
		};
	});

	return dataPointsAdapter.getInitialState(
		{
			sumWave: {
				dataPoints: getSumWaveDataPoints(allWaves, samplingSettings),
			},
		},
		initialDataPoints,
	);
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
