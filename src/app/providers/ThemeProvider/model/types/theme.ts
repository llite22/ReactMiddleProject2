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

export enum ThemeButton {
	CLEAR = 'clear',
	CLEAR_INVERTED = 'clearInverted',
	OUTLINE = 'outline',
	OUTLINE_RED = 'outline_red',
	BACKGROUND = 'background',
	BACKGROUND_INVERTED = 'backgroundInverted'
}

export interface UseThemeResult {
	toggleTheme: () => void;
	theme: Theme | undefined;
}
