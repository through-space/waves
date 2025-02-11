import { FC } from "react";
import { IWaveBoxProps } from "@features/waves/components/molecules/WaveBox/WaveBoxInterfaces";
import { WaveChart } from "@components/atoms/WaveChart/WaveChart";
import { WaveSettings } from "@features/waves/components/molecules/WaveSettings/WaveSettings";

//TODO check why WaveChart receives undefined dataPoints

export const WaveBox: FC<IWaveBoxProps> = (props) => {
	const { wave, updateWave } = props;
	return (
		<>
			<>
				<span>id</span>
				<span>{wave.id}</span>
			</>
			<>
				<span>frequency</span>
				<span>{wave.frequency}</span>
			</>
			<>
				<WaveChart data={wave.dataPoints} />
			</>
			<WaveSettings wave={wave} updateWave={updateWave} />
		</>
	);
};
