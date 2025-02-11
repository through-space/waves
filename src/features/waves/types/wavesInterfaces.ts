export interface IWave {
	id: string;
	frequency?: number;
	dataPoints?: number[];
	phase?: number;
	amplitude?: number;
	enabled?: boolean;
}

interface IWaveListSamplingSettings {
	sampleRate: number;
	duration: number;
	maxDataPoints: number;
}

export interface IWaveListSettings {
	sampling: IWaveListSamplingSettings;
}

export interface IWavesList {
	items: IWave[];
	sumWave: Partial<IWave>;
	settings: IWaveListSettings;
}
