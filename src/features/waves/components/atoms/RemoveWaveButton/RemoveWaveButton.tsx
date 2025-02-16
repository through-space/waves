import { IRemoveWaveButtonProps } from "@features/waves/components/atoms/RemoveWaveButton/RemoveWaveButtonInterfaces";
import React, { FC } from "react";
import { DelayedEnableWrapper } from "@components/atoms/DelayedEnableWrapper/DelayedEnableWrapper";
import { removeButtonDelay } from "@features/waves/components/atoms/RemoveWaveButton/RemoveWaveButtonConsts";

export const RemoveWaveButton: FC<IRemoveWaveButtonProps> = (props) => {
	const { removeWave } = props;

	return (
		<DelayedEnableWrapper delay={removeButtonDelay} opacity={30}>
			<button
				className={
					"flex items-center rounded-sm text-amber-100 w-4 h-4 " +
					"justify-center cursor-pointer relative "
				}
				onClick={() => removeWave()}
			>
				<span className="leading-3 h-full">🗑️</span>
			</button>
		</DelayedEnableWrapper>
	);
};
