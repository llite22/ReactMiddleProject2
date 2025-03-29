import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta = {
	title: 'shared/Input',
	component: Input,
	tags: ['autodocs']
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
	args: {
		placeholder: 'Enter text',
		value: 'Enter text',
		readonly: true
	}
};

export const Dark: Story = {
	args: {
		placeholder: 'Enter text',
		value: 'Enter text',
		readonly: true
	}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
