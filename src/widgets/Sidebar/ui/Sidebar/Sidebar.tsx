import cn from 'classnames';
import styles from './Sidebar.module.css';
import { useState } from 'react';
import { ThemeSwitcher } from '@/widgets';
import { LangSwitcher } from '@/widgets';

interface SidebarProps {
	className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
	const [collapsed, setCollapsed] = useState<boolean>(false);
	return (
		<div
			className={cn(styles.Sidebar, { [styles.collapsed]: collapsed }, [
				className
			])}
		>
			<button onClick={() => setCollapsed((prev) => !prev)}>
				toggle
			</button>
			<div className={styles.switchers}>
				<ThemeSwitcher />
				<LangSwitcher />
			</div>
		</div>
	);
};
