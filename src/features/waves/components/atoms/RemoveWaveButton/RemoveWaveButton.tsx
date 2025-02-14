import { IRemoveWaveButtonProps } from "@features/waves/components/atoms/RemoveWaveButton/RemoveWaveButtonInterfaces";
import { FC } from "react";

export const RemoveWaveButton: FC<IRemoveWaveButtonProps> = (props) => {
	const { removeWave } = props;

	return (
		<button
			className="flex items-center rounded-sm text-amber-100 w-4 h-4 justify-center cursor-pointer
			relative"
			onClick={() => removeWave()}
		>
			<span className="leading-3 h-full">🗑️</span>
		</button>
	);
};
