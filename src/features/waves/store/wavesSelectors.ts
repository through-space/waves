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
	// TODO Why there is no autocomplete here
	return state.waves.settings;
	// return state.waves.settings;
};
