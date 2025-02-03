import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
			"@app": path.resolve(__dirname, "./src/app"),
			"@assets": path.resolve(__dirname, "./src/assets"),
			"@components": path.resolve(__dirname, "./src/components"),
			"@features": path.resolve(__dirname, "./src/features"),
			"@hooks": path.resolve(__dirname, "./src/hooks"),
			"@config": path.resolve(__dirname, "./src/config"),
			"@services": path.resolve(__dirname, "./src/services"),
		},
	},
	plugins: [react({})],
});
