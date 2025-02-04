import { RootState } from "@app/store";
import { IWave } from "@features/waves/wavesInterfaces";

export const selectAllWaves = (state: RootState): IWave[] => {
	return state.waves.items;
};