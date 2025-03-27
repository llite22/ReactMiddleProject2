import { createLazyFileRoute } from '@tanstack/react-router';
import { getRouteIndex } from '../const/router';
import { HomePage } from '@/pages';

export const Route = createLazyFileRoute(getRouteIndex())({
	component: HomePage
});
