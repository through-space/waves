import { combineSlices, configureStore } from "@reduxjs/toolkit";
import { wavesSlice } from "../features/waves/wavesSlice";

const rootReducer = combineSlices(wavesSlice);

export const store = configureStore({
	reducer: rootReducer,
});
