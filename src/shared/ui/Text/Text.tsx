import cn from 'classnames';
import styles from './Text.module.css';

export enum TextTheme {
	PRIMARY = 'primary',
	INVERTED = 'inverted',
	ERROR = 'error'
}

export enum TextAlign {
	RIGHT = 'right',
	LEFT = 'left',
	CENTER = 'center'
}

export enum TextSize {
	S = 'size_s',
	M = 'size_m',
	L = 'size_l'
}

interface TextProps {
	className?: string;
	title?: string;
	text?: string;
	theme?: TextTheme;
	align?: TextAlign;
	size?: TextSize;
}

type HeaderTagType = 'h1' | 'h2' | 'h3';

const mapSizeToHeaderTag: Record<TextSize, HeaderTagType> = {
	[TextSize.S]: 'h3',
	[TextSize.M]: 'h2',
	[TextSize.L]: 'h1'
};

export const Text = ({
	className,
	title,
	text,
	theme = TextTheme.PRIMARY,
	align = TextAlign.LEFT,
	size = TextSize.M
}: TextProps) => {
	const HeaderTag = mapSizeToHeaderTag[size];
	const mods = {
		[styles[theme]]: true,
		[styles[align]]: true,
		[styles[size]]: true
	};

	return (
		<div className={cn(styles.Text, mods, [className])}>
			{title && <HeaderTag className={styles.title}>{title}</HeaderTag>}
			{text && <p className={styles.text}>{text}</p>}
		</div>
	);
};
