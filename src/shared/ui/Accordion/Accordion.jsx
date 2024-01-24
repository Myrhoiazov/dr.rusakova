import React, {memo, useState} from 'react';
import {classNames} from 'shared/lib/classNames/classNames';
import s from './Accordion.module.scss';
import AccordionList from './AccList';
import AccordionItem from './AccordionItem';

const Accordion = ({className}) => {
	const [activeIndex, setActiveIndex] = useState(null);

	const handleItemClick = (index) => {
		setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
	};
	return (
		<div className={classNames(s.Accordion, {}, [className])}>
			{AccordionList.map((item, index) => (
				<AccordionItem
					key={index}
					question={item.question}
					answer={item.answer}
					isOpen={activeIndex === index}
					onClick={() => handleItemClick(index)}
				/>
			))}
		</div>
	);
};

export default memo(Accordion);
