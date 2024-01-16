import {useTranslation} from 'react-i18next';
import {memo, useEffect} from 'react';
import AOS from 'aos';
import Container from 'components/container';
import Liza from 'shared/assets/dr-rusakova.png';
import AboutMe from 'widgets/AboutMe/AboutMe';
import Contact from 'widgets/Contact/Contact';
import Portfolio from 'widgets/Portfolio/Portfolio';
import Footer from 'components/footer/Footer';
import 'aos/dist/aos.css';
import ScrollUp from 'components/ScrollUp/ScrollUp';
import {classNames} from 'shared/lib/classNames/classNames';
import '../../../../i18next';
import s from './Courses.module.scss';
import HeaderCourses from 'widgets/HeaderCourses';

const Courses = ({className}) => {
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
		<>
			<HeaderCourses />
			<div className={classNames(s.Courses, {}, [className])}>
				<ScrollUp />
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
				<AboutMe />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default memo(Courses);
