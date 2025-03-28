import type { Decorator } from '@storybook/react';
import {
	createMemoryHistory,
	createRootRoute,
	createRouter,
	RouterProvider
} from '@tanstack/react-router';

export const RouterDecorator: Decorator = (Story) => {
	return (
		<RouterProvider
			router={createRouter({
				history: createMemoryHistory(),
				routeTree: createRootRoute({
					component: Story
				})
			})}
		/>
	);
};
