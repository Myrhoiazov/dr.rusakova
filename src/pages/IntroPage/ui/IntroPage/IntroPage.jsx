import {useTranslation} from 'react-i18next';
import {useLayoutEffect} from 'react';
import {gsap} from 'gsap';
import Intro from 'shared/assets/intro.png';
import Intro_Desctop from 'shared/assets/liza_kostya.png';
import {classNames} from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/dr.rusakova-logo.png';
import {Link} from 'react-router-dom';
import s from './IntroPage.module.scss';
import {useScreenDetector} from 'shared/lib/hooks/useScreenDetector';
import SeoHead from 'shared/ui/SeoHead';

const IntroPage = ({className}) => {
	const {t} = useTranslation();
	const {isMobile, isTablet} = useScreenDetector();

	useLayoutEffect(() => {
		gsap.from('#text', 2, {x: '100%', opacity: 0});
		gsap.from('#photo', 1.5, {y: '100%', opacity: 0, delay: 0.3});
		gsap.from('#backdrop', 4, {opacity: 0});
		gsap.from('#buttons', 2, {y: '200px', opacity: 0});
		gsap.from('#name', 2, {y: '60px', opacity: 0, delay: 2});
	}, []);

	return (
		<>
			<SeoHead
				title="Dr. Rusakova Clinic — Клініка дерматології та косметології"
				description="Клініка доктора Русакової: сучасна косметологія anti-aging, лікування вікових фотопошкоджень шкіри, ботулінотерапія, контурна пластика та інші процедури."
				path="/"
			/>
			<div className={classNames(s.IntroPage, {}, [className])}>
				<div className={s.backdrop} id="backdrop"></div>
				<div className={s.container}>
				<img
					src={Logo}
					alt="Dr Rusakova Logo"
					width={120}
					height={100}
					className={s.logo}
				/>
				<section className={s.wrapper}>
					<h1
						className={s.name}
						// data-aos="fade-right"
						id="text">
						RUSAKOVA
						<br />
						CLINIC
					</h1>
					<span className={s.nameaccent} id="name">
						{t('hero.clinic.text')}
					</span>

					<div className={s.info}>
						<div className={s.text}>
							Сучасна косметологія anti-aging та лікування вікових
							фото пошкоджень.
						</div>
						<div className={s.buttons} id="buttons">
							<Link to="clinic" className={s.buy}>
								{t('home-button.clinic')}
							</Link>
							{/* <Link to="courses" className={s.buy}>
								{t('home-button.courses')}
							</Link> */}
						</div>
					</div>
					{isTablet && (
						<div className={s.thumb} id="photo">
							<img
								src={Intro_Desctop}
								alt="Фото Лизы"
								width="500"
								className={s.heroImg}
							/>
						</div>
					)}
				</section>
			</div>
			{isMobile && (
				<div className={s.thumb} id="photo">
					<img
						src={Intro}
						alt="Фото Лизы"
						width="500"
						className={s.heroImg}
					/>
				</div>
			)}
		</div>
		</>
	);
};

export default IntroPage;
