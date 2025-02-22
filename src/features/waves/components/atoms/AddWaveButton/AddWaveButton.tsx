import { FC } from "react";
import { AddWaveButtonWrapper } from "@features/waves/components/atoms/AddWaveButton/AddWaveButtonStyledComponents";
import { useAppDispatch } from "@app/hooks";
import { addWave } from "@features/waves/store/slices/wavesSlice/wavesSlice";
import {
	DEFAULT_WAVE,
	getRandomWaveID,
} from "@features/waves/store/slices/wavesSlice/wavesSliceConsts";

export const AddWaveButton: FC = () => {
	const dispatch = useAppDispatch();
	return (
		<AddWaveButtonWrapper>
			<button
				className="flex items-center rounded-full border border-amber-100 text-amber-100 w-10 h-10 justify-center opacity-10 hover:opacity-100 cursor-pointer"
				onClick={() =>
					dispatch(
						addWave({ ...DEFAULT_WAVE, id: getRandomWaveID() }),
					)
				}
			>
				<span className="text-4xl leading-8 h-full">+</span>
			</button>
		</AddWaveButtonWrapper>
	);
};
