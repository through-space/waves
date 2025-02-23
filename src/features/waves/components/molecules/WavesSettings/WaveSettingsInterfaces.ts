import { IWavesSettings } from "@features/waves/types/wavesInterfaces";

export interface IWavesSettingsProps {
	settings?: IWavesSettings;
	updateSettings?: (settings: IWavesSettings) => void;
}
