import cn from 'classnames';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets';
import { LangSwitcher } from '@/widgets';
import { Button } from '@/shared/ui';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const { t } = useTranslation();
	const [collapsed, setCollapsed] = useState<boolean>(false);

	const toggle = () => setCollapsed((prev) => !prev);

	return (
		<div
			data-testid="sidebar"
			className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className
			])}
		>
			<Button data-testid="sidebar-toggle" onClick={toggle}>
				{t('Переключатель')}
			</Button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
