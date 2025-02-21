import { FC } from "react";
import { WaveChart } from "@features/waves/components/atoms/WaveChart/WaveChart";
import { IWaveSumChartProps } from "@features/waves/components/molecules/WaveSumChart/WaveSumInterfaces";

//TODO check why WaveChart receives undefined dataPoints

export const WaveSumChart: FC = () => {
	// const { wave } = props;

	//TODO: deal with undefined datapoints
	// return <WaveChart data={wave.dataPoints} />;
	return <>SumChart</>;
};
