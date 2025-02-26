import { RootState } from "@app/store/store";
import { dataPointsAdapter } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceConsts";

export const { selectById: selectDataPointsById } =
	dataPointsAdapter.getSelectors((state: RootState) => state.dataPoints);

export const selectSumWave = (state: RootState) => {
	return state.dataPoints.sumWave;
};
