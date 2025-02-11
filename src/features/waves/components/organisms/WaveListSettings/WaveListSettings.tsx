import { FC } from "react";
import { IWaveListSettingsProps } from "@features/waves/components/organisms/WaveListSettings/WaveListSettingsInterfaces";
import { Range } from "@components/atoms/Range/Range";
import { WaveListSettingsWrapper } from "@features/waves/components/organisms/WaveListSettings/WaveListSettingsStyledComponents";

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
			<>Settings:</>
			<>
				<Range
					min={10}
					max={10000}
					value={settings.sampling.sampleRate}
					onChange={updateSampleRate}
					label={"Sample Rate"}
				/>
				<div>{settings.sampling.sampleRate}</div>
				<Range
					min={0}
					max={0.1}
					value={settings.sampling.duration}
					onChange={updateDuration}
					label={"Duration"}
					step={0.001}
				/>
				<>{settings.sampling.duration}</>
			</>
		</WaveListSettingsWrapper>
	);
};
