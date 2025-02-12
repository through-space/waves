import { IDurationsInputProps } from "@features/waves/components/atoms/DurationInput/DurationsInputInterfaces";
import { FC } from "react";
import { RangeRowInput } from "@components/molecules/RangeRowInput/RangeRowInput";
import { wavesConfig } from "@features/waves/config/consts";

export const DurationsInput: FC<IDurationsInputProps> = (props) => {
	const { duration, updateDuration } = props;
	const { min, max, step } = wavesConfig.waveList.duration;

	return (
		<RangeRowInput
			value={duration}
			onChange={updateDuration}
			min={min}
			max={max}
			step={step}
			title={"Interval"}
		/>
	);
};
