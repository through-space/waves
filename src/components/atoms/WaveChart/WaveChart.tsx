import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import { FC } from "react";
import { IWaveChartProps } from "@components/atoms/WaveChart/WaveChartInterfaces";
import { WaveChartWrapper } from "@components/atoms/WaveChart/WaveChartStyledComponents";

export const WaveChart: FC<IWaveChartProps> = (props) => {
	const { data } = props;

	const chartOptions = {
		series: [{ data }],
		accessibility: { enabled: false },
		credits: { enabled: false },
		title: { text: "" },
		yAxis: { title: { enabled: false } },
	};

	return (
		<WaveChartWrapper>
			<HighchartsReact highcharts={Highcharts} options={chartOptions} />
		</WaveChartWrapper>
	);
};
