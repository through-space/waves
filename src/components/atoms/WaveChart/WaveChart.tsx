import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { FC } from "react";
import { IWaveChartProps } from "@components/atoms/WaveChart/WaveChartInterfaces";
import { WaveChartWrapper } from "@components/atoms/WaveChart/WaveChartStyledComponents";
import { MAX_HIGHCHARTS_POINTS } from "@components/atoms/WaveChart/WaveChartConsts";

export const WaveChart: FC<IWaveChartProps> = (props) => {
	const { data } = props;

	// if (!data || !data.length) {
	// 	return;
	// }

	// console.log(data.length);

	const maxDataLength = Math.min(data.length, MAX_HIGHCHARTS_POINTS);

	const chartOptions = {
		series: [{ data: data.slice(0, maxDataLength) }],
		accessibility: { enabled: false },
		credits: { enabled: false },
		chart: { animation: false },
		title: { text: "" },
		yAxis: { title: { enabled: false } },
	};

	return (
		<WaveChartWrapper>
			<HighchartsReact highcharts={Highcharts} options={chartOptions} />
		</WaveChartWrapper>
	);
};
