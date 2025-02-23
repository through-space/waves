import { FC } from "react";
import { IWaveChartProps } from "@features/waves/components/atoms/WaveChart/WaveChartInterfaces";
import {
	MAX_HIGHCHARTS_POINTS,
	selectWaveDataPoints,
} from "@features/waves/components/atoms/WaveChart/WaveChartConsts";
import { useAppSelector } from "@app/hooks";
import { SimpleChart } from "@components/atoms/SimpleChart/SimpleChart";

export const WaveChart: FC<IWaveChartProps> = (props) => {
	const { waveID } = props;

	const data = useAppSelector(selectWaveDataPoints(waveID));

	if (!data) {
		return;
		// TODO: show dummy chart?
	}

	const { dataPoints } = data;
	// TODO: what if no data or undefined

	const maxDataLength = Math.min(dataPoints.length, MAX_HIGHCHARTS_POINTS);

	return <SimpleChart data={dataPoints.slice(0, maxDataLength)} />;
};
