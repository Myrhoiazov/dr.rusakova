import { useTranslation } from 'react-i18next';
import '../../i18next';
import Container from 'components/container';
import Liza from '../../assets/IMG_0419.JPG';
import AboutMe from 'pages/AboutMe/AboutMe';
import Contact from 'pages/Contact/Contact';
import Portfolio from 'pages/Portfolio/Portfolio';
import s from './Home.module.scss';

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Container>
				<section className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<p className={s.name_text}>
								{t('hero.hello')}
								<span className={s.name_accent}>
									{t('hero.hello-accent')}
								</span>
							</p>
							<h1 className={s.name}>{t('hero.name')}</h1>
							<a href="#course" className={s.buy}>
								{t('button.buy')}
							</a>
						</div>

						<p className={s.text}>{t('hero.text')}</p>
					</div>
					<div className={s.hero}></div>
					<img
						src={Liza}
						alt="Фото Лизы"
						width="500"
						className={s.heroImg}
					/>
				</section>
			</Container>
			<AboutMe />
			<Portfolio />
			<Contact />
		</>
	);
};

export default Home;
