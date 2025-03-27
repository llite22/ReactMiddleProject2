import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ThemeButton } from '@/app/providers/ThemeProvider';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton;
}

export const Button = ({
	className,
	children,
	theme = ThemeButton.CLEAR,
	...otherProps
}: ButtonProps) => {
	return (
		<button
			{...otherProps}
			className={cn(styles.Button, {}, [className, styles[theme]])}
		>
			{children}
		</button>
	);
};
