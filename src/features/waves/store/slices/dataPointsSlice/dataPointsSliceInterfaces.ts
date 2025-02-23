import { TWaveID } from "@features/waves/types/wavesInterfaces";

export interface IDataPointsEntity {
	waveID: TWaveID;
	//TODO: maybe change to key-value?
	dataPoints: number[];
}

export interface IDataPointsState {
	ids: TWaveID[];
	entities: Record<TWaveID, IDataPointsEntity>;
	//TODO: check unnecessary rerenders: if a wave is updated, sum wave component can be updated twice
	sumWave: { dataPoints?: number[] };
}

// export interface IWavesState {
// 	ids: TWaveID[];
// 	entities: Record<TWaveID, IWave>;
// 	settings: IWavesSettings;
// 	sumWave?: { dataPoints?: number[] };
// }
