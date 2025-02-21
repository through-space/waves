import { createAppSlice } from "@app/createAppSlice";
import {
	removeWaveReducer,
	updateWaveReducer,
} from "@features/waves/store/slices/wavesSlice/wavesSliceReducers";
import {
	INITIAL_WAVES,
	INITIAL_WAVES_STATE,
	wavesAdapter,
} from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

export const wavesSlice = createAppSlice({
	name: "waves",
	initialState: wavesAdapter.getInitialState(
		INITIAL_WAVES_STATE,
		INITIAL_WAVES,
	),
	reducers: {
		removeWave: removeWaveReducer,
		updateWave: updateWaveReducer,
	},
});

export const { updateWave, removeWave } = wavesSlice.actions;
