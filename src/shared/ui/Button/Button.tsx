import cn from 'classnames';
import styles from './Button.module.css';
import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	className?: string;
	children: ReactNode;
	theme?: ThemeButton;
	square?: boolean;
	size?: ButtonSize;
	disabled?: boolean;
	fullWidth?: boolean;
}

export enum ThemeButton {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
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
