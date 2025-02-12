import { FC } from "react";
import { IFaderProps } from "@components/molecules/Fader/FaderInterfaces";
import { Range } from "@components/atoms/Range/Range";
import {
	FaderWrapper,
	VerticalRangeInputWrapper,
} from "@components/molecules/Fader/FaderStyledComponents";
import { SettingNumberDisplay } from "@components/atoms/SettingNumberDisplay/SettingNumberDisplay";
import { SettingTitle } from "@components/atoms/SettingTitle/SettingTitle";

export const Fader: FC<IFaderProps> = (props) => {
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
		<FaderWrapper>
			{displayValue && <SettingNumberDisplay value={value} />}
			<VerticalRangeInputWrapper>
				<Range
					value={value}
					onChange={onChange}
					min={min}
					max={max}
					step={step}
				/>
			</VerticalRangeInputWrapper>
			{title && <SettingTitle>{title}</SettingTitle>}
		</FaderWrapper>
	);
};
