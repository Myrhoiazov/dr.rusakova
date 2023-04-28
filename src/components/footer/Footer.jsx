import { memo, useState } from 'react';
import Container from 'components/container';
import s from './Footer.module.scss';

const getFullYear = () => {
	return new Date().getFullYear();
};

const Footer = () => {
	// eslint-disable-next-line no-unused-vars
	const [year, setYear] = useState(() => getFullYear());

	return (
		<>
			<div className={s.container}>
				<Container>
					<div className={s.content}>
						<p className={s.text}>
							© {year} Dr. Rusakova | All Rights Reserved.
						</p>
					</div>
				</Container>
			</div>
		</>
	);
};

export default memo(Footer);
