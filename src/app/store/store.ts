import {
	combineSlices,
	configureStore,
	createDraftSafeSelector,
} from "@reduxjs/toolkit";
import { wavesSlice } from "@features/waves/store/slices/wavesSlice/wavesSlice";
import { listenerMiddleware } from "@app/store/listeners";
import { dataPointsSlice } from "@features/waves/store/slices/dataPointsSlice/dataPointsSlice";

const rootReducer = combineSlices({
	waves: wavesSlice.reducer,
	dataPoints: dataPointsSlice.reducer,
});
export type RootState = ReturnType<typeof rootReducer>;

export const store = configureStore({
	reducer: rootReducer,
	middleware: (getDefaultMiddleware) => {
		return getDefaultMiddleware().prepend(listenerMiddleware.middleware);
	},
});

export type AppStore = typeof store;
export type AppDispatch = AppStore["dispatch"];
export const createTypedDraftSafeSelector =
	createDraftSafeSelector.withTypes<RootState>();
