import type { Meta, StoryObj } from '@storybook/react';

import { Text, TextSize } from './Text';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';
import { TextTheme } from './Text';

const meta = {
	title: 'shared/Text',
	component: Text,
	tags: ['autodocs']
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
	args: {
		title: 'SADSA asdad asdas as',
		text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
		size: TextSize.L
	}
};

export const Error: Story = {
	args: {
		title: 'SADSA asdad asdas as',
		text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
		theme: TextTheme.ERROR
	}
};

export const OnlyTitle: Story = {
	args: {
		title: 'SADSA asdad asdas as',
		size: TextSize.S
	}
};

export const PrimaryDark: Story = {
	args: {
		title: 'SADSA asdad asdas as',
		text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm'
	}
};

PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const ErrorDark: Story = {
	args: {
		title: 'SADSA asdad asdas as',
		text: 'aslkmdsakmd kamsdksamd aksmdas kmdas dkm',
		theme: TextTheme.ERROR
	}
};

ErrorDark.decorators = [ThemeDecorator(Theme.DARK)];

export const OnlyTitleDark: Story = {
	args: {
		title: 'SADSA asdad asdas as'
	}
};

OnlyTitleDark.decorators = [ThemeDecorator(Theme.DARK)];
