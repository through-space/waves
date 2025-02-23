import { FC } from "react";
import { IWaveBoxProps } from "@features/waves/components/molecules/WaveBox/WaveBoxInterfaces";
import { WaveChart } from "@features/waves/components/atoms/WaveChart/WaveChart";
import { WaveSettings } from "@features/waves/components/molecules/WaveSettings/WaveSettings";
import {
	WaveBoxChartWrapper,
	WaveBoxContent,
	WaveBoxFloatingButtonsWrapper,
	WaveBoxSettingsWrapper,
	WaveBoxWrapper,
} from "@features/waves/components/molecules/WaveBox/WaveBoxStyledComponents";
import { RemoveWaveButton } from "@features/waves/components/atoms/RemoveWaveButton";

//TODO check why WaveChart receives undefined dataPoints

// TODO: add minimize, open buttons and another panel with closed view

export const WaveBox: FC<IWaveBoxProps> = (props) => {
	const { waveID } = props;
	// TODO: move RemoveButton to some floating panel?
	// TODO: Affirm Remove
	// TODO: disable remove button with delay

	// console.log(waveID);
	return (
		<WaveBoxWrapper>
			<WaveBoxFloatingButtonsWrapper>
				<RemoveWaveButton waveID={waveID} />
			</WaveBoxFloatingButtonsWrapper>
			<WaveBoxContent>
				<WaveBoxChartWrapper>
					<WaveChart waveID={waveID} />
				</WaveBoxChartWrapper>
				<WaveBoxSettingsWrapper>
					<WaveSettings waveID={waveID} />
				</WaveBoxSettingsWrapper>
			</WaveBoxContent>
		</WaveBoxWrapper>
	);
};
