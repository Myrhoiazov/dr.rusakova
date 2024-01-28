import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Reviews.module.scss';
import Container from 'shared/ui/container';
import {useTranslation} from 'react-i18next';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {reviewsList} from './ReviewsList';

const Reviews = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.Reviews, {}, [className])} id="reviews">
			<Container>
				<div className={s.inner_wrapper}>
					<h1 className={s.title}>{t('reviews.title')}</h1>
					<h1 className={s.text}>{t('reviews.text')}</h1>
					<Splide
						options={{
							type: 'loop',
							drag: 'free',
							perPage: 4,
							pagination: true,
							arrows: true,
							gap: '20px',
							breakpoints: {
								920: {
									perPage: 2,
								},
								640: {
									perPage: 1,
								},
							},
						}}>
						{reviewsList.map((el) => {
							return (
								<SplideSlide key={el.img_link}>
									<div className={s.splideWrap}>
										<img src={el.img_link} alt="" />
									</div>
								</SplideSlide>
							);
						})}
					</Splide>
				</div>
			</Container>
		</div>
	);
};

export default memo(Reviews);
