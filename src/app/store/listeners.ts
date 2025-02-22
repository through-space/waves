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
import { updateDataPoints } from "@features/waves/store/slices/dataPointsSlice/dataPointsSlice";

export const listenerMiddleware = createListenerMiddleware<RootState>();

export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

startAppListening({
	// TODO: add delay and cancel previous

	matcher: isAnyOf(updateWave, addWave),
	effect: async (action: PayloadAction<IWave>, listenerApi) => {
		listenerApi.cancelActiveListeners();
		const updatedWaveID = action.payload.id;
		const wavesState = listenerApi.getState().waves;
		const updatedWave = wavesState.entities[updatedWaveID];

		listenerApi.dispatch(
			updateDataPoints({
				wave: updatedWave,
				samplingSettings: wavesState.settings.sampling,
			}),
		);
	},
});

// startAppListening({
// 	matcher: isAnyOf(addWave),
// 	effect: async (action: PayloadAction<IWave>, listenerApi) => {
// 		listenerApi.dispatch(
// 			updateDataPoints({
// 				wave: action.payload,
// 				samplingSettings:
// 					listenerApi.getState().waves.settings.sampling,
// 			}),
// 		);
// 	},
// });
