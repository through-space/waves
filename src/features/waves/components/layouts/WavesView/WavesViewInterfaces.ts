import {
	IWave,
	IWaveListSettings,
} from "@features/waves/types/wavesInterfaces";

export interface IWavesViewProps {
	waves: IWave[];
	settings: IWaveListSettings;
	updateSettings: (settings: IWaveListSettings) => void;
	updateWave: (wave: IWave) => void;
	sumWave: Partial<IWave>;
	addWave: () => void;
	removeWave: (wave: IWave) => void;
}
