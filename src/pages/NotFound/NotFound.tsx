import cn from 'classnames';
import styles from './NotFound.module.css';
import { useTranslation } from 'react-i18next';

interface NotFoundPageProps {
	className?: string;
}

export const NotFoundPage = ({ className }: NotFoundPageProps) => {
	const { t } = useTranslation();
	return (
		<div className={cn(styles.NotFoundPage, {}, [className])}>
			{t('Страница не найдена')}
		</div>
	);
};
