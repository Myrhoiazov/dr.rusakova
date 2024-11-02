import React, {memo, useEffect, useState} from 'react';
import {gsap} from 'gsap';

import {classNames} from 'shared/lib/classNames/classNames';
import s from './Result.module.scss';
import Container from 'shared/ui/container';
import {useTranslation} from 'react-i18next';
import 'i18next';

const Result = ({className}) => {
	const [isIntersected, setIsIntersected] = useState(false);
	const {t} = useTranslation();

	useEffect(() => {
		const resultEl = document.getElementById('result');
		const data = document.querySelectorAll('[data-action]');

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting && !isIntersected) {
					// Элемент видим во вьюпорте

					setIsIntersected(true);

					data.forEach((elem) => {
						if (elem.dataset.action === 'left') {
							console.log('yes');
							gsap.from(`[data-action="left"]`, 1, {
								x: '-200px',
								opacity: 0,
								delay: 0.5,
							});
						}

						if (elem.dataset.action === 'center') {
							console.log('yes');
							gsap.from(`[data-action="center"]`, 1, {
								y: '200px',
								opacity: 0,
								delay: 0.5,
							});
						}

						if (elem.dataset.action === 'right') {
							console.log('yes');
							gsap.from(`[data-action="right"]`, 1, {
								x: '200px',
								opacity: 0,
								delay: 0.5,
							});
						}
					});
				} else {
					// Элемент не видим во вьюпорте
				}
			});
		});

		observer.observe(resultEl);

		return () => {
			observer.disconnect();
		};
	}, [isIntersected]);

	return (
		<div className={classNames(s.Result, {}, [className])} id="result">
			<Container>
				<ul className={s.list}>
					<li className={s.item} data-action="left">
						<div className={s.round}>
							<h2>8</h2>
						</div>
						<p className={s.text}> {t('result.year')}</p>
					</li>
					<li className={s.item} data-action="center">
						<div className={s.round}>
							<h2>8000+</h2>
						</div>
						<p className={s.text}>{t('result.pacient')}</p>
					</li>
					<li className={s.item} data-action="right">
						<div className={s.round}>
							<h2>40+</h2>
						</div>
						<p className={s.text}>{t('result.study')}</p>
					</li>
				</ul>
			</Container>
		</div>
	);
};

export default memo(Result);
