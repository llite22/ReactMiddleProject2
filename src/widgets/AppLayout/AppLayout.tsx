import cn from 'classnames';
import styles from './AppLayout.module.css';
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
		<div className={cn(styles.app, {}, [theme])}>
			<Suspense fallback={<PageLoader />}>
				<Navbar />
				<div className={styles.contentPage}>
					<Sidebar />
					<div className={styles.pageWrapper}>
						<Outlet />
					</div>
					<TanStackRouterDevtools />
				</div>
			</Suspense>
		</div>
	);
};
