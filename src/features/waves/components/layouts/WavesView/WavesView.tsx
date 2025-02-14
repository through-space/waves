import React, { FC } from "react";
import { IWavesViewProps } from "@features/waves/components/layouts/WavesView/WavesViewInterfaces";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";
import { WaveSettings } from "@features/waves/components/molecules/WavesSettings/WaveSettings";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";
import {
	WaveTopPanel,
	WaveListViewWrapper,
	WaveListWrapper,
} from "@features/waves/components/layouts/WavesView/WavesViewStyledComponents";
import { AddWaveButton } from "@features/waves/components/atoms";

export const WavesView: FC<IWavesViewProps> = (props) => {
	const { waves, settings, updateSettings, updateWave, sumWave, addWave } =
		props;
	return (
		<WaveListViewWrapper>
			<WaveTopPanel>
				<WaveSumChart wave={sumWave} />
				<WaveSettings
					settings={settings}
					updateSettings={updateSettings}
				/>
			</WaveTopPanel>
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
