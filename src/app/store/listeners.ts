import {
	createListenerMiddleware,
	isAnyOf,
	PayloadAction,
} from "@reduxjs/toolkit";
import {
	addWave,
	updateWave,
} from "@features/waves/store/slices/wavesSlice/wavesSlice";
import { IWave } from "@features/waves/types/wavesInterfaces";
import { AppDispatch, RootState } from "@app/store/store";
import {
	updateDataPoints,
	updateSumWaveDataPoints,
} from "@features/waves/store/slices/dataPointsSlice/dataPointsSlice";
import { getSumWaveDataPoints } from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

export const listenerMiddleware = createListenerMiddleware<RootState>();

export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

startAppListening({
	// TODO: add delay and cancel previous

	matcher: isAnyOf(updateWave, addWave),
	effect: async (action: PayloadAction<IWave>, listenerApi) => {
		// TODO:
		// listenerApi.cancelActiveListeners();
		// await listenerApi.delay(10);

		const updatedWaveID = action.payload.id;
		const wavesState = listenerApi.getState().waves;
		const updatedWave = wavesState.entities[updatedWaveID];

		listenerApi.dispatch(
			updateDataPoints({
				wave: updatedWave,
				samplingSettings: wavesState.settings.sampling,
			}),
		);

		listenerApi.dispatch(
			updateSumWaveDataPoints(
				getSumWaveDataPoints(
					Object.values(wavesState.entities),
					wavesState.settings.sampling,
				),
			),
		);
	},
});
