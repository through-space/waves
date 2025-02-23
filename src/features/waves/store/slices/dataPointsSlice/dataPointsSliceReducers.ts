import { PayloadAction } from "@reduxjs/toolkit";
import {
	IWave,
	IWaveListSamplingSettings,
} from "@features/waves/types/wavesInterfaces";
import {
	dataPointsAdapter,
	getWaveDataPoints,
} from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceConsts";
import { IDataPointsState } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceInterfaces";

export const updateDataPointsReducer = (
	state: IDataPointsState,
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

export const updateSumWaveDataPointsReducer = (
	state: IDataPointsState,
	action: PayloadAction<number[], string>,
) => {
	return { ...state, sumWave: { dataPoints: action.payload } };
};
