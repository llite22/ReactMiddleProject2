import { useTranslation } from 'react-i18next';

export function HomePage() {
	const { t } = useTranslation();
	return <div className="p-2">{t('Главная')}</div>;
}
