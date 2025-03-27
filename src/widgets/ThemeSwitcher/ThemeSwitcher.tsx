import cn from 'classnames';
import { Theme, useTheme } from '@/app/providers/ThemeProvider';
import LightIcon from '@/shared/assets/icons/theme-light.svg?react';
import DarkIcon from '@/shared/assets/icons/theme-dark.svg?react';
import { Button } from '@/shared/ui';

interface ThemeSwitcherProps {
	className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {
	const { theme, toggleTheme } = useTheme();
	return (
		<Button className={cn('', {}, [className])} onClick={toggleTheme}>
			{theme === Theme.DARK ? <DarkIcon /> : <LightIcon />}
		</Button>
	);
};
