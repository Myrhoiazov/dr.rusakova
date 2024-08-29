import {memo} from 'react';
import Container from 'shared/ui/container';
import {useTranslation} from 'react-i18next';
import Cosmetics from 'shared/assets/cosmetics-Liza.png';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './AboutCosmetics.module.scss';
import 'i18next';

const AboutCosmetics = ({className}) => {
	const {t} = useTranslation();
	return (
		<div
			className={classNames(s.AboutCosmetics, {}, [className])}
			id="about">
			<Container>
				<div className={s.wrapper}>
					<div className={s.content}>
						<div className={s.thumb}>
							<img src={Cosmetics} alt="Liza Cosmetics" />
						</div>
						<div className={s.about} data-aos="fade-right">
							<p className={s.text}>
								{t('about.cosmetics.text1')}
							</p>
							<p className={s.text}>
								{t('about.cosmetics.text2')}
							</p>
							<p className={s.text}>
								{t('about.cosmetics.text3')}
							</p>
						</div>
					</div>
					<p className={s.text_name}>{t('hero.courses.text')}</p>
				</div>
			</Container>
		</div>
	);
};

export default memo(AboutCosmetics);
