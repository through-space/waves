import {
	IWave,
	IWaveListSettings,
} from "@features/waves/types/wavesInterfaces";

export interface IWavesListViewProps {
	waves: IWave[];
	settings: IWaveListSettings;
	updateSettings: (settings: IWaveListSettings) => void;
}
