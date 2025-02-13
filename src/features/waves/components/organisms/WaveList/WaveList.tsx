import { FC } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { WavesListView } from "@features/waves/components/layouts/WavesListView/WavesListView";
import {
	selectAllWaves,
	selectSumWave,
	selectWavesListSettings,
} from "@features/waves/store/wavesSelectors";
import {
	addWave,
	updateWave,
	updateWaveListSettings,
} from "@features/waves/store/wavesSlice";
import { DEFAULT_WAVE } from "@features/waves/store/wavesSliceConsts";

export const WaveList: FC = () => {
	const waves = useAppSelector(selectAllWaves);
	const settings = useAppSelector(selectWavesListSettings);
	const sumWave = useAppSelector(selectSumWave);
	const dispatch = useAppDispatch();

	// console.log(settings);
	// TODO: Maybe pass the view Component in props
	// TODO: move addWave to consts file

	return (
		<WavesListView
			waves={waves}
			settings={settings}
			updateSettings={(settings) =>
				dispatch(updateWaveListSettings(settings))
			}
			updateWave={(wave) => dispatch(updateWave(wave))}
			sumWave={sumWave}
			addWave={() =>
				dispatch(
					addWave({ ...DEFAULT_WAVE, id: self.crypto.randomUUID() }),
				)
			}
		/>
	);
};
