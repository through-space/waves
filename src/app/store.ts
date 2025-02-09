import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { wavesSlice } from "@features/waves/store/wavesSlice";

const rootReducer = combineSlices({ waves: wavesSlice.reducer });

export const store = configureStore({
	reducer: rootReducer,
});

// Infer the type of `store`
export type AppStore = typeof store;
// Infer the `AppDispatch` type from the store itself
// export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
// export type AppThunk<ThunkReturnType = void> = ThunkAction<
// 	ThunkReturnType,
// 	RootState,
// 	unknown,
// 	Action
// >;

// Same for the `RootState` type
