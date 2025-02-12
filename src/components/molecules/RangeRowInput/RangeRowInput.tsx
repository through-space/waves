import { FC } from "react";
import { Range } from "@components/atoms/Range/Range";
import { SettingNumberDisplay } from "@components/atoms/SettingNumberDisplay/SettingNumberDisplay";
import { SettingTitle } from "@components/atoms/SettingTitle/SettingTitle";
import { RangeRowInputWrapper } from "@components/molecules/RangeRowInput/RangeRowInputStyledComponents";
import { IRangeRowProps } from "@components/molecules/RangeRowInput/RangeRowInterfaces";

export const RangeRowInput: FC<IRangeRowProps> = (props) => {
	const {
		value,
		onChange,
		min,
		max,
		displayValue = true,
		step,
		title,
	} = props;
	return (
		<RangeRowInputWrapper>
			{title && <SettingTitle>{title}</SettingTitle>}
			<Range
				value={value}
				onChange={onChange}
				min={min}
				max={max}
				step={step}
			/>
			{displayValue && <SettingNumberDisplay value={value} />}
		</RangeRowInputWrapper>
	);
};
