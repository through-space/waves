import { IGetWaveDataPointsProps, IWavesList } from "./wavesInterfaces";

export const initialWavesState: IWavesList = {
	items: [
		{ id: "0", frequency: 440 },
		{ id: "1", frequency: 110 },
	],
};

export const getCalculatedWaveDataPoints = (
	props: IGetWaveDataPointsProps,
): number[] => {
	const { wave } = props;
	return [];
};
