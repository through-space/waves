import { IWave } from "@features/waves/types/wavesInterfaces";

export interface IWaveSettingsProps {
	wave: IWave;
	updateWave: (wave: IWave) => void;
}
