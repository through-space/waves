import { FC } from "react";
import { IWaveListSettingsProps } from "@components/molecules/WaveListSettings/WaveListSettingsInterfaces";
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

	return (
		<>
			<>Settings:</>
			<>
				<Range
					min={10}
					max={100}
					value={settings.sampling.sampleRate}
					onChange={updateSampleRate}
				/>
			</>
		</>
	);
};
