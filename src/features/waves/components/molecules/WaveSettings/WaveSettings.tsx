import { FC } from "react";
import { IWaveSettingsProps } from "@features/waves/components/molecules/WaveSettings/WaveSettingsInterfaces";
import { WaveSettingsWrapper } from "@features/waves/components/molecules/WaveSettings/WaveSettingsStyledComponents";
import {
	AmplitudeInput,
	FrequencyInput,
	PhaseInput,
} from "@features/waves/components/atoms";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { updateWave } from "@features/waves/store/slices/wavesSlice/wavesSlice";
import { selectWaveById } from "@features/waves/store/slices/wavesSlice/wavesSliceSelectors";

export const WaveSettings: FC<IWaveSettingsProps> = ({ waveID }) => {
	const dispatch = useAppDispatch();
	const wave = useAppSelector((state) => selectWaveById(state, waveID));
	// TODO: move ranges to components
	const updateFrequency = (frequency: number) => {
		updateWave({ frequency: frequency });
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
				updateFrequency={(frequency) =>
					dispatch(updateWave({ id: waveID, frequency }))
				}
			/>
			<AmplitudeInput
				amplitude={wave.amplitude}
				updateAmplitude={(amplitude) =>
					dispatch(updateWave({ id: waveID, amplitude }))
				}
			/>
			<PhaseInput phase={wave.phase} updatePhase={updatePhase} />
		</WaveSettingsWrapper>
	);
};
