import { FC } from "react";
import { IWavesListViewProps } from "@components/organisms/WavesListView/WavesListViewInterfaces";
import { WaveBox } from "@components/molecules/WaveBox/WaveBox";

export const WavesListView: FC<IWavesListViewProps> = (props) => {
	const { waves } = props;
	return (
		<>
			{waves.map((wave) => (
				<WaveBox key={wave.id} wave={wave} />
			))}
		</>
	);
};
