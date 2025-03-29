import cn from 'classnames';
import styles from './Overlay.module.css';

interface OverlayProps {
	className?: string;
	onClick?: () => void;
}

export const Overlay = ({ className, onClick }: OverlayProps) => {
	return (
		<div
			onClick={onClick}
			className={cn(styles.Overlay, {}, [className])}
		/>
	);
};
