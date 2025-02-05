import { FC } from "react";
import { IWaveBoxProps } from "@components/molecules/WaveBox/WaveBoxInterfaces";
import { WaveChart } from "@components/atoms/WaveChart/WaveChart";

//TODO check why WaveChart receives undefined dataPoints

export const WaveBox: FC<IWaveBoxProps> = (props) => {
	const { wave } = props;
	return (
		<>
			<>I am wave</>
			<ul>
				<li>
					<span>id</span>
					<span>{wave.id}</span>
				</li>
				<li>
					<span>frequency</span>
					<span>{wave.frequency}</span>
				</li>
				<li>
					<WaveChart data={wave.dataPoints} />
				</li>
			</ul>
		</>
	);
};
