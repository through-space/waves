import { FC } from "react";
import { IControllerInputProviderProps } from "@features/waves/providers/ControllerInputProvider/ControllerInputProviderInterfaces";

export const ControllerInputProvider: FC<IControllerInputProviderProps> = ({
	children,
}) => {
	return <>{children}</>;
};
