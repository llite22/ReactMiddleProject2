import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '../../providers/ThemeProvider';
import cn from 'classnames';
import { Navbar } from '@/widgets';

export const Route = createRootRoute({
	component: () => {
		const { theme } = useTheme();

		return (
			<div className={cn('app', {}, [theme])}>
				<Navbar />
				<Outlet />
				<TanStackRouterDevtools />
			</div>
		);
	}
});
