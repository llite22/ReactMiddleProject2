import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';
import path from 'path';
import svgr from 'vite-plugin-svgr';
import { analyzer } from 'vite-bundle-analyzer';

export default defineConfig(({ mode }) => ({
	plugins: [
		TanStackRouterVite({
			target: 'react',
			autoCodeSplitting: true,
			routesDirectory: './src/app/router/routes',
			generatedRouteTree: './src/app/router/routeTree.gen.ts'
		}),
		react(),
		svgr(),
		analyzer({
			analyzerMode: 'server',
			analyzerPort: 8888,
			openAnalyzer: true,
			summary: true
		})
	],
	resolve: {
		alias: {
			'@': path.resolve(__dirname, './src')
		}
	},
	define: {
		__IS_DEV__: JSON.stringify(mode === 'development')
	},
	build: {
		minify: mode === 'production', // Dev-сборка без минификации
		sourcemap: mode === 'development', // В dev включаем sourcemaps
		rollupOptions: {
			treeshake: mode === 'production' // Выключаем tree-shaking в dev
		}
	}
}));
