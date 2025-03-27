import { createLazyFileRoute } from '@tanstack/react-router';
import { Index } from '../../../pages';
import { getRouteIndex } from '../const/router';

export const Route = createLazyFileRoute(getRouteIndex())({
	component: Index
});
