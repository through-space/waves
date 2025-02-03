import { PayloadAction, Slice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";

export interface IWave {
	id: string;
	frequency?: number;
}

export interface IWavesList {
	items: IWave[];
}

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
