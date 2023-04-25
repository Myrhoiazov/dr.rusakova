import React from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useTranslation } from 'react-i18next';
import '@splidejs/react-splide/css';
import s from './Splide.module.scss';

const SplideComponent = () => {
	const { t } = useTranslation();

	return (
		<div className={s.test}>
			<Splide
				options={{
					type: 'loop',
					drag: 'free',
					perPage: 3,
					pagination: false,
					autoScroll: {
						rewind: false,
						speed: 0.5,
					},
					arrows: false,
				}}
				extensions={{ AutoScroll }}
			>
				<SplideSlide>
					<p>{t('action.splide')}</p>
				</SplideSlide>
				<SplideSlide>
					<p>{t('action.splide')}</p>
				</SplideSlide>
				<SplideSlide>
					<p>{t('action.splide')}</p>
				</SplideSlide>
			</Splide>
		</div>
	);
};

export default SplideComponent;
