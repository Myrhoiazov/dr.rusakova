import {useTranslation} from 'react-i18next';
import {useLayoutEffect} from 'react';
import {gsap} from 'gsap';
import Container from 'shared/ui/container';
import Liza from 'shared/assets/images/liza/liza_2.png';
import 'aos/dist/aos.css';
import s from './Home.module.scss';
import {classNames} from 'shared/lib/classNames/classNames';
import {Link} from 'react-router-dom';
import '../../../../i18next';

const Home = ({className}) => {
	const {t} = useTranslation();

	useLayoutEffect(() => {
		gsap.from('#text', 2, {x: '100%', opacity: 0});
		gsap.from('#photo', 1.5, {y: '100%', opacity: 0, delay: 0.3});
		gsap.from('#backdrop', 4, {opacity: 0});
		gsap.from('#buttons', 2, {y: '200px', opacity: 0});
		gsap.from('#name', 2, {y: '200px', opacity: 0, delay: 2});
	}, []);

	return (
		<div className={classNames(s.Home, {}, [className])}>
			<div className={s.backdrop} id="backdrop"></div>
			<Container>
				<section className={s.wrapper}>
					<div className={s.info_hero}>
						<div className={s.hero_title}>
							<h1
								className={s.name}
								// data-aos="fade-right"
								id="text">
								{t('home.title')}
							</h1>
							<div className={s.buttons} id="buttons">
								<Link to="clinic" className={s.buy}>
									{t('home-button.clinic')}
								</Link>
								<Link to="courses" className={s.buy}>
									{t('home-button.courses')}
								</Link>
								<Link to="cosmetics" className={s.buy}>
									[cosmetics]
								</Link>
							</div>
						</div>

						<p className={s.text} id="name">
							{t('hero.clinic.text')}
						</p>
					</div>
					<div className={s.thumb} id="photo">
						<img
							src={Liza}
							alt="Фото Лизы"
							width="600"
							className={s.heroImg}
						/>
					</div>
				</section>
			</Container>
		</div>
	);
};

export default Home;
