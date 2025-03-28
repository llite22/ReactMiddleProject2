import type { Meta, StoryObj } from '@storybook/react';
import { Loader } from './Loader';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta = {
	title: 'shared/Loader',
	component: Loader,
	tags: ['autodocs'],
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {}
};

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
