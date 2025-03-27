import { getRouteAbout, getRouteIndex } from '@/app/router/const/router';
import cn from 'classnames';
import styles from './Navbar.module.css';
import { AppLink } from '@/shared/ui';
import { AppLinkTheme } from '@/app/providers/ThemeProvider';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	const { t } = useTranslation();
	return (
		<div className={cn(styles.Navbar, className)}>
			<div className={styles.links}>
				<AppLink
					to={getRouteIndex()}
					theme={AppLinkTheme.PRIMARY}
					className={styles.mainLink}
				>
					{t('Главная')}
				</AppLink>
				<AppLink theme={AppLinkTheme.PRIMARY} to={getRouteAbout()}>
					{t('О сайте')}
				</AppLink>
			</div>
		</div>
	);
};
