import { IWaveListSettings } from "@features/waves/types/wavesInterfaces";

export interface IWaveListSettingsProps {
	settings?: IWaveListSettings;
	updateSettings?: (settings: IWaveListSettings) => void;
}
