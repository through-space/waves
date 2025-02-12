import { FC } from "react";
import { ISampleRateInputProps } from "@features/waves/components/atoms/SampleRateInput/SampleRateInputInterfaces";
import { RangeRowInput } from "@components/molecules/RangeRowInput/RangeRowInput";
import { wavesConfig } from "@features/waves/config/consts";

export const SampleRateInput: FC<ISampleRateInputProps> = (props) => {
	const { sampleRate, updateSampleRate } = props;
	const { min, max, step } = wavesConfig.waveList.sampleRate;

	return (
		<RangeRowInput
			value={sampleRate}
			onChange={updateSampleRate}
			min={min}
			max={max}
			step={step}
			title={"Sample Rate"}
		/>
	);
};
