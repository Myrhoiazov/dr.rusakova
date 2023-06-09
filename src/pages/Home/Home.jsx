import { useTranslation } from 'react-i18next';
import { useEffect } from 'react';
import AOS from 'aos';
import '../../i18next';
import Container from 'components/container';
import Liza from '../../assets/dr-rusakova.png';
import AboutMe from 'pages/AboutMe/AboutMe';
import Contact from 'pages/Contact/Contact';
import Portfolio from 'pages/Portfolio/Portfolio';
import Footer from 'components/footer/Footer';
import 'aos/dist/aos.css';
import s from './Home.module.scss';
import ScrollUp from 'components/ScrollUp/ScrollUp';

const Home = () => {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 500,
			duration: 1500,
			easing: 'ease',
		});
	}, []);

	return (
		<>
			<ScrollUp />
			<Container>
				<section className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<p
								className={s.name_text}
								data-aos="fade-up"
								data-aos-delay="700"
							>
								{t('hero.hello')}
								<span className={s.name_accent}>
									{t('hero.hello-accent')}
								</span>
							</p>
							<h1 className={s.name} data-aos="fade-right">
								{t('hero.name')}
							</h1>
							<a href="#courses" className={s.buy}>
								{t('button.buy')}
							</a>
						</div>

						<p className={s.text}>{t('hero.text')}</p>
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
			<AboutMe />
			<Portfolio />
			<Contact />
			<Footer />
		</>
	);
};

export default Home;
