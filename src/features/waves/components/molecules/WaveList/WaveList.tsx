import React, { FC } from "react";
import { useAppSelector } from "@app/hooks";
import { selectAllWaveIds } from "@features/waves/store/slices/wavesSlice/wavesSliceSelectors";
import { WaveBox } from "@features/waves/components/molecules/WaveBox/WaveBox";

export const WaveList: FC = () => {
	// const {} = props;
	const waveIDs = useAppSelector(selectAllWaveIds);

	return (
		<>
			{waveIDs.map((waveID) => (
				<WaveBox key={waveID} waveID={waveID} />
			))}
		</>
	);
};
