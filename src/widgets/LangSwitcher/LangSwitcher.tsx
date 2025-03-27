import cn from 'classnames';
import { useTranslation } from 'react-i18next';
import { Button } from '@/shared/ui';
import { ThemeButton } from '@/app/providers/ThemeProvider';

interface LangSwitcherProps {
	className?: string;
	short?: boolean;
}

export const LangSwitcher = ({ className, short }: LangSwitcherProps) => {
	const { t, i18n } = useTranslation();

	const toggle = () => {
		i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
	};

	return (
		<div>
			<Button
				theme={ThemeButton.CLEAR}
				onClick={toggle}
				className={cn('', {}, [className])}
			>
				{t(short ? 'Короткий язык' : 'Язык')}
			</Button>
		</div>
	);
};
