import {useTranslation} from 'react-i18next';
import {useEffect} from 'react';
import AOS from 'aos';
import '../../../../i18next';
import Container from 'components/container';
import Liza from 'shared/assets/dr-rusakova.png';
import 'aos/dist/aos.css';
import s from './Home.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Link} from 'react-router-dom';

const Home = ({className}) => {
	const {t} = useTranslation();

	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 500,
			duration: 1500,
			easing: 'ease',
		});
	}, []);

	return (
		<div className={classNames(s.Home, {}, [className])}>
			<Container>
				<section className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<p
								className={s.name_text}
								data-aos="fade-up"
								data-aos-delay="700">
								{t('hero.hello')}
								<span className={s.name_accent}>
									{t('hero.hello-accent')}
								</span>
							</p>
							<h1 className={s.name} data-aos="fade-right">
								{t('hero.name')}
							</h1>
							<div className={s.buttons}>
								<Link to="clinic" className={s.buy}>
									{t('home-button.clinic')}
								</Link>
								<Link to="courses" className={s.buy}>
									{t('home-button.courses')}
								</Link>
							</div>
						</div>

						<p className={s.text}>{t('hero.clinic.text')}</p>
					</div>
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

export default Home;
