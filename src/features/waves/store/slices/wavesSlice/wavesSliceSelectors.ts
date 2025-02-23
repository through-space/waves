import { createTypedDraftSafeSelector, RootState } from "@app/store/store";
import {
	IWave,
	IWavesSettings,
	TWaveID,
} from "@features/waves/types/wavesInterfaces";
import { createSelector } from "@reduxjs/toolkit";
import { wavesAdapter } from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

export const { selectById: selectWaveById, selectIds: selectAllWaveIds } =
	wavesAdapter.getSelectors((state: RootState) => state.waves);

// export const selectAllWaves = (state: RootState): IWave[] => {
// 	return state.waves.items.byId;
// };

// export const selectWavesListSettings = (state: RootState): IWavesSettings => {
// 	return state.waves.settings;
// };
//
// export const selectSumWave = (state: RootState): Partial<IWave> => {
// 	return state.waves.sumWave;
// };

// export const selectWaveByID = (state: RootState, waveID: string): IWave => {
// 	// TODO: store waves BY ID
// 	return state.waves.items.find((wave) => wave.id === waveID);
// };

// todo: use this
// Maybe no need to memoize it?
// export const selectWaveByIDMemoized = createTypedDraftSafeSelector(
// 	[
// 		(state: RootState) => state.waves.items.byID,
// 		(_state: RootState, waveID: TWaveID) => waveID,
// 	],
// 	(wavesByID, waveID) => {
// 		console.log("return waveByID");
// 		return wavesByID[waveID];
// 	}, // Return only the needed item
// );
//
// console.log("rebuilding SELECTORS");
//
// const selectWaves = (state: RootState) => state.waves.items.byID;
//
// export const selectWaveIDs = createSelector([selectWaves], (wavesByID) => {
// 	console.log("return selectWaveIDs");
// 	// return ["1"];
// 	// return wavesByID.map((item) => item.id);
// 	return Object.keys(wavesByID);
// 	// return Object.keys(wavesByID);
// });
// export const selectWaveIDs = createTypedDraftSafeSelector(
// 	[selectWaves],
// 	(wavesByID) => {
// 		console.log("return selectWaveIDs");
// 		// return ["1"];
// 		// return wavesByID.map((item) => item.id);
// 		return Object.keys(wavesByID);
// 		// return Object.keys(wavesByID);
// 	},
// );

// export const
// const selectTodosByCategory = createSelector(
// 	(state: RootState) => state.todos,
// 	// Extract the second argument to pass it on
// 	(state: RootState, category: string) => category,
// 	(todos, category) => todos.filter(t => t.category === category)
// )

// export const selectWaveByID = createSelector(
// 	// (state: RootState, category: string) => category,
// 	// (todos, category) => todos.filter(t => t.category === category)
// 	[selectAllWaves],
// 	(waves, itemId) => items[itemId], // Return only the needed item
// );
