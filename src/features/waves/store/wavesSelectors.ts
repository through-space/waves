import { RootState } from "@app/store";
import { IWave } from "@features/waves/types/wavesInterfaces";

export const selectAllWaves = (state: RootState): IWave[] => {
	return state.waves.items;
};
