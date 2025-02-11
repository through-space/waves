import { TWavesSlice } from "@features/waves/store/wavesSliceInterfaces";
import { PayloadAction } from "@reduxjs/toolkit";
import { IWaveListSettings } from "@features/waves/types/wavesInterfaces";
import {
	getPopulatedSumWave,
	getPopulatedWave,
	getPopulatedWaves,
} from "@features/waves/store/wavesSliceConsts";

// TODO: add update sum wave
export const addWaveReducer: TWavesSlice["caseReducers"]["addWave"] = (
	state,
	action,
) => {
	const newWave = action.payload;
	if (state.items.some((item) => item.id === newWave.id)) {
		return state;
	}

	return { ...state, items: [...state.items, newWave] };
};

// TODO: add update sum wave
export const removeWaveReducer: TWavesSlice["caseReducers"]["removeWave"] = (
	state,
	action,
) => {
	const removeWave = action.payload;

	return {
		...state,
		items: state.items.filter((item) => item.id === removeWave.id),
	};
};

export const updateWaveReducer: TWavesSlice["caseReducers"]["updateWave"] = (
	state,
	action,
) => {
	const updatedWave = action.payload;
	const items = state.items.map((item) => {
		if (item.id !== updatedWave.id) {
			return item;
		}

		return getPopulatedWave(
			{
				...item,
				...updatedWave,
			},
			state.settings,
		);
	});
	const sumWave = getPopulatedSumWave(items, state.settings);

	return {
		...state,
		items,
		sumWave,
	};
};

export const updateWaveListSettingsReducer: TWavesSlice["caseReducers"]["updateWaveListSettings"] =
	(state, action: PayloadAction<IWaveListSettings>) => {
		const updatedSettings = action.payload;
		const items = getPopulatedWaves(state.items, updatedSettings);
		const sumWave = getPopulatedSumWave(items, updatedSettings);
		return {
			...state,
			settings: updatedSettings,
			items,
			sumWave,
		};
	};
