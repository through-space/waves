import { FC } from "react";
import { SingleFeatureLayout } from "@components/layouts/MainLayout/SingleFeatureLayout";
import { Waves } from "@features/waves/components/organisms/Waves/Waves";

export const HomePage: FC = () => {
	return (
		<SingleFeatureLayout>
			<Waves />
		</SingleFeatureLayout>
	);
};
