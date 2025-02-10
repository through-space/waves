import React, { FC } from "react";
import { IWavesListViewProps } from "@features/waves/components/organisms/WavesListView/WavesListViewInterfaces";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";
import { WaveListSettings } from "@features/waves/components/organisms/WaveListSettings/WaveListSettings";

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
