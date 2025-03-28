import cn from 'classnames';
import { Suspense } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/ui/Sidebar/Sidebar';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '@/app/providers/ThemeProvider';
import { PageLoader } from '../PageLoader/PageLoader';

export const AppLayout = () => {
	const { theme } = useTheme();

	return (
		<div className={cn('app', {}, [theme])}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />
				<div className={'contentPage'}>
					<Sidebar />
					<div className={'pageWrapper'}>
						<Outlet />
					</div>
					<TanStackRouterDevtools />
				</div>
			</Suspense>
		</div>
	);
};
