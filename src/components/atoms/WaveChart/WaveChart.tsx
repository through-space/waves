import Highcharts from "highcharts";
import DarcUnica from "highcharts/themes/dark-unica";
import { HighchartsReact } from "highcharts-react-official";
import { FC } from "react";
import { IWaveChartProps } from "@components/atoms/WaveChart/WaveChartInterfaces";
import { WaveChartWrapper } from "@components/atoms/WaveChart/WaveChartStyledComponents";
import { MAX_HIGHCHARTS_POINTS } from "@components/atoms/WaveChart/WaveChartConsts";

export const WaveChart: FC<IWaveChartProps> = (props) => {
	const { data } = props;
	const theme = DarcUnica;

	// TODO: what if no data or undefined
	if (!data || !data.length) {
		return;
		// TODO: show dummy chart?
	}

	const maxDataLength = Math.min(data.length, MAX_HIGHCHARTS_POINTS);

	const chartOptions: Highcharts.Options = {
		series: [
			{
				data: data.slice(0, maxDataLength),
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
