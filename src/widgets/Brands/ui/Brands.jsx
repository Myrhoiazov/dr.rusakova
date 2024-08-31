import React, {memo, useEffect, useMemo, useState} from 'react';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {classNames} from 'shared/lib/classNames/classNames';
import Container from 'shared/ui/container';
import 'i18next';
import s from './Brands.module.scss';
import {useTranslation} from 'react-i18next';

const Brands = ({className}) => {
	const [brands, setBrands] = useState([]);
	const {t, i18n} = useTranslation();

	useEffect(() => {
		let res = t('brands.list', {returnObjects: true});
		setBrands(res);
	}, [i18n.language, t]);

	const brandsGallery = useMemo(() => {
		return brands.map((brand, i) => {
			return (
				<SplideSlide key={brand.brandName}>
					<div className={s.thumb}>
						<img
							alt={brand.brandName}
							src={`assets/brands/${brand.brandImg}`}
							className={s.splideTest}
						/>
					</div>
				</SplideSlide>
			);
		});
	}, [brands]);

	return (
		<div className={classNames(s.Brands, {}, [className])} id="brands">
			<div className={s.swiperWrapper}>
				<Container>
					<h2 className={s.title}>{t('brands.title')}</h2>
				</Container>
				<Splide
					options={{
						type: 'loop',
						drag: 'free',
						perPage: 4,
						pagination: false,
						arrows: false,
						breakpoints: {
							640: {
								perPage: 1,
							},
						},
					}}>
					{brandsGallery}
				</Splide>
			</div>
		</div>
	);
};

export default memo(Brands);
