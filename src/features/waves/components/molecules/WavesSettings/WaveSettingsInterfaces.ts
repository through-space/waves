import { IWaveListSettings } from "@features/waves/types/wavesInterfaces";

export interface IWavesSettingsProps {
	settings?: IWaveListSettings;
	updateSettings?: (settings: IWaveListSettings) => void;
}
