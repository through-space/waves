// import { PayloadAction, Slice } from "@reduxjs/toolkit";
// import { WritableDraft } from "immer";
// import { RootState } from "@app/store/store";
// import {
// 	IWave,
// 	IWavesSettings,
// 	IWavesState,
// 	TWaveID,
// } from "@features/waves/types/wavesInterfaces";
//
// export type TWavesState = RootState["waves"];
//
// // export consts
//
// // export type
//
// export type TWavesSlice = Slice<
// 	IWavesState,
// 	{
// 		addWave: (
// 			state: TWavesState,
// 			action: PayloadAction<IWave, "waves/addWave">,
// 		) => void;
// 		//TODO: to reduce memory consider passing only wave id here
// 		removeWave: (
// 			state: WritableDraft<IWavesState>,
// 			action: PayloadAction<TWaveID, "waves/removeWave">,
// 		) => void;
// 		updateWave: (
// 			state: WritableDraft<IWavesState>,
// 			action: PayloadAction<Partial<IWave>, "waves/updateWave">,
// 		) => void;
// 		// updateWaveListSettings: (
// 		// 	state: WritableDraft<IWavesState>,
// 		// 	action: PayloadAction<
// 		// 		IWaveListSettings,
// 		// 		"waves/updateWaveListSettings"
// 		// 	>,
// 		// ) => void;
// 	}
// >;
