import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import { Button, ButtonSize, ThemeButton } from './Button';
import { Theme } from '@/app/providers/ThemeProvider';
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
		children: '>',
		theme: ThemeButton.OUTLINE
	}
};

export const OutlineDark: Story = {
	args: {
		children: '>',
		theme: ThemeButton.OUTLINE
	}
};

OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];

export const Clear: Story = {
	args: {
		children: '>',
		theme: ThemeButton.CLEAR
	}
};

export const SquareL: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.L
	}
};

export const SquareM: Story = {
	args: {
		children: '>',
		theme: ThemeButton.BACKGROUND_INVERTED,
		square: true,
		size: ButtonSize.XL
	}
};
