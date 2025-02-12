import { FC } from "react";
import { IFaderProps } from "@components/molecules/Fader/FaderInterfaces";
import { Range } from "@components/atoms/Range/Range";
import { SettingNumberDisplay } from "@components/atoms/SettingNumberDisplay/SettingNumberDisplay";
import { SettingTitle } from "@components/atoms/SettingTitle/SettingTitle";
import { RangeRowWrapper } from "@components/molecules/RangeRow/FaderStyledComponents";

export const RangeRow: FC<IFaderProps> = (props) => {
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
		<RangeRowWrapper>
			{title && <SettingTitle>{title}</SettingTitle>}
			<Range
				value={value}
				onChange={onChange}
				min={min}
				max={max}
				step={step}
			/>
			{displayValue && <SettingNumberDisplay value={value} />}
		</RangeRowWrapper>
	);
};
