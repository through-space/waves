import { TWavesSlice } from "@features/waves/store/slices/wavesSlice/wavesSliceInterfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { IWave } from "@features/waves/types/wavesInterfaces";
import { wavesAdapter } from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

// const updateObject = (oldObject, newValues) => {
// 	// Encapsulate the idea of passing a new object as the first parameter
// 	// to Object.assign to ensure we correctly copy data instead of mutating
// 	return Object.assign({}, oldObject, newValues);
// };
// TODO: add update sum wave
// export const addWaveReducer: TWavesSlice["caseReducers"]["addWave"] = (
// export const addWaveReducer: TWavesSlice = (
// 	state,
// 	action,
// ) => {
// 	const newWave = action.payload;
// 	if (state.items.some((item) => item.id === newWave.id)) {
// 		return state;
// 	}
//
// 	return {
// 		...state,
// 		items: [...state.items, getPopulatedWave(newWave, state.settings)],
// 	};
// };
// AppStore["getState"]
// interface addWaverReducer extends  {}

/**
 * TODO: performance: https://redux.js.org/tutorials/essentials/part-6-performance-normalization
 * To faster get wave by id. Maybe array vs map vs record??
 */

// export const addWaveReducer: TWavesSlice["caseReducers"]["addWave"] = (
// 	state,
// 	action,
// ) => {
// 	const newWave = action.payload;
//
// 	if (newWave.id in state.items.byID) {
// 		// TODO throw error?
// 		return state;
// 	}
//
// 	newWave.dataPoints = getWaveDataPoints(newWave, state.settings);
//
// 	const wavesByID = { ...state.items.byID, [newWave.id]: newWave };
//
// 	return {
// 		...state,
// 		items: {
// 			...state.items,
// 			byID: wavesByID,
// 		},
// 		sumWave: getPopulatedSumWave(Object.values(wavesByID), state.settings),
// 	};
// };

// TODO: add update sum wave
export const removeWaveReducer: TWavesSlice["caseReducers"]["removeWave"] = (
	state,
	action,
) => {
	const waveID = action.payload;
	wavesAdapter.removeOne(state, waveID);
};

export const updateWaveReducer = (
	state,
	action: PayloadAction<IWave, string>,
) => {
	const wave = action.payload;

	wavesAdapter.updateOne(state, {
		id: wave.id,
		changes: wave,
	});

	// 	// TODO: add error
};

export const updateWaveDataPointsReducer = (
	state,
	action: PayloadAction<IWave, string>,
) => {
	const wave = action.payload;

	wavesAdapter.updateOne(state, {
		id: wave.id,
		changes: {
			// dataPoints: getWaveDataPoints(wave, state.waves.settings),
		},
	});

	// 	// TODO: add error
};

// TODO: rename to global setting?
// export const updateWaveListSettingsReducer: TWavesSlice["caseReducers"]["updateWaveListSettings"] =
// 	(state, action: PayloadAction<IWavesSettings>) => {
// 		const updatedSettings = { ...state.settings, ...action.payload };
// 		// TODO: move data to separate slice?
// 		// console.log("updateWaveListSettingsReducer")
// 		// const waves = getPopulatedWaves(
// 		// 	Object.values(state.items.byID),
// 		// 	updatedSettings,
// 		// );
//
// 		// const newSettings
// 		const wavesByID = getPopulatedWavesByID(
// 			state.items.byID,
// 			state.settings,
// 		);
//
// 		const sumWave = getPopulatedSumWave(
// 			Object.values(wavesByID),
// 			updatedSettings,
// 		);
// 		return {
// 			...state,
// 			settings: updatedSettings,
// 			items: { ...state.items },
// 			sumWave,
// 		};
// 	};
