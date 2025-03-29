import {
	Outlet,
	RouterProvider,
	createMemoryHistory,
	createRootRoute,
	createRoute,
	createRouter
} from '@tanstack/react-router';
import { render } from '@testing-library/react';
import { JSX } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18nForTests from '@/shared/config/i18n/i18nForTests';

function createTestRouter(component: () => JSX.Element) {
	const rootRoute = createRootRoute({
		component: Outlet
	});
	const componentRoute = createRoute({
		getParentRoute: () => rootRoute,
		path: '/',
		component
	});
	//@ts-ignore
	const router = createRouter({
		routeTree: rootRoute.addChildren([componentRoute]),
		history: createMemoryHistory(),
	});

	return router;
}

export function componentRender(component: () => JSX.Element) {
	const router = createTestRouter(component);
	return render(
		<I18nextProvider i18n={i18nForTests}>
			<RouterProvider router={router} />
		</I18nextProvider>
	);
}
