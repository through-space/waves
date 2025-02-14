import { FC } from "react";
import { IWavesSettingsProps } from "@features/waves/components/molecules/WavesSettings/WaveSettingsInterfaces";
import {
	WavesSettingsFadersWrapper,
	WavesSettingsWrapper,
} from "@features/waves/components/molecules/WavesSettings/WavesSettingsStyledComponents";
import { SampleRateInput } from "@features/waves/components/atoms/SampleRateInput/SampleRateInput";
import { DurationsInput } from "@features/waves/components/atoms";

export const WaveSettings: FC<IWavesSettingsProps> = (props) => {
	const { settings, updateSettings } = props;

	// TODO: consider debouncing (write myself)
	const updateSampleRate = (sampleRate: number): void => {
		updateSettings({
			...settings,
			sampling: { ...settings.sampling, sampleRate: sampleRate },
		});
	};

	const updateDuration = (duration: number): void => {
		updateSettings({
			...settings,
			sampling: { ...settings.sampling, duration: duration },
		});
	};

	// TODO: move min/max/step to global consts

	//TODO: export inputs to components/atoms

	return (
		<WavesSettingsWrapper>
			<WavesSettingsFadersWrapper>
				<SampleRateInput
					sampleRate={settings.sampling.sampleRate}
					updateSampleRate={updateSampleRate}
				/>
				<DurationsInput
					duration={settings.sampling.duration}
					updateDuration={updateDuration}
				/>
			</WavesSettingsFadersWrapper>
		</WavesSettingsWrapper>
	);
};
