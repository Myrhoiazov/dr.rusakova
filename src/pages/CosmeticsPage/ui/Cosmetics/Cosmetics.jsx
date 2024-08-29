import {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Cosmetics.module.scss';
import HeaderCosmetics from 'widgets/HeaderCosmetics';
import Products from 'widgets/Products';
import {HeroCosmetics} from 'widgets/Hero';
import Contact from 'widgets/Contact';
import Footer from 'shared/ui/footer';

const Cosmetics = ({className}) => {
	return (
		<>
			<HeaderCosmetics />
			<div className={classNames(s.Cosmetics, {}, [className])}>
				<HeroCosmetics />
				<Products />
				<Contact />
				<Footer />
			</div>
		</>
	);
};

export default memo(Cosmetics);
