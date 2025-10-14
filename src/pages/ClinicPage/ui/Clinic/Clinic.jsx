import {memo, useLayoutEffect, useMemo} from 'react';
import {gsap} from 'gsap';
import {classNames} from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/dr.rusakova-logo.png';
import s from './Clinic.module.scss';
import 'aos/dist/aos.css';
import {Link} from 'react-router-dom';
import {routeConfig} from 'shared/config/routerConfig/routerConfig';

import Liza from 'shared/assets/liza1.png';
import Kostya from 'shared/assets/kostya1.png';

const Clinic = ({className}) => {
	useLayoutEffect(() => {
		gsap.from('#logo', 2, {y: '100%', opacity: 0});
		gsap.from('#liza', 1.5, {x: '-100%', opacity: 0, delay: 0.3});
		gsap.from('#kostya', 1.5, {x: '100%', opacity: 0, delay: 0.3});
		gsap.from('#backdrop', 4, {opacity: 0});
	}, []);

	const routes = useMemo(() => {
		return Object.values(routeConfig)
			.filter(({path}) => path !== '/' && path !== '*')
			.map(({path, name}) => (
				<Link key={path} to={`/clinic${path}`} className="nav-link">
					{name}
				</Link>
			));
	}, []);

	return (
		<div className={classNames(s.Clinic, {}, [className])}>
			<div className={s.backdrop} id="backdrop"></div>
			<div className={s.inner}>
				<Link to="/" id="logo">
					<img src={Logo} alt="Dr Rusakova logo" width="150" height="150" />
				</Link>
			</div>
			<menu className={s.menu}>{routes}</menu>
			<img src={Liza} alt="" className={s.liza} id="liza" />
			<img src={Kostya} alt="" className={s.kostya} id="kostya" />
			{/* <HeroClinic /> */}
		</div>
	);
};

export default memo(Clinic);
