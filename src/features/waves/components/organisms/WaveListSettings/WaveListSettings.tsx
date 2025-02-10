import { FC } from "react";
import { IWaveListSettingsProps } from "@features/waves/components/WaveListSettings/WaveListSettingsInterfaces";
import { Range } from "@components/atoms/Range/Range";

export const WaveListSettings: FC<IWaveListSettingsProps> = (props) => {
	const { settings, updateSettings } = props;

	// const updateSamplingSettings = (setting: string, value) => {}
	// const handleSettingsUpdate = (
	// 	settingName: string,
	// 	settingValue: number,
	// ) => {
	// 	updateSettings({ ...settings, [settingName]: settingValue });
	// };

	// TODO: consider debouncing (write myself)
	const updateSampleRate = (sampleRate: number): void => {
		updateSettings({
			...settings,
			sampling: { ...settings.sampling, sampleRate },
		});
	};

	const updateDuration = (duration: number): void => {
		updateSettings({
			...settings,
			sampling: { ...settings.sampling, duration },
		});
	};

	// TODO: move min/max/step to global consts

	return (
		<>
			<>Settings:</>
			<>
				<Range
					min={10}
					max={100}
					value={settings.sampling.sampleRate}
					onChange={updateSampleRate}
					label={"Sample Rate"}
				/>
				<Range
					min={0}
					max={0.1}
					value={settings.sampling.duration}
					onChange={updateDuration}
					label={"Delay"}
					step={0.001}
				/>
			</>
		</>
	);
};
