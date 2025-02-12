interface IRangeConfig {
	min: number;
	max: number;
	step: number;
}

export interface IWaveConfig {
	frequency: IRangeConfig;
	amplitude: IRangeConfig;
	phase: IRangeConfig;
}

export interface IWaveListConfig {
	sampleRate: IRangeConfig;
	duration: IRangeConfig;
}

export interface IWavesConfig {
	wave: IWaveConfig;
	waveList: IWaveListConfig;
}
