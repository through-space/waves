import { FC } from "react";
import { IFrequencyInputProps } from "@features/waves/components/atoms/FrequencyInput/FrequencyInputInterfaces";
import { Fader } from "@components/molecules/Fader/Fader";
import { wavesConfig } from "@features/waves/config/consts";

export const FrequencyInput: FC<IFrequencyInputProps> = (props) => {
	const { frequency, updateFrequency } = props;
	const { min, max, step } = wavesConfig.wave.frequency;

	return (
		<Fader
			min={min}
			max={max}
			step={step}
			title={"Frequency"}
			value={frequency}
			onChange={updateFrequency}
		/>
	);
};
