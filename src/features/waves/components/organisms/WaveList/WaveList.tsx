import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { WavesListView } from "@features/waves/components/organisms/WavesListView/WavesListView";
import {
	selectAllWaves,
	selectWavesListSettings,
} from "@features/waves/store/wavesSelectors";
import { IWaveListSettings } from "@features/waves/types/wavesInterfaces";
import { updateWaveListSettings } from "@features/waves/store/wavesSlice";

export const WaveList: FC = () => {
	const waves = useAppSelector(selectAllWaves);
	const settings = useAppSelector(selectWavesListSettings);
	const dispatch = useAppDispatch();

	// console.log(settings);
	// TODO: Maybe pass the view Component in props
	const updateSettings = (settings: IWaveListSettings) => {
		// console.log(settings);
		dispatch(updateWaveListSettings(settings));
	};

	return (
		<WavesListView
			waves={waves}
			settings={settings}
			updateSettings={(settings) => updateSettings(settings)}
		/>
	);
};
