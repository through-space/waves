import { PayloadAction, Slice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { RootState } from "@app/store";
import {
	IWave,
	IWaveListSettings,
	IWavesState,
} from "@features/waves/types/wavesInterfaces";

export type TWavesState = RootState["waves"];

// export consts

// export type

export type TWavesSlice = Slice<
	IWavesState,
	{
		addWave: (
			state: TWavesState,
			action: PayloadAction<IWave, "waves/addWave">,
		) => void;
		//TODO: to reduce memory consider passing only wave id here
		removeWave: (
			state: WritableDraft<IWavesState>,
			action: PayloadAction<IWave, "waves/removeWave">,
		) => void;
		updateWave: (
			state: WritableDraft<IWavesState>,
			action: PayloadAction<IWave, "waves/updateWave">,
		) => void;
		updateWaveListSettings: (
			state: WritableDraft<IWavesState>,
			action: PayloadAction<
				IWaveListSettings,
				"waves/updateWaveListSettings"
			>,
		) => void;
	}
>;
