import { selectDataPointsById } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceSelectors";
import { RootState } from "@app/store/store";
import { TWaveID } from "@features/waves/types/wavesInterfaces";

export const MAX_HIGHCHARTS_POINTS = 10000;

export const selectWaveDataPoints = (waveID: TWaveID) => (state: RootState) => {
	return selectDataPointsById(state, waveID);
};
