import Highcharts from "highcharts";
import DarcUnica from "highcharts/themes/dark-unica";
import { HighchartsReact } from "highcharts-react-official";
import { FC } from "react";
import { IWaveChartProps } from "@features/waves/components/atoms/WaveChart/WaveChartInterfaces";
import {
	MAX_HIGHCHARTS_POINTS,
	selectWaveDataPoints,
} from "@features/waves/components/atoms/WaveChart/WaveChartConsts";
import { useAppSelector } from "@app/hooks";
import { selectDataPointsById } from "@features/waves/store/slices/dataPointsSlice/dataPointsSliceSelectors";

export const WaveChart: FC<IWaveChartProps> = (props) => {
	const { waveID } = props;
	const theme = DarcUnica;
	// console.log(data);

	const data = useAppSelector(selectWaveDataPoints(waveID));

	if (!data) {
		return;
		// TODO: show dummy chart?
	}

	const { dataPoints } = data;
	// TODO: what if no data or undefined

	const maxDataLength = Math.min(dataPoints.length, MAX_HIGHCHARTS_POINTS);

	const chartOptions: Highcharts.Options = {
		series: [
			{
				data: dataPoints.slice(0, maxDataLength),
				type: "line",
				label: { enabled: false },
			},
		],
		accessibility: { enabled: false },
		credits: { enabled: false },
		// chart: { width: "100%", animation: false },
		chart: { animation: false },
		legend: { enabled: false },
		title: { text: "" },
		yAxis: { title: { text: "" }, min: -1, max: 1 },
	};

	return (
		<HighchartsReact
			containerProps={{ className: "w-full h-full" }}
			highcharts={Highcharts}
			options={chartOptions}
		/>
	);
};
