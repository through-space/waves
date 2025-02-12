// TODO: consider moving out of the project

import {
	IWaveConfig,
	IWaveListConfig,
	IWavesConfig,
} from "@features/waves/config/types";

/**
 * May Affect performance (ui,time,memory)
 */
// export const MAX_SAMPLE_RATE = 100;

const waveConfig: IWaveConfig = {
	frequency: { min: 0, max: 8000, step: 1 },
	amplitude: { min: 0, max: 1, step: 0.01 },
	phase: { min: -Math.PI, max: Math.PI, step: 0.1 },
};

const waveListConfig: IWaveListConfig = {
	sampleRate: { min: 1, max: 10000, step: 1 },
	duration: { min: 0, max: 0.1, step: 0.001 },
};

export const wavesConfig: IWavesConfig = {
	waveList: waveListConfig,
	wave: waveConfig,
};
