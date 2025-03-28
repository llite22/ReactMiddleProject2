import type { Meta, StoryObj } from '@storybook/react';

import { ThemeSwitcher } from './ThemeSwitcher';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta = {
	title: 'widget/ThemeSwitcher',
	component: ThemeSwitcher,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} satisfies Meta<typeof ThemeSwitcher>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {}
};

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
