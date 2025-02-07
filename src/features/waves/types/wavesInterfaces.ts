export interface IWave {
	id: string;
	frequency?: number;
	dataPoints?: number[];
	phase?: number;
	amplitude?: number;
}

interface IWaveListSamplingSettings {
	sampleRate: number;
	timeSpan: number;
	maxDataPoints: number;
}

interface IWaveListSettings {
	sampling: IWaveListSamplingSettings;
}

export interface IWavesList {
	items: IWave[];
	settings: IWaveListSettings;
}
