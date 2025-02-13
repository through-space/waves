import { IAddWaveButtonProps } from "@features/waves/components/atoms/AddWaveButton/AddWaveButtonInterfaces";
import { FC } from "react";
import { AddWaveButtonWrapper } from "@features/waves/components/atoms/AddWaveButton/AddWaveButtonStyledComponents";

export const AddWaveButton: FC<IAddWaveButtonProps> = (props) => {
	const { addWave } = props;

	return (
		<AddWaveButtonWrapper>
			<button onClick={() => addWave()}>+</button>
		</AddWaveButtonWrapper>
	);
};
