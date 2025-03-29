import cn from 'classnames';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets';
import { LangSwitcher } from '@/widgets';
import { AppLink, Button, ButtonSize } from '@/shared/ui';
import { AppLinkTheme, ThemeButton } from '@/app/providers/ThemeProvider';
import { getRouteAbout, getRouteIndex } from '@/app/router/const/router';
import { useTranslation } from 'react-i18next';
import AboutIcon from '@/shared/assets/icons/about.svg?react';
import MainIcon from '@/shared/assets/icons/main.svg?react';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	const { t } = useTranslation();

	const onToggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid="sidebar"
			className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className
			])}
		>
			<Button
				data-testid="sidebar-toggle"
				className={styles.collapseBtn}
				onClick={onToggle}
				theme={ThemeButton.BACKGROUND_INVERTED}
				square
				size={ButtonSize.L}
			>
				{collapsed ? '>' : '<'}
			</Button>
			<div className={styles.item}>
				<div className={styles.item}>
					<MainIcon className={styles.icon} />
					<AppLink
						to={getRouteIndex()}
						theme={AppLinkTheme.PRIMARY}
						className={styles.mainLink}
					>
						{t('Главная')}
					</AppLink>
				</div>
				<div className={styles.item}>
					<AboutIcon className={styles.icon} />
					<AppLink theme={AppLinkTheme.PRIMARY} to={getRouteAbout()}>
						{t('О сайте')}
					</AppLink>
				</div>
			</div>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
