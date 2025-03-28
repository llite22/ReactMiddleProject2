export enum Theme {
	LIGHT = 'app_light_theme',
	DARK = 'app_dark_theme',
	ORANGE = 'app_orange_theme'
}

export enum AppLinkTheme {
	PRIMARY = 'primary',
	SECONDARY = 'secondary',
	RED = 'red'
}

export interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme | undefined;
}
