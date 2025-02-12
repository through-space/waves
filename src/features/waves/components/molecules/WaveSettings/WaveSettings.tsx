import { FC } from "react";
import { IWaveSettingsProps } from "@features/waves/components/molecules/WaveSettings/WaveSettingsInterfaces";
import { Range } from "@components/atoms/Range/Range";
import { WaveSettingsWrapper } from "@features/waves/components/molecules/WaveSettings/WaveSettingsStyledComponents";
import { Fader } from "@components/molecules/Fader/Fader";

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
			<Fader
				min={0}
				max={8000}
				step={1}
				title={"Frequency"}
				value={wave.frequency}
				onChange={updateFrequency}
			/>
			<Fader
				min={0}
				max={1}
				step={0.01}
				title={"Amplitude"}
				value={wave.amplitude}
				onChange={updateAmplitude}
			/>
			<Fader
				min={-Math.PI}
				max={Math.PI}
				step={0.1}
				title={"Phase"}
				value={wave.phase}
				onChange={updatePhase}
			/>
		</WaveSettingsWrapper>
	);
};
