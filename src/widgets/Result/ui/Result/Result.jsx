import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Result.module.scss';
import Container from 'components/container';

const Result = ({className}) => {
	return (
		<div className={classNames(s.Result, {}, [className])}>
			<Container>
				<ul className={s.list}>
					<li className={s.item}>
						<div className={s.round}>
							<h2>8</h2>
						</div>
						<p className={s.text}> лет опыта</p>
					</li>
					<li className={s.item}>
						<div className={s.round}>
							<h2>8000+</h2>
						</div>
						<p className={s.text}>пациентов</p>
					</li>
					<li className={s.item}>
						<div className={s.round}>
							<h2>40+</h2>
						</div>
						<p className={s.text}>обучений</p>
					</li>
				</ul>
			</Container>
		</div>
	);
};

export default memo(Result);
