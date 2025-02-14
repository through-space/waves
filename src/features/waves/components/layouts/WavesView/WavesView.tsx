import React, { FC } from "react";
import { IWavesViewProps } from "@features/waves/components/layouts/WavesView/WavesViewInterfaces";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";
import { WavesSettings } from "@features/waves/components/molecules/WavesSettings/WavesSettings";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";
import {
	WavesViewWrapper,
	WaveListWrapper,
	WaveViewTopPanel,
} from "@features/waves/components/layouts/WavesView/WavesViewStyledComponents";
import { AddWaveButton } from "@features/waves/components/atoms";

export const WavesView: FC<IWavesViewProps> = (props) => {
	const {
		waves,
		settings,
		updateSettings,
		updateWave,
		sumWave,
		addWave,
		removeWave,
	} = props;
	return (
		<WavesViewWrapper>
			<WaveViewTopPanel>
				<WaveSumChart wave={sumWave} />
				<WavesSettings
					settings={settings}
					updateSettings={updateSettings}
				/>
			</WaveViewTopPanel>
			<WaveListWrapper>
				{waves.map((wave) => (
					<WaveBox
						key={wave.id}
						wave={wave}
						updateWave={updateWave}
						removeWave={removeWave}
					/>
				))}
			</WaveListWrapper>
			<AddWaveButton addWave={addWave} />
		</WavesViewWrapper>
	);
};
