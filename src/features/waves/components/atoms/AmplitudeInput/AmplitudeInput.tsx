import { FC } from "react";
import { IAmplitudeInputProps } from "@features/waves/components/atoms/AmplitudeInput/AmplitudeInputInterfaces";
import { Fader } from "@components/molecules/Fader/Fader";
import { wavesConfig } from "@features/waves/config/consts";

export const AmplitudeInput: FC<IAmplitudeInputProps> = (props) => {
	const { amplitude, updateAmplitude } = props;
	const { min, max, step } = wavesConfig.wave.amplitude;

	return (
		<Fader
			min={min}
			max={max}
			step={step}
			title={"Amplitude"}
			value={amplitude}
			onChange={updateAmplitude}
		/>
	);
};
