import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '../../providers/ThemeProvider';
import cn from 'classnames';
import { Navbar, Sidebar } from '@/widgets';
import { Suspense } from 'react';

export const Route = createRootRoute({
	component: () => {
		const { theme } = useTheme();

		return (
			<div className={cn('app', {}, [theme])}>
				<Suspense fallback={<>loading...</>}>
					<Navbar />
					<div className={'content-page'}>
						<Sidebar />
						<div className="page-wrapper">
							<Outlet />
						</div>
						<TanStackRouterDevtools />
					</div>
				</Suspense>
			</div>
		);
	}
});
