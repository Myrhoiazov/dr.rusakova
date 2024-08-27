import {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Cosmetics.module.scss';

const Cosmetics = ({className}) => {
	return (
		<>
			<div className={classNames(s.Cosmetics, {}, [className])}>
				<h1>Cosmetics</h1>
			</div>
		</>
	);
};

export default memo(Cosmetics);
