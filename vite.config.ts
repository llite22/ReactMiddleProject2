import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

// https://vite.dev/config/
export default defineConfig({
	plugins: [
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: './src/app/router/routes',
			generatedRouteTree: './src/app/router/routeTree.gen.ts'
		}),
		react()
	]
});
