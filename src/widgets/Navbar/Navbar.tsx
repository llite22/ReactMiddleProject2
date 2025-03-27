import { getRouteAbout, getRouteIndex } from '@/app/router/const/router';
import cn from 'classnames';
import styles from './Navbar.module.css';
import { AppLink, AppLinkTheme } from '@/shared/ui';
import { ThemeSwitcher } from '../ThemeSwitcher/ThemeSwitcher';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={cn(styles.Navbar, className)}>
			<ThemeSwitcher />
			<div className={styles.links}>
				<AppLink
					to={getRouteIndex()}
					theme={AppLinkTheme.PRIMARY}
					className={styles.mainLink}
				>
					Home
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={getRouteAbout()}>
					About
				</AppLink>
			</div>
		</div>
	);
};
