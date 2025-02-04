import { createAppSlice } from "@app/createAppSlice";
import { initialWavesState } from "./wavesConsts";
import { TWavesSlice } from "./wavesInterfaces";
import {
	addWaveReducer,
	removeWaveReducer,
	updateWaveReducer,
} from "@features/waves/wavesReducers";

export const wavesSlice: TWavesSlice = createAppSlice({
	name: "waves",
	initialState: initialWavesState,
	reducers: {
		addWave: addWaveReducer,
		removeWave: removeWaveReducer,
		updateWave: updateWaveReducer,
	},
});
