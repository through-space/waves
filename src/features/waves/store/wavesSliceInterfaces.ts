import { PayloadAction, Slice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { RootState } from "@app/store";
import { IWave, IWavesList } from "@features/waves/types/wavesInterfaces";

export type TWavesState = RootState["waves"];

// export consts

export type TWavesSlice = Slice<
	IWavesList,
	{
		addWave: (
			state: WritableDraft<IWavesList>,
			action: PayloadAction<IWave>,
		) => void;
		removeWave: (
			state: WritableDraft<IWavesList>,
			action: PayloadAction<IWave>,
		) => void;
		updateWave: (
			state: WritableDraft<IWavesList>,
			action: PayloadAction<IWave>,
		) => void;
	}
>;
