import { IWave, IWavesList, TWavesSlice } from "./wavesInterfaces";
import { RootState } from "@app/store";

export const initialWavesState: IWavesList = {
	items: [
		{ id: "0", frequency: 440 },
		{ id: "1", frequency: 110 },
	],
};

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

//TODO: do i add points calculation here?

export const updateWaveReducer: TWavesSlice["caseReducers"]["updateWave"] = (
	state,
	action,
) => {
	const updatedWave = action.payload;

	return {
		...state,
		items: state.items.map((item) =>
			item.id === updatedWave.id ? { ...item, ...updatedWave } : item,
		),
	};
};

export const selectAllWaves = (state: RootState): IWave[] => {
	return state.waves.items;
};
