import cn from 'classnames';
import styles from './AppLink.module.css';
import { Link, LinkProps } from '@tanstack/react-router';
import { ReactNode } from 'react';
import { AppLinkTheme } from '@/app/providers/ThemeProvider';

interface AppLinkProps extends LinkProps {
	className?: string;
	children: ReactNode;
	theme: AppLinkTheme.PRIMARY;
}

export const AppLink = ({
	to,
	className,
	children,
	theme,
	...otherProps
}: AppLinkProps) => {
	return (
		<Link
			{...otherProps}
			to={to}
			className={cn(styles.AppLink, {}, [className, styles[theme]])}
		>
			{children}
		</Link>
	);
};
