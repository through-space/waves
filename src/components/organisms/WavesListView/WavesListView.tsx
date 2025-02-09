import React, { FC } from "react";
import { IWavesListViewProps } from "@components/organisms/WavesListView/WavesListViewInterfaces";
import { WaveBox } from "@components/molecules/WaveBox/WaveBox";
import { WaveListSettings } from "@components/molecules/WaveListSettings/WaveListSettings";

export const WavesListView: FC<IWavesListViewProps> = (props) => {
	const { waves, settings, updateSettings } = props;
	return (
		<>
			<WaveListSettings
				settings={settings}
				updateSettings={updateSettings}
			/>
			{waves.map((wave) => (
				<WaveBox key={wave.id} wave={wave} />
			))}
		</>
	);
};
