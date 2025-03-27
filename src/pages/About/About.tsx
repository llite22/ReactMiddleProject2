import { useTranslation } from 'react-i18next';

export function AboutPage() {
	const { t } = useTranslation('about');
	return <div className="p-2">{t('О сайте')}</div>;
}
