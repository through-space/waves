export interface IWave {
	id: string;
	frequency?: number;
	dataPoints?: number[];
	phase?: number;
	amplitude?: number;
	enabled?: boolean;
}

export type TWaveID = string;

export interface IWaveListSamplingSettings {
	sampleRate: number;
	duration: number;
	maxDataPoints: number;
}

export interface IWavesSettings {
	sampling: IWaveListSamplingSettings;
}

export interface IWavesState {
	ids: TWaveID[];
	entities: Record<TWaveID, IWave>;
	settings: IWavesSettings;
	sumWave?: { dataPoints?: number[] };
}
