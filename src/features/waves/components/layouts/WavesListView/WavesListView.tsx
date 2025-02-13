import React, { FC } from "react";
import { IWavesListViewProps } from "@features/waves/components/layouts/WavesListView/WavesListViewInterfaces";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";
import { WaveListSettings } from "@features/waves/components/organisms/WaveListSettings/WaveListSettings";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";
import {
	WaveListTopPanel,
	WaveListViewWrapper,
	WaveListWrapper,
} from "@features/waves/components/layouts/WavesListView/WavesListViewStyledComponents";
import { AddWaveButton } from "@features/waves/components/atoms";

export const WavesListView: FC<IWavesListViewProps> = (props) => {
	const { waves, settings, updateSettings, updateWave, sumWave, addWave } =
		props;
	return (
		<WaveListViewWrapper>
			<WaveListTopPanel>
				<WaveSumChart wave={sumWave} />
				<WaveListSettings
					settings={settings}
					updateSettings={updateSettings}
				/>
			</WaveListTopPanel>
			<WaveListWrapper>
				{waves.map((wave) => (
					<WaveBox
						key={wave.id}
						wave={wave}
						updateWave={updateWave}
					/>
				))}
			</WaveListWrapper>
			<AddWaveButton addWave={addWave} />
		</WaveListViewWrapper>
	);
};
