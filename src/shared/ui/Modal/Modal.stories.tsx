import type { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';
import { Theme } from '@/app/providers/ThemeProvider';
import { ThemeDecorator } from '@/shared/config/storybook/ThemeDecorator';

const meta = {
	title: 'shared/Modal',
	component: Modal,
	tags: ['autodocs']
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const light: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum expedita est sint vel aspernatur enim excepturi, atque consectetur minus aliquid quam iste pariatur doloribus dolor, vitae dicta. Deserunt, omnis!'
	}
};

export const Dark: Story = {
	args: {
		isOpen: true,
		children:
			'Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eum expedita est sint vel aspernatur enim excepturi, atque consectetur minus aliquid quam iste pariatur doloribus dolor, vitae dicta. Deserunt, omnis!'
	}
};

Dark.decorators = [ThemeDecorator(Theme.DARK)];
