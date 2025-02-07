import { createAppSlice } from "@app/createAppSlice";
import {
	addWaveReducer,
	removeWaveReducer,
	updateWaveReducer,
} from "@features/waves/store/wavesReducers";
import {
	getInitialWavesState,
	INITIAL_WAVES_STATE,
} from "@features/waves/store/wavesSliceConsts";
import { TWavesSlice } from "@features/waves/store/wavesSliceInterfaces";

export const wavesSlice: TWavesSlice = createAppSlice({
	name: "waves",
	initialState: getInitialWavesState(INITIAL_WAVES_STATE),
	reducers: {
		addWave: addWaveReducer,
		removeWave: removeWaveReducer,
		updateWave: updateWaveReducer,
	},
});
