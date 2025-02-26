import { FC } from "react";
import { useAppSelector } from "@app/hooks";
import { selectSumWave } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceSelectors";
import { SimpleHighChart } from "@components/atoms/SimpleChart/SimpleHighChart";
import { MAX_HIGHCHARTS_POINTS } from "@features/waves/components/atoms/WaveChart/WaveChartConsts";

//TODO check why WaveChart receives undefined dataPoints

export const WaveSumChart: FC = () => {
	const sumChart = useAppSelector(selectSumWave);

	//TODO: deal with undefined datapoints
	// return <WaveChart data={wave.dataPoints} />;

	const maxDataLength = Math.min(
		sumChart.dataPoints.length,
		MAX_HIGHCHARTS_POINTS,
	);

	return (
		<SimpleHighChart data={sumChart.dataPoints.slice(0, maxDataLength)} />
	);
};
