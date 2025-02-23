import { IRemoveWaveButtonProps } from "@features/waves/components/atoms/RemoveWaveButton/RemoveWaveButtonInterfaces";
import React, { FC } from "react";
import { useAppDispatch } from "@app/hooks";
import { removeWave } from "@features/waves/store/slices/wavesSlice/wavesSlice";

export const RemoveWaveButton: FC<IRemoveWaveButtonProps> = ({ waveID }) => {
	const dispatch = useAppDispatch();

	return (
		// <DelayedEnableWrapper delay={removeButtonDelay} opacity={30}>
		<button
			className={
				"flex items-center rounded-sm text-amber-100 w-4 h-4 " +
				"justify-center cursor-pointer relative "
			}
			onClick={() => dispatch(removeWave(waveID))}
		>
			<span className="leading-3 h-full">🗑️</span>
		</button>
		// </DelayedEnableWrapper>
	);
};
