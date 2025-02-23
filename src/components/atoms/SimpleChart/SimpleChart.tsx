import React, { FC } from "react";
import { ISimpleChartProps } from "@components/atoms/SimpleChart/SimpleChartInterfaces";
import Highcharts from "highcharts";
import { HighchartsReact } from "highcharts-react-official";
import DarcUnica from "highcharts/themes/dark-unica";

export const SimpleChart: FC<ISimpleChartProps> = ({ data }) => {
	if (!data) {
		return null;
	}
	const theme = DarcUnica;
	const chartOptions: Highcharts.Options = {
		series: [
			{
				data,
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
