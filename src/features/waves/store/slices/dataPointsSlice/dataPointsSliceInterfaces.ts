import { TWaveID } from "@features/waves/types/wavesInterfaces";

export interface IDataPoints {
	waveID: TWaveID;
	//TODO: maybe change to key-value?
	dataPoints: number[];
}
