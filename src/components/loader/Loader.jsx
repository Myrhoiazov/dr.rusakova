import style from './Loader.module.scss';
import { ThreeDots } from 'react-loader-spinner';

function Loader() {
	return (
		<div className={style.wrapper}>
			<ThreeDots color="#e7b4a8" />
		</div>
	);
}

export default Loader;
