import {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Cosmetics.module.scss';
import HeaderCosmetics from 'widgets/HeaderCosmetics';
import Products from 'widgets/Products';
import {HeroCosmetics} from 'widgets/Hero';
import Contact from 'widgets/Contact';
import Footer from 'shared/ui/footer';
import {AboutCosmetics} from 'widgets/AboutMe';
import Brands from 'widgets/Brands';
import ScrollUp from 'shared/ui/ScrollUp/ScrollUp';

const Cosmetics = ({className}) => {
	return (
		<>
			<HeaderCosmetics />
			<div className={classNames(s.Cosmetics, {}, [className])}>
				<ScrollUp />
				<HeroCosmetics />
				<AboutCosmetics />
				<Brands />
				<Products />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default memo(Cosmetics);
