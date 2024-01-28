import React, {memo} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Map.module.scss';

const Map = ({className}) => {
	return (
		<div className={classNames(s.Map, {}, [className])}>
			<iframe
				src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10584.954749763914!2d35.0558126!3d48.4519497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x49055a3590cf6fcf%3A0x170884fd69cf0f59!2sDr.%20Rusakova%20Clinic!5e0!3m2!1sru!2sua!4v1705510805387!5m2!1sru!2sua"
				className={s.mapElement}
				allowFullScreen=""
				loading="lazy"
				id="studioMap"
				title="Studio Map"
				referrerPolicy="no-referrer-when-downgrade"></iframe>
		</div>
	);
};

export default memo(Map);
