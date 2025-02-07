import { TWavesSlice } from "@features/waves/store/wavesSliceInterfaces";

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
