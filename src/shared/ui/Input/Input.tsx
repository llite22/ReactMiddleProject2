import cn from 'classnames';
import styles from './Input.module.css';
import {
	ChangeEvent,
	InputHTMLAttributes,
	SyntheticEvent,
	useEffect,
	useRef,
	useState
} from 'react';

type HTMLInputProps = Omit<
	InputHTMLAttributes<HTMLInputElement>,
	'value' | 'onChange' | 'readOnly'
>;

interface InputProps extends HTMLInputProps {
	className?: string;
	value?: string | number;
	onChange?: (value: string) => void;
	type?: string;
	placeholder?: string;
	autofocus?: boolean;
	readonly?: boolean;
}

export const Input = ({
	className,
	value,
	onChange,
	type = 'text',
	placeholder,
	autofocus,
	readonly,
	...otherProps
}: InputProps) => {
	const [isFocused, setIsFocused] = useState<boolean>(false);
	const [caretPosition, setCaretPosition] = useState<number>(0);
	const ref = useRef<HTMLInputElement>(null);

	const isCaretVisible = isFocused && !readonly;

	useEffect(() => {
		if (autofocus) {
			setIsFocused(true);
			ref.current?.focus();
		}
	}, [autofocus]);

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		onChange?.(e.target.value);
		setCaretPosition(e.target.value.length);
	};

	const onBlur = () => {
		setIsFocused(false);
	};

	const onFocus = () => {
		setIsFocused(true);
	};

	const onSelect = (e: SyntheticEvent<HTMLInputElement>) => {
		const target = e.target as HTMLInputElement;
		setCaretPosition(target.selectionStart || 0);
	};

	return (
		<div
			className={cn(styles.Input, { [styles.readonly]: readonly }, [
				className
			])}
		>
			<div className={styles.placeholder}>{`${placeholder}>`}</div>
			<div className={styles.caretWrapper}>
				<input
					type={type}
					value={value}
					onChange={onChangeHandler}
					className={styles.input}
					onFocus={onFocus}
					onBlur={onBlur}
					onSelect={onSelect}
					ref={ref}
					readOnly={readonly}
					{...otherProps}
				/>
				{isCaretVisible && (
					<span
						className={styles.caret}
						style={{ left: `${caretPosition * 9}px` }}
					/>
				)}
			</div>
		</div>
	);
};
