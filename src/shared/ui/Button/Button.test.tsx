import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button component', () => {
	test('renders with children', () => {
		render(<Button>Click me</Button>);
		expect(screen.getByText('Click me')).toBeInTheDocument();
	});

	test('renders with children', () => {
		render(<Button theme={ThemeButton.CLEAR}>Click me</Button>);
		expect(screen.getByText('Click me')).toHaveClass('clear');
		screen.debug();
	});
});
