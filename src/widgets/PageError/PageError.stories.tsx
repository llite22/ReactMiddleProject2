import type { Meta, StoryObj } from '@storybook/react';
import { PageError } from './PageError';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
	title: 'widget/PageError',
	component: PageError,
	tags: ['autodocs'],
	argTypes: {
		backgroundColor: { control: 'color' }
	}
} satisfies Meta<typeof PageError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {}
};

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
