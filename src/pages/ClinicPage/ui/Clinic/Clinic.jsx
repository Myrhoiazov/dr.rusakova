import {memo, useEffect} from 'react';
import AOS from 'aos';
import Contact from 'widgets/Contact/Contact';
import Footer from 'shared/ui/footer/Footer';
import ScrollUp from 'shared/ui/ScrollUp/ScrollUp';
import 'aos/dist/aos.css';
import '../../../../i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Clinic.module.scss';
import HeaderClinic from 'widgets/HeaderClinic';
import {HeroClinic} from 'widgets/Hero';
import Works from 'widgets/Works';
import Reviews from 'widgets/Reviews';
import {AboutClinic} from 'widgets/AboutMe';
import Result from 'widgets/Result';
import Price from 'widgets/Price';
import ImageGallery from 'widgets/ImageGallery';

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
		<div className={classNames(s.Clinic, {}, [className])}>
			<div className={s.backdrop} id="backdrop"></div>
			<div className={s.inner}>
				<HeaderClinic />
				<ScrollUp />
				<HeroClinic />
				<AboutClinic />
				<Result />
				<Works />
				<Reviews />
				<Price />
				<ImageGallery />
				<Contact />
				<Footer />
			</div>
		</div>
	);
};

export default memo(Clinic);
