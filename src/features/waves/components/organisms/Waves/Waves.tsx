import React, { FC } from "react";
import { useAppDispatch, useAppSelector } from "@app/hooks";
import { WavesView } from "@features/waves/components/layouts/WavesView/WavesView";
import {
	selectAllWaves,
	selectSumWave,
	selectWavesListSettings,
} from "@features/waves/store/wavesSelectors";
import {
	addWave,
	removeWave,
	updateWave,
	updateWaveListSettings,
} from "@features/waves/store/wavesSlice";
import { DEFAULT_WAVE } from "@features/waves/store/wavesSliceConsts";
import { AudioModule } from "@features/waves/components/molecules";

export const Waves: FC = () => {
	const waves = useAppSelector(selectAllWaves);
	const settings = useAppSelector(selectWavesListSettings);
	const sumWave = useAppSelector(selectSumWave);
	const dispatch = useAppDispatch();

	// console.log(settings);
	// TODO: Maybe pass the view Component in props
	// TODO: move addWave to consts file

	return (
		<>
			<div
				onKeyUp={() => {
					console.log("KEYBOARD");
				}}
			></div>
			<AudioModule waves={waves} />
			<WavesView
				waves={waves}
				settings={settings}
				updateSettings={(settings) =>
					dispatch(updateWaveListSettings(settings))
				}
				updateWave={(wave) => dispatch(updateWave(wave))}
				sumWave={sumWave}
				addWave={() =>
					dispatch(
						addWave({
							...DEFAULT_WAVE,
							id: self.crypto.randomUUID(),
						}),
					)
				}
				removeWave={(wave) => dispatch(removeWave(wave))}
			/>
		</>
	);
};
