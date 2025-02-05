import { createAppSlice } from "@app/createAppSlice";
import { TWavesSlice } from "../types/wavesInterfaces";
import {
	addWaveReducer,
	removeWaveReducer,
	updateWaveReducer,
} from "@features/waves/store/wavesReducers";
import { initialWavesState } from "@features/waves/store/wavesSliceConsts";

export const wavesSlice: TWavesSlice = createAppSlice({
	name: "waves",
	initialState: initialWavesState,
	reducers: {
		addWave: addWaveReducer,
		removeWave: removeWaveReducer,
		updateWave: updateWaveReducer,
	},
});
