import { PayloadAction } from "@reduxjs/toolkit";
import {
	IWave,
	IWaveListSamplingSettings,
	IWavesSettings,
} from "@features/waves/types/wavesInterfaces";
import {
	dataPointsAdapter,
	getWaveDataPoints,
} from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceConsts";

export const updateDataPointsReducer = (
	state,
	action: PayloadAction<
		{ wave: IWave; samplingSettings: IWaveListSamplingSettings },
		string
	>,
) => {
	const { wave, samplingSettings } = action.payload;

	dataPointsAdapter.upsertOne(state, {
		waveID: wave.id,
		dataPoints: getWaveDataPoints(wave, samplingSettings),
	});

	// 	// TODO: add error
};
