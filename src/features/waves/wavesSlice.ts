import { createAppSlice } from "@app/createAppSlice";
import {
	initialWavesState,
	addWaveReducer,
	removeWaveReducer,
	updateWaveReducer,
} from "./wavesConsts";
import { TWavesSlice } from "./wavesInterfaces";

export const wavesSlice: TWavesSlice = createAppSlice({
	name: "waves",
	initialState: initialWavesState,
	reducers: {
		addWave: addWaveReducer,
		removeWave: removeWaveReducer,
		updateWave: updateWaveReducer,
	},
});
