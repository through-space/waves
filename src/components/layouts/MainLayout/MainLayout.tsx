import { FC } from "react";
import { IMainLayoutProps } from "@components/layouts/MainLayout/MainLayoutInterfaces";

export const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
	return <>{children}</>;
};
