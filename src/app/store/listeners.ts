import {
	createListenerMiddleware,
	isAnyOf,
	PayloadAction,
} from "@reduxjs/toolkit";
import { updateWave } from "@features/waves/store/slices/wavesSlice/wavesSlice";
import { IWave } from "@features/waves/types/wavesInterfaces";
import { AppDispatch, RootState } from "@app/store/store";
import { updateDataPoints } from "@features/waves/store/slices/dataPointsSlice/dataPointsSlice";

export const listenerMiddleware = createListenerMiddleware();

export const startAppListening = listenerMiddleware.startListening.withTypes<
	RootState,
	AppDispatch
>();

startAppListening({
	matcher: isAnyOf(updateWave),
	effect: async (action: PayloadAction<IWave>, listenerApi) => {
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

startAppListening({
	predicate: (action, currentState, previousState) => {
		console.log("predicate", currentState, previousState);
		return false;
	},
	effect: () => {
		console.log("init listener");
	},
});
