import React, { FC } from "react";
// import { selectWaveIDs } from "@features/waves/store/wavesSelectors";
import { WavesView } from "@features/waves/components/layouts/WavesView/WavesView";

export const Waves: FC = () => {
	// const settings = useAppSelector(selectWavesListSettings, shallowEqual);
	// const sumWave = useAppSelector(selectSumWave, shallowEqual);
	// const dispatch = useAppDispatch();

	// console.log(settings);
	// TODO: Maybe pass the view Component in props
	// TODO: move addWave to consts file
	// TODO: get waveIDs by order

	// console.log("waves reloaded", waveIDs);

	return <WavesView />;
};
