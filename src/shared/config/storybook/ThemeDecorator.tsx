import { Theme } from '@/app/providers/ThemeProvider';
import type { Decorator } from '@storybook/react';

export const ThemeDecorator = (theme: Theme): Decorator => {
	return (Story) => (
		<div className={`app ${theme}`}>
			<Story />
		</div>
	);
};
