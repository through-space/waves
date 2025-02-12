import { FC } from "react";
import { IWaveBoxProps } from "@features/waves/components/molecules/WaveBox/WaveBoxInterfaces";
import { WaveChart } from "@components/atoms/WaveChart/WaveChart";
import { WaveSettings } from "@features/waves/components/molecules/WaveSettings/WaveSettings";
import { WaveBoxWrapper } from "@features/waves/components/molecules/WaveBox/WaveBoxStyledComponents";

//TODO check why WaveChart receives undefined dataPoints

export const WaveBox: FC<IWaveBoxProps> = (props) => {
	const { wave, updateWave } = props;
	return (
		<WaveBoxWrapper>
			<WaveChart data={wave.dataPoints} />
			<WaveSettings wave={wave} updateWave={updateWave} />
		</WaveBoxWrapper>
	);
};
