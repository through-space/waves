import { FC } from "react";
import { SingleFeatureLayout } from "@components/layouts/MainLayout/SingleFeatureLayout";
import { WaveList } from "@features/waves/components/organisms/WaveList/WaveList";

export const HomePage: FC = () => {
	return (
		<SingleFeatureLayout>
			<WaveList />
		</SingleFeatureLayout>
	);
};
