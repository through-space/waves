import { FC } from "react";
import { IPhaseInputProps } from "@features/waves/components/atoms/PhaseInput/PhaseInputInterfaces";
import { wavesConfig } from "@features/waves/config/consts";
import { Fader } from "@components/molecules";

export const PhaseInput: FC<IPhaseInputProps> = (props) => {
	const { phase, updatePhase } = props;
	const { min, max, step } = wavesConfig.wave.phase;

	return (
		<Fader
			min={min}
			max={max}
			step={step}
			title={"Phase"}
			value={Math.round(phase * 100) / 100}
			onChange={updatePhase}
		/>
	);
};
