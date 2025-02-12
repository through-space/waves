import { FC } from "react";
import { IWaveListSettingsProps } from "@features/waves/components/organisms/WaveListSettings/WaveListSettingsInterfaces";
import {
	WaveListSettingsFadersWrapper,
	WaveListSettingsWrapper,
} from "@features/waves/components/organisms/WaveListSettings/WaveListSettingsStyledComponents";
import { SampleRateInput } from "@features/waves/components/atoms/SampleRateInput/SampleRateInput";
import { DurationsInput } from "@features/waves/components/atoms";

export const WaveListSettings: FC<IWaveListSettingsProps> = (props) => {
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
		<WaveListSettingsWrapper>
			<WaveListSettingsFadersWrapper>
				<SampleRateInput
					sampleRate={settings.sampling.sampleRate}
					updateSampleRate={updateSampleRate}
				/>
				<DurationsInput
					duration={settings.sampling.duration}
					updateDuration={updateDuration}
				/>
			</WaveListSettingsFadersWrapper>
		</WaveListSettingsWrapper>
	);
};
