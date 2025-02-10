import { FC } from "react";
import { MainLayout } from "@components/layouts/MainLayout/MainLayout";
import { WaveList } from "@features/waves/components/organisms/WaveList/WaveList";

export const HomePage: FC = () => {
	return (
		<MainLayout>
			<WaveList />
		</MainLayout>
	);
};
