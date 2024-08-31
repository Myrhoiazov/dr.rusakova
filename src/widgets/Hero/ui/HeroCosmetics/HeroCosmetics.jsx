import React, {memo} from 'react';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import Container from 'shared/ui/container';
import Liza from 'shared/assets/liza-cosmetics.png';
import s from './HeroCosmetics.module.scss';
import '../../../../i18next';

const HeroCosmetics = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.HeroCosmetics, {}, [className])}>
			<Container>
				<section className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<p className={s.name_text}>
								{t('hero.cosmetics.hello')}
								<span className={s.name_accent}>
									{t('hero.cosmetics.hello-accent')}
								</span>
							</p>
							<h1 className={s.name}>
								{t('hero.cosmetics.name')}
							</h1>
						</div>

						<p className={s.text}>{t('hero.cosmetics.text')}</p>
					</div>
					<div className={s.thumb}>
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

export default memo(HeroCosmetics);
