import cn from 'classnames';
import styles from './Navbar.module.css';

interface NavbarProps {
	className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
	return (
		<div className={cn(styles.Navbar, className)}>
			<div className={styles.links}>/</div>
		</div>
	);
};
