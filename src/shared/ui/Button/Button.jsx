import {classNames} from 'shared/lib/classNames/classNames';
import s from './Button.module.scss';

const Button = ({children, onClick, className}) => {
	return (
		<button
			type="button"
			className={classNames(s.btn, {}, [className])}
			onClick={onClick}>
			{children}
		</button>
	);
};

export default Button;
