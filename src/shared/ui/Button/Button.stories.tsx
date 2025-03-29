import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button } from './Button';
import { Theme, ThemeButton } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta = {
	title: 'shared/Button',
	component: Button,
	tags: ['autodocs'],
	args: { onClick: fn() }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Outline: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE
	}
};

export const OutlineDark: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.OUTLINE
	}
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
	args: {
		children: 'Text',
		theme: ThemeButton.CLEAR
	}
};
