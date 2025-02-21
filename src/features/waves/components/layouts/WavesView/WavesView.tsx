import React, { FC } from "react";
import { WavesSettings } from "@features/waves/components/molecules/WavesSettings/WavesSettings";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";
import {
	WaveListWrapper,
	WavesViewWrapper,
	WaveViewTopPanel,
} from "@features/waves/components/layouts/WavesView/WavesViewStyledComponents";
import { WaveList } from "@features/waves/components/molecules/WaveList/WaveList";

export const WavesView: FC = () => {
	return (
		<WavesViewWrapper>
			<WaveViewTopPanel>
				<WaveSumChart />
				{/*<WavesSettings />*/}
			</WaveViewTopPanel>
			<WaveListWrapper>
				<WaveList />
			</WaveListWrapper>
			{/*<AddWaveButton addWave={addWave} />*/}
		</WavesViewWrapper>
	);
};
