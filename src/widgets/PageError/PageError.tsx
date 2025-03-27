import cn from 'classnames';
import styles from './PageError.module.css';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';

interface PageErrorProps {
	className?: string;
}

export const PageError = ({ className }: PageErrorProps) => {
	const { t } = useTranslation();

	const reloadPage = () => {
		location.reload();
	};

	return (
		<div className={cn(styles.PageError, {}, [className])}>
			<p>{t('Произошла непредвиденная ошибка')}</p>
			<Button onClick={reloadPage}>{t('Обновить страницу')}</Button>
		</div>
	);
};
