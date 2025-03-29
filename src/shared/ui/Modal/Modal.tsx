import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './Modal.module.css';
import { Portal } from '../Portal/Portal';
import { useModal } from '@/shared/lib/hooks/useModal/useModal';
import { Overlay } from '../Overlay/Overlay';
import cn from 'classnames';

interface ModalProps {
	className?: string;
	children?: React.ReactNode;
	isOpen?: boolean;
	onClose?: () => void;
	lazy?: boolean;
}

const ANIMATION_DEALY = 300;

export const Modal = ({
	className,
	children,
	isOpen,
	onClose,
	lazy
}: ModalProps) => {
	const { close, isClosing, isMounted } = useModal({
		animationDelay: ANIMATION_DEALY,
		onClose,
		isOpen
	});
	const { theme } = useTheme();

	const mods = {
		[styles.opened]: isOpen,
		[styles.isClosing]: isClosing
	};

	if (lazy && !isMounted) {
		return null;
	}

	return (
		<Portal>
			<div className={cn(styles.Modal, mods, [className, theme])}>
				<Overlay onClick={close} />
				<div className={styles.content}>{children}</div>
			</div>
		</Portal>
	);
};
