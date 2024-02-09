import React, {memo} from 'react';
import ReactCompareImage from 'react-compare-image';
import {useTranslation} from 'react-i18next';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Works.module.scss';
import Container from 'shared/ui/container';
import {Splide, SplideSlide} from '@splidejs/react-splide';
import {worksList} from './worksList';

const Works = ({className}) => {
	const {t} = useTranslation();

	return (
		<div className={classNames(s.Works, {}, [className])} id="work">
			<Container>
				<div className={s.inner_wrapper}>
					<h2 className={s.title}>{t('works.title')}</h2>
					<p className={s.subtitle}>{t('works.subtitle')}</p>
					<Splide
						options={{
							type: 'loop',
							drag: false,
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
										{/* <img src={el.img_link} alt="" /> */}
										<ReactCompareImage
											leftImage={el.before}
											rightImage={el.affter}
										/>
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
