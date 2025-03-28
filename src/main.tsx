import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createRouter } from '@tanstack/react-router';
import './app/styles/index.css';
import './shared/config/i18n/i18n';

// Import the generated route tree
import { routeTree } from './app/router/routeTree.gen';
import { ThemeProvider } from './app/providers/ThemeProvider';
import { PageLoader } from './widgets/PageLoader/PageLoader';
import { NotFoundPage } from './pages';
import { PageError } from './widgets/PageError/PageError';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// Create a new router instance
const router = createRouter({
	routeTree,
	defaultPendingComponent: () => <PageLoader />,
	defaultNotFoundComponent: () => <NotFoundPage />,
	defaultErrorComponent: () => <PageError />
});

// Register the router instance for type safety
declare module '@tanstack/react-router' {
	interface Register {
		router: typeof router;
	}
}

// Render the app
const rootElement = document.getElementById('root')!;
if (!rootElement.innerHTML) {
	const root = ReactDOM.createRoot(rootElement);
	root.render(
		<StrictMode>
			<ThemeProvider>
				<QueryClientProvider client={queryClient}>
					<RouterProvider router={router} />
				</QueryClientProvider>
			</ThemeProvider>
		</StrictMode>
	);
}
