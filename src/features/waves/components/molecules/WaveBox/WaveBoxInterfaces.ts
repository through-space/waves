import { IWave } from "@features/waves/types/wavesInterfaces";

export interface IWaveBoxProps {
	wave: IWave;
	updateWave: (wave: IWave) => void;
}
