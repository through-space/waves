import { FC } from "react";
import { MainLayout } from "@components/layouts/MainLayout/MainLayout";
import { WaveList } from "@features/waves/WaveList";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<WaveList />
		</MainLayout>
	);
};
