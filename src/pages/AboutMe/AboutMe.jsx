import { useState } from 'react';
import ReactPlayer from 'react-player';
import Container from 'components/container';
import { useTranslation } from 'react-i18next';
import SplideComponent from 'components/Splide/SplideComponent';
import '../../i18next';
import Video from '../../assets/Promo_Insta.mp4';
import bckGround from '../../assets/bcg-video.jpg';
import s from './AboutMe.module.scss';

const AboutMe = () => {
	const [isPlay, setIsPlay] = useState(false);
	const { t } = useTranslation();

	return (
		<>
			<section id="about">
				<SplideComponent />
				<Container>
					<div className={s.wrapper}>
						<h1 className={s.title}>{t('about.title')}</h1>
						<div className={s.content}>
							<div className={s.about} data-aos="fade-right">
								<p className={s.text}>{t('about.text1')}</p>
								<p className={s.text}>{t('about.text2')}</p>
								<p className={s.text}>{t('about.text3')}</p>
							</div>
							<div
								className={s.videoWrapper}
								onClick={() => setIsPlay(!isPlay)}
								data-aos="fade-left"
							>
								<ReactPlayer
									url={Video}
									width="300px"
									height="533px"
									playing={isPlay}
									light={bckGround}
								/>
							</div>
						</div>
						<p className={s.text_name}>{t('hero.text')}</p>
					</div>
				</Container>
			</section>
		</>
	);
};

export default AboutMe;
