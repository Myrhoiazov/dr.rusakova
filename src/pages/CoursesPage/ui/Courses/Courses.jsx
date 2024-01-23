import {memo, useEffect} from 'react';
import AOS from 'aos';
import Contact from 'widgets/Contact/Contact';
import Portfolio from 'widgets/Portfolio/Portfolio';
import Footer from 'components/footer/Footer';
import 'aos/dist/aos.css';
import ScrollUp from 'components/ScrollUp/ScrollUp';
import {classNames} from 'shared/lib/classNames/classNames';
import '../../../../i18next';
import s from './Courses.module.scss';
import HeaderCourses from 'widgets/HeaderCourses';
import {HeroCourses} from 'widgets/Hero';
import {AboutCourses} from 'widgets/AboutMe';

const Courses = ({className}) => {
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
				<HeroCourses />
				<AboutCourses />
				<Portfolio />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default memo(Courses);
