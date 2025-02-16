import { FC } from "react";
import { IWaveBoxProps } from "@features/waves/components/molecules/WaveBox/WaveBoxInterfaces";
import { WaveChart } from "@components/atoms/WaveChart/WaveChart";
import { WaveSettings } from "@features/waves/components/molecules/WaveSettings/WaveSettings";
import {
	WaveBoxChartWrapper,
	WaveBoxContent,
	WaveBoxFloatingButtonsWrapper,
	WaveBoxSettingsWrapper,
	WaveBoxWrapper,
} from "@features/waves/components/molecules/WaveBox/WaveBoxStyledComponents";
import { RemoveWaveButton } from "@features/waves/components/atoms/RemoveWaveButton";
import { DelayedEnableWrapper } from "@components/atoms/DelayedEnableWrapper/DelayedEnableWrapper";

//TODO check why WaveChart receives undefined dataPoints

// TODO: add minimize, open buttons and another panel with closed view

export const WaveBox: FC<IWaveBoxProps> = (props) => {
	const { wave, updateWave, removeWave } = props;

	// TODO: move RemoveButton to some floating panel?
	// TODO: Affirm Remove
	// TODO: disable remove button with delay

	return (
		<WaveBoxWrapper>
			<WaveBoxFloatingButtonsWrapper>
				<RemoveWaveButton removeWave={() => removeWave(wave)} />
			</WaveBoxFloatingButtonsWrapper>
			<WaveBoxContent>
				<WaveBoxChartWrapper>
					<WaveChart data={wave.dataPoints} />
				</WaveBoxChartWrapper>
				<WaveBoxSettingsWrapper>
					<WaveSettings wave={wave} updateWave={updateWave} />
				</WaveBoxSettingsWrapper>
			</WaveBoxContent>
		</WaveBoxWrapper>
	);
};
