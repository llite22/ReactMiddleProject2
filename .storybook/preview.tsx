import type { Preview } from '@storybook/react';
import '../src/app/styles/index.css';
import { Theme } from '../src/app/providers/ThemeProvider/model/types/theme';
import { ThemeDecorator } from '../src/shared/config/storybook/ThemeDecorator';
import { RouterDecorator } from '../src/shared/config/storybook/RouterDecorator';

const preview: Preview = {
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},
	decorators: [RouterDecorator, ThemeDecorator(Theme.LIGHT)]
};

export default preview;
