import { createLazyFileRoute } from '@tanstack/react-router';
import { About } from '../../../pages';
import { getRouteAbout } from '../const/router';

export const Route = createLazyFileRoute(getRouteAbout())({
	component: About,
	pendingComponent: () => <div>Loading...</div>
});
