import React, {memo, useLayoutEffect} from 'react';
import {gsap} from 'gsap';
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import InstagramIcon from '@mui/icons-material/Instagram';
import {classNames} from 'shared/lib/classNames/classNames';
import Logo from 'shared/assets/dr.rusakova-logo.png';
import Intro from 'shared/assets/intro.png';
import Intro_Desctop from 'shared/assets/liza_kostya.png';
import s from './ContactPage.module.scss';
import {Link} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {useScreenDetector} from 'shared/lib/hooks/useScreenDetector';
import SeoHead from 'shared/ui/SeoHead';

const ContactPage = ({className}) => {
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
		<div className={classNames(s.ContactPage, {}, [className])}>
			<SeoHead
				title="Контакти — Dr. Rusakova Clinic"
				description="Графік роботи клініки доктора Русакової, номер телефону для запису та Instagram. Понеділок–субота, 11:00–18:00."
				path="/clinic/contacts"
			/>
			<div className={s.backdrop} id="backdrop"></div>
			<div className={s.container}>
				<div className={s.inner}>
					<Link to="/" id="logo">
						<img
							src={Logo}
							alt="Dr Rusakova logo"
							width="150"
							height="150"
						/>
					</Link>
				</div>
				<div className={s.wrapper}>
					<div className={s.titleWrapper}>
						<h1 className={s.title}>Контакти</h1>
						<span className={s.nameaccent} id="name">
							{t('hero.clinic.text')}
						</span>
					</div>
					<div className={s.description} id="text">
						<h2>Графік роботи клініки</h2>
						<ul id="buttons">
							<li>
								<p>понеділок-субота з 11.00-18.00</p>
							</li>
							<li>
								<h3>Запис та відповідь на питання в діректі</h3>
								<p>понеділок - субота з 11.00-20.00</p>
							</li>
							<li>
								<h3>Запис через робочий мобільний телефон</h3>
								<p>з вівторка - суботу з 11.00-18.00</p>
							</li>
							<li>
								<h3>Вихідний день від запису через дірект</h3>
								<p>Неділя</p>
							</li>
							<li>
								<h3>
									вихідний від запису через мобільний телефон
								</h3>
								<p>Неділя та понеділок</p>
							</li>
							<li>
								<h3>Ми на зв'язку:</h3>
								<a href="tel:+380978070507">
									<PermPhoneMsgIcon className={s.icon} />
									+38 097 807 05 07
								</a>
							</li>
							<li>
								<a
									href="https://instagram.com/dr.rusakova.clinic"
									rel="noreferrer"
									target="_blank">
									<InstagramIcon className={s.icon} />
									Instagram
								</a>
							</li>
						</ul>
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
				</div>
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
	);
};

export default memo(ContactPage);
