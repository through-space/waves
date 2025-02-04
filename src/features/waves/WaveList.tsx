import { FC } from "react";
import { useAppSelector } from "@app/hooks";
import { selectAllWaves } from "@features/waves/wavesConsts";
import { WavesListView } from "@components/organisms/WavesListView/WavesListView";

export const WaveList: FC = () => {
	const waves = useAppSelector(selectAllWaves);

	// TODO: Maybe pass the view Component in props
	return <WavesListView waves={waves} />;
};
