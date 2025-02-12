import { FC } from "react";
import { WaveChart } from "@components/atoms/WaveChart/WaveChart";
import { IWaveSumChartProps } from "@features/waves/components/molecules/WaveSumChart/WaveSumInterfaces";

//TODO check why WaveChart receives undefined dataPoints

export const WaveSumChart: FC<IWaveSumChartProps> = (props) => {
	const { wave } = props;

	//TODO: deal with undefined datapoints
	return <WaveChart data={wave.dataPoints} />;
};
