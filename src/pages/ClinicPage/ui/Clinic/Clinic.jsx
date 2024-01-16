import {memo, useEffect} from 'react';
import AOS from 'aos';
import AboutMe from 'widgets/AboutMe/AboutMe';
import Contact from 'widgets/Contact/Contact';
import Footer from 'components/footer/Footer';
import ScrollUp from 'components/ScrollUp/ScrollUp';
import 'aos/dist/aos.css';
import '../../../../i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Clinic.module.scss';
import HeaderClinic from 'widgets/HeaderClinic';
import {HeroClinic} from 'widgets/Hero';
import Works from 'widgets/Works';
import Reviews from 'widgets/Reviews';

const Clinic = ({className}) => {
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
			<HeaderClinic />
			<div className={classNames(s.Clinic, {}, [className])}>
				<ScrollUp />
				<HeroClinic />
				<AboutMe />
				<Works />
				<Reviews />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default memo(Clinic);
