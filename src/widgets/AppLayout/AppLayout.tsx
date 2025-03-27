import cn from 'classnames';
import styles from './AppLayout.module.css';
import { Suspense } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { Sidebar } from '../Sidebar/ui/Sidebar/Sidebar';
import { Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '@/app/providers/ThemeProvider';

export const AppLayout = () => {
	const { theme } = useTheme();
	return (
		<div className={cn(styles.app, {}, [theme])}>
			<Suspense fallback={<>loading...</>}>
				<Navbar />
				<div className="content-page">
					<Sidebar />
					<div className="page-wrapper">
						<Outlet />
					</div>
					<TanStackRouterDevtools />
				</div>
			</Suspense>
		</div>
	);
};
