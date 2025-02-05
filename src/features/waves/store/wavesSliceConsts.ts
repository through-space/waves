import { IWavesList } from "@features/waves/types/wavesInterfaces";

export const initialWavesState: IWavesList = {
	items: [
		{ id: "0", frequency: 440 },
		{ id: "1", frequency: 110 },
	],
};
