import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { useTheme } from '../../providers/ThemeProvider';

export const Route = createRootRoute({
	component: () => {
		const { theme, toggleTheme } = useTheme();
		return (
			<div className={`app ${theme}`}>
				<button onClick={toggleTheme}>Тема</button>
				<div>
					<Link to="/">Home</Link>
					<Link to="/about">About</Link>
				</div>
				<hr />
				<Outlet />
				<TanStackRouterDevtools />
			</div>
		);
	}
});
