import { createLazyFileRoute } from '@tanstack/react-router';
import { About } from '../../../pages';


export const Route = createLazyFileRoute('/about')({
	component: About,
	pendingComponent: () => <div>Loading...</div>
});
