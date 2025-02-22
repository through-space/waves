import { PayloadAction } from "@reduxjs/toolkit";
import { IWave, IWavesState } from "@features/waves/types/wavesInterfaces";
import {
	getRandomWaveID,
	wavesAdapter,
} from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

// TODO: add update sum wave
export const removeWaveReducer = (state, action) => {
	const waveID = action.payload;
	wavesAdapter.removeOne(state, waveID);
};

// export const updateWaveReducer: TWavesSlice["caseReducers"]["updateWave"] = (
export const updateWaveReducer = (
	state: IWavesState,
	action: PayloadAction<IWave, string>,
) => {
	const wave = action.payload;

	if (!wave.id) {
		return;
	}

	wavesAdapter.updateOne(state, {
		id: wave.id,
		changes: wave,
	});

	// 	// TODO: add error
};

export const addWaveReducer = (
	state: IWavesState,
	action: PayloadAction<IWave, string>,
) => {
	wavesAdapter.addOne(state, action.payload);
};
