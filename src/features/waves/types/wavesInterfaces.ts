import { PayloadAction, Slice } from "@reduxjs/toolkit";
import { WritableDraft } from "immer";
import { RootState } from "@app/store";

export interface IWave {
	id: string;
	frequency?: number;
	dataPoints?: number[];
	phase?: number;
	amplitude?: number;
	dataLength?: number;
	periods?: number;
}

export interface IWavesList {
	items: IWave[];
}

export interface IDataPointsProps {
	time: number;
	frequency: number;
	amplitude: number;
	phase: number;
}

export type TWavesState = RootState["waves"];

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

export interface IGetWaveDataPointsProps {
	wave: IWave;
	periods: number;
	dataLength: number;
}
