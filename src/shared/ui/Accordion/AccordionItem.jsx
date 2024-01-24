import {useRef} from 'react';
import s from './Accordion.module.scss';

const AccordionItem = ({question, answer, isOpen, onClick}) => {
	const contentHeight = useRef();
	return (
		<div className={s.wrapper}>
			<button
				className={`${s.question_container} ${isOpen ? s.active : ''}`}
				onClick={onClick}>
				<p className={s.question_content}>{question}</p>
				{/* <RiArrowDropDownLine
					className={`arrow ${isOpen ? 'active' : ''}`}
				/> */}
			</button>

			<div
				ref={contentHeight}
				className={s.answer_container}
				style={
					isOpen
						? {height: contentHeight.current.scrollHeight}
						: {height: '0px'}
				}>
				<p className={s.answer_content}>{answer}</p>
			</div>
		</div>
	);
};

export default AccordionItem;
