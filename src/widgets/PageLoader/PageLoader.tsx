import cn from 'classnames';
import styles from './PageLoader.module.css';
import { Loader } from '@/shared/ui';

interface PageLoaderProps {
	className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
	return (
		<div className={cn(styles.PageLoader, {}, [className])}>
			<Loader />
		</div>
	);
};
