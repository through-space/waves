import { FC } from "react";
import { ISampleRateInputProps } from "@features/waves/components/atoms/SampleRateInput/SampleRateInputInterfaces";
import { waveListConfig } from "@features/waves/config/consts";
import { RangeRowInput } from "@components/molecules/RangeRowInput/RangeRowInput";

export const SampleRateInput: FC<ISampleRateInputProps> = (props) => {
	const { sampleRate, updateSampleRate } = props;
	const { min, max, step } = waveListConfig.sampleRate;

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
