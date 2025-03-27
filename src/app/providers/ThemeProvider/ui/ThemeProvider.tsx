import { useState, useMemo, ReactNode } from 'react';
import { Theme } from '../model/types/theme';
import { ThemeContext } from '../model/context/ThemeContext';
import { LOCAL_STORAGE_THEME_KEY } from '../model/const/theme';



const defaultTheme =
	(localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme) || Theme.LIGHT;

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme, setTheme] = useState<Theme>(defaultTheme);

	const defaultProps = useMemo(
		() => ({
			theme: theme,
			setTheme: setTheme
		}),
		[theme]
	);

	return (
		<ThemeContext.Provider value={defaultProps}>
			{children}
		</ThemeContext.Provider>
	);
};
export default ThemeProvider;
