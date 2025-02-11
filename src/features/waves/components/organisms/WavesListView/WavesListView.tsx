import React, { FC } from "react";
import { IWavesListViewProps } from "@features/waves/components/organisms/WavesListView/WavesListViewInterfaces";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";
import { WaveListSettings } from "@features/waves/components/organisms/WaveListSettings/WaveListSettings";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";

export const WavesListView: FC<IWavesListViewProps> = (props) => {
	const { waves, settings, updateSettings, updateWave, sumWave } = props;
	return (
		<>
			<WaveListSettings
				settings={settings}
				updateSettings={updateSettings}
			/>
			<WaveSumChart wave={sumWave} />
			{waves.map((wave) => (
				<WaveBox key={wave.id} wave={wave} updateWave={updateWave} />
			))}
		</>
	);
};
