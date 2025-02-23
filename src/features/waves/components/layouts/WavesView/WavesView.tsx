import React, { FC } from "react";
import { WaveSumChart } from "@features/waves/components/molecules/WaveSumChart/WaveSumChart";
import {
	WaveListWrapper,
	WavesViewWrapper,
	WaveViewTopPanel,
} from "@features/waves/components/layouts/WavesView/WavesViewStyledComponents";
import { WaveList } from "@features/waves/components/molecules/WaveList/WaveList";
import { AddWaveButton } from "@features/waves/components/atoms";

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
			<AddWaveButton />
		</WavesViewWrapper>
	);
};
