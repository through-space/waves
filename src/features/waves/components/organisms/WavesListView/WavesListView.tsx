import React, { FC } from "react";
import { IWavesListViewProps } from "@features/waves/components/organisms/WavesListView/WavesListViewInterfaces";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";
import { WaveListSettings } from "@features/waves/components/organisms/WaveListSettings/WaveListSettings";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";
import {
	WaveListViewWrapper,
	WaveListWrapper,
} from "@features/waves/components/organisms/WavesListView/WavesListViewStyledComponents";

export const WavesListView: FC<IWavesListViewProps> = (props) => {
	const { waves, settings, updateSettings, updateWave, sumWave } = props;
	return (
		<WaveListViewWrapper>
			<WaveListSettings
				settings={settings}
				updateSettings={updateSettings}
			/>
			<WaveSumChart wave={sumWave} />
			<WaveListWrapper>
				{waves.map((wave) => (
					<WaveBox
						key={wave.id}
						wave={wave}
						updateWave={updateWave}
					/>
				))}
			</WaveListWrapper>
		</WaveListViewWrapper>
	);
};
