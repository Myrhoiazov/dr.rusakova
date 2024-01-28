import {memo} from 'react';
import Container from 'shared/ui/container';
import {useTranslation} from 'react-i18next';
import 'i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './AboutClinic.module.scss';

const AboutClinic = ({className}) => {
	const {t} = useTranslation();
	return (
		<div className={classNames(s.AboutCourses, {}, [className])} id="about">
			<Container>
				<div className={s.wrapper}>
					<h1 className={s.title}>{t('about.clinic.title')}</h1>
					<p className={s.subtitle}>{t('about.clinic.subtitle')}</p>
					<div className={s.content}>
						<div className={s.about} data-aos="fade-right">
							<p className={s.text}>{t('about.clinic.text1')}</p>
							<p className={s.text}>{t('about.clinic.text2')}</p>
							<p className={s.text}>{t('about.clinic.text3')}</p>
							<p className={s.text}>{t('about.clinic.text4')}</p>
							<p className={s.text}>{t('about.clinic.text5')}</p>
						</div>
					</div>
					<p className={s.text_name}>{t('hero.clinic.text')}</p>
				</div>
			</Container>
		</div>
	);
};

export default memo(AboutClinic);
