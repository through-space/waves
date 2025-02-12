import { IDurationsInputProps } from "@features/waves/components/atoms/DurationInput/DurationsInputInterfaces";
import { FC } from "react";
import { waveListConfig } from "@features/waves/config/consts";
import { RangeRow } from "@components/molecules/RangeRow/RangeRow";

export const DurationsInput: FC<IDurationsInputProps> = (props) => {
	const { duration, updateDuration } = props;
	const { min, max, step } = waveListConfig.duration;

	return (
		<RangeRow
			value={duration}
			onChange={updateDuration}
			min={min}
			max={max}
			step={step}
			title={"Interval"}
		/>
	);
};
