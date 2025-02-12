import { FC } from "react";
import { IWaveSettingsProps } from "@features/waves/components/molecules/WaveSettings/WaveSettingsInterfaces";
import { WaveSettingsWrapper } from "@features/waves/components/molecules/WaveSettings/WaveSettingsStyledComponents";
import {
	AmplitudeInput,
	FrequencyInput,
	PhaseInput,
} from "@features/waves/components/atoms";

export const WaveSettings: FC<IWaveSettingsProps> = (props) => {
	const { wave, updateWave } = props;
	// TODO: move ranges to components
	const updateFrequency = (frequency: number) => {
		updateWave({ ...wave, frequency: frequency });
	};

	const updateAmplitude = (amplitude: number) => {
		updateWave({ ...wave, amplitude: amplitude });
	};

	const updatePhase = (phase: number) => {
		updateWave({ ...wave, phase: phase });
	};

	// TODO add min max frequency
	return (
		<WaveSettingsWrapper>
			<FrequencyInput
				frequency={wave.frequency}
				updateFrequency={updateFrequency}
			/>
			<AmplitudeInput
				amplitude={wave.amplitude}
				updateAmplitude={updateAmplitude}
			/>
			<PhaseInput phase={wave.phase} updatePhase={updatePhase} />
		</WaveSettingsWrapper>
	);
};
