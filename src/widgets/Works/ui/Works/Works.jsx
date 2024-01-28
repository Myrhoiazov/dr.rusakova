import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Works.module.scss';
import Container from 'shared/ui/container';
import {useTranslation} from 'react-i18next';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {worksList} from './worksList';

const Works = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.Works, {}, [className])} id="work">
			<Container>
				<div className={s.inner_wrapper}>
					<h1 className={s.title}>{t('works.title')}</h1>
					<Splide
						options={{
							type: 'loop',
							drag: 'free',
							perPage: 4,
							pagination: false,
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
						{worksList.map((el) => {
							return (
								<SplideSlide key={el.img_link}>
									<div className={s.splideTest}>
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

export default memo(Works);
