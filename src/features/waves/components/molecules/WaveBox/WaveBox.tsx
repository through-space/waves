import { FC } from "react";
import { IWaveBoxProps } from "@features/waves/components/molecules/WaveBox/WaveBoxInterfaces";
import { WaveChart } from "@components/atoms/WaveChart/WaveChart";
import { WaveSettings } from "@features/waves/components/molecules/WaveSettings/WaveSettings";

//TODO check why WaveChart receives undefined dataPoints

export const WaveBox: FC<IWaveBoxProps> = (props) => {
	const { wave, updateWave } = props;
	return (
		<>
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
				<WaveSettings wave={wave} updateWave={updateWave} />
			</ul>
		</>
	);
};
