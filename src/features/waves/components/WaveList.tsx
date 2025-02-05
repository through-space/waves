import { FC } from "react";
import { useAppSelector } from "@app/hooks";
import { WavesListView } from "@components/organisms/WavesListView/WavesListView";
import { selectAllWaves } from "@features/waves/store/wavesSelectors";

export const WaveList: FC = () => {
	const waves = useAppSelector(selectAllWaves);

	// TODO: Maybe pass the view Component in props
	return <WavesListView waves={waves} />;
};
