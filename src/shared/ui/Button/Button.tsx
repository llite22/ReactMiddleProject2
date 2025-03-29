import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';
import { ThemeButton } from '@/app/providers/ThemeProvider';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
}

export const enum ButtonSize {
	M = 'size_m',
	L = 'size_l',
	XL = 'size_xl'
}

export const Button = ({
	className,
	children,
	theme = ThemeButton.OUTLINE,
	square,
	disabled,
	size = ButtonSize.M,
	fullWidth,
	...otherProps
}: ButtonProps) => {
	const mods = {
		[styles.square]: square,
		[styles.disabled]: disabled,
		[styles.fullWidth]: fullWidth
	};

	return (
		<button
			type="button"
			className={cn(styles.Button, mods, [
				className,
				styles[theme],
				styles[size]
			])}
			disabled={disabled}
			{...otherProps}
		>
			{children}
		</button>
	);
};
