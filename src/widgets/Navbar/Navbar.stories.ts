import type { Meta, StoryObj } from '@storybook/react';
import { Navbar } from './Navbar';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { Theme } from '@/app/providers/ThemeProvider';

const meta = {
	title: 'widget/Navbar',
	component: Navbar,
	tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {}
};

export const Dark: Story = {
	args: {}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
