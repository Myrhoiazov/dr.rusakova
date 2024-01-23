import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import Container from 'components/container';
import Liza from 'shared/assets/dr-rusakova.png';
import s from './HeroCourses.module.scss';
import '../../../../i18next';

const HeroClinic = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.HeroClinic, {}, [className])}>
			<Container>
				<section className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<p
								className={s.name_text}
								data-aos="fade-up"
								data-aos-delay="700">
								{t('hero.courses.hello')}
								<span className={s.name_accent}>
									{t('hero.courses.hello-accent')}
								</span>
							</p>
							<h1 className={s.name} data-aos="fade-right">
								{t('hero.courses.name')}
							</h1>
							<a href="#courses" className={s.buy}>
								{t('button.buy')}
							</a>
						</div>

						<p className={s.text}>{t('hero.courses.text')}</p>
					</div>
					<div className={s.hero}></div>
					<div className={s.thumb} data-aos="fade-left">
						<img
							src={Liza}
							alt="Фото Лизы"
							width="370"
							className={s.heroImg}
						/>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default memo(HeroClinic);
