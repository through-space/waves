import { createAppSlice } from "@app/createAppSlice";
import {
	updateDataPointsReducer,
	updateSumWaveDataPointsReducer,
} from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceReducers";
import { getInitialDataPoints } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceConsts";

export const dataPointsSlice = createAppSlice({
	name: "dataPoints",
	initialState: getInitialDataPoints(),
	reducers: {
		updateDataPoints: updateDataPointsReducer,
		updateSumWaveDataPoints: updateSumWaveDataPointsReducer,
		// addWave: addWaveReducer,
		// removeWave: removeWaveReducer,
		// updateWave: updateWaveReducer,
		// updateWaveDataPoints: updateWaveDataPointsReducer,
	},
});

export const { updateDataPoints, updateSumWaveDataPoints } =
	dataPointsSlice.actions;
