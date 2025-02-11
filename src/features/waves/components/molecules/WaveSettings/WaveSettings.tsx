import { FC } from "react";
import { IWaveSettingsProps } from "@features/waves/components/molecules/WaveSettings/WaveSettingsInterfaces";
import { Range } from "@components/atoms/Range/Range";

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
		<>
			<Range
				min={0}
				max={8000}
				step={1}
				label={"Frequency"}
				name={"frequency"}
				value={wave.frequency}
				onChange={updateFrequency}
			/>
			<Range
				min={0}
				max={1}
				step={0.01}
				label={"Amplitude"}
				name={"amplitude"}
				value={wave.amplitude}
				onChange={updateAmplitude}
			/>
			<Range
				min={-Math.PI}
				max={Math.PI}
				step={0.1}
				label={"Phase"}
				name={"phase"}
				value={wave.phase}
				onChange={updatePhase}
			/>
		</>
	);
};
