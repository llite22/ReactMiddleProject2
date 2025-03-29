import { useCallback, useEffect, useRef, useState } from 'react';

interface useModalProps {
	onClose?: () => void;
	isOpen?: boolean;
	animationDelay: number;
}

export function useModal({ onClose, isOpen, animationDelay }: useModalProps) {
	const [isClosing, setIsClosing] = useState<boolean>(false);
	const [isMounted, setIsMounted] = useState<boolean>(false);
	const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);

	useEffect(() => {
		if (isOpen) {
			setIsMounted(true);
		}
	}, [isOpen]);

	const close = useCallback(() => {
		if (onClose) {
			setIsClosing(true);
			timeRef.current = setTimeout(() => {
				onClose();
				setIsClosing(false);
			}, animationDelay);
		}
	}, [onClose, animationDelay]);

	const onKeyDown = useCallback(
		(e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				close();
			}
		},
		[close]
	);

	useEffect(() => {
		if (isOpen) {
			window.addEventListener('keydown', onKeyDown);
		}
		return () => {
			if (timeRef.current !== null) {
				clearTimeout(timeRef.current);
			}
			window.removeEventListener('keydown', onKeyDown);
		};
	}, [isOpen, onKeyDown]);

	return {
		isClosing,
		isMounted,
		close
	};
}
