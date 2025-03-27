import { createLazyFileRoute } from '@tanstack/react-router';
import { getRouteAbout } from '../const/router';
import { AboutPage } from '@/pages';

export const Route = createLazyFileRoute(getRouteAbout())({
	component: AboutPage,
});
