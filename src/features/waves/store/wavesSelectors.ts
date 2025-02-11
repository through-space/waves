import { RootState } from "@app/store";
import {
	IWave,
	IWaveListSettings,
} from "@features/waves/types/wavesInterfaces";

export const selectAllWaves = (state: RootState): IWave[] => {
	return state.waves.items;
};

export const selectWavesListSettings = (
	state: RootState,
): IWaveListSettings => {
	return state.waves.settings;
};

export const selectSumWave = (state: RootState): Partial<IWave> => {
	return state.waves.sumWave;
};
