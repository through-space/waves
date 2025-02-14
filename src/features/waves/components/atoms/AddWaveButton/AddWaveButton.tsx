import { IAddWaveButtonProps } from "@features/waves/components/atoms/AddWaveButton/AddWaveButtonInterfaces";
import { FC } from "react";
import { AddWaveButtonWrapper } from "@features/waves/components/atoms/AddWaveButton/AddWaveButtonStyledComponents";

export const AddWaveButton: FC<IAddWaveButtonProps> = (props) => {
	const { addWave } = props;

	return (
		<AddWaveButtonWrapper>
			<button
				className="flex items-center rounded-full border border-amber-100 text-amber-100 w-10 h-10 justify-center opacity-10 hover:opacity-100 cursor-pointer"
				onClick={() => addWave()}
			>
				<span className="text-4xl leading-8 h-full">+</span>
			</button>
		</AddWaveButtonWrapper>
	);
};
