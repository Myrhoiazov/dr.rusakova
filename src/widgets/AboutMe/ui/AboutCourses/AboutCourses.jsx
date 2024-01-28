import {memo, useState} from 'react';
import ReactPlayer from 'react-player';
import Container from 'shared/ui/container';
import {useTranslation} from 'react-i18next';
import SplideComponent from 'shared/ui/Splide/SplideComponent';
import 'i18next';
import Video from 'shared/assets/Promo_Insta.mp4';
import bckGround from 'shared/assets/bcg-video.jpg';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './AboutCourses.module.scss';

const AboutCourses = ({className}) => {
	const [isPlay, setIsPlay] = useState(false);
	const {t} = useTranslation();
	return (
		<div className={classNames(s.AboutCourses, {}, [className])} id="about">
			<SplideComponent />
			<Container>
				<div className={s.wrapper}>
					<h1 className={s.title}>{t('about.courses.title')}</h1>
					<div className={s.content}>
						<div className={s.about} data-aos="fade-right">
							<p className={s.text}>{t('about.courses.text1')}</p>
							<p className={s.text}>{t('about.courses.text2')}</p>
							<p className={s.text}>{t('about.courses.text3')}</p>
						</div>
						<div
							className={s.videoWrapper}
							onClick={() => setIsPlay(!isPlay)}
							data-aos="fade-left">
							<ReactPlayer
								url={Video}
								width="300px"
								height="533px"
								playing={isPlay}
								light={bckGround}
							/>
						</div>
					</div>
					<p className={s.text_name}>{t('hero.courses.text')}</p>
				</div>
			</Container>
		</div>
	);
};

export default memo(AboutCourses);
