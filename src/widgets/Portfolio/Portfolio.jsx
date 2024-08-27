import {useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Typography} from '@mui/material';
import Container from 'shared/ui/container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import '../../i18next';
import s from './Portfolio.module.scss';

const Portfolio = () => {
	const [courses, setCourses] = useState([]);
	const {t, i18n} = useTranslation();

	useEffect(() => {
		let res = t('courses.list', {returnObjects: true});
		setCourses(res);
	}, [i18n.language, t]);

	return (
		<section id="courses">
			<Container>
				<Box
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						padding: '50px 0',
					}}>
					<Typography
						variant="h2"
						sx={{
							fontSize: '48px',
							textAlign: 'center',
							fontWeight: 700,
							marginBottom: '10px',
							textTransform: 'uppercase',
						}}>
						{t('courses.title')}
					</Typography>
					<Typography
						variant="h4"
						sx={{
							fontSize: '18px',
							textAlign: 'center',
							fontWeight: 300,
							marginBottom: '60px',
							maxWidth: '600px',
						}}>
						{t('courses.subtitle')}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							gap: 3,
						}}>
						{courses.map((item, index) => (
							<Card
								key={item.title}
								sx={{
									maxWidth: 350,
									display: 'flex',
									flexDirection: 'column',
									backgroundColor: 'transparent',
									paddingBottom: 2,
								}}
								data-aos="fade-up"
								data-aos-delay="300">
								<CardMedia
									component="img"
									alt={item.title}
									height="140"
									image={`assets/course/${item.img}`}
								/>
								<CardContent
									sx={{
										display: 'flex',
										flexDirection: 'column',
										height: '100%',
									}}>
									<Typography
										gutterBottom
										sx={{
											fontSize: '1.2rem',
											marginBottom: 3,
											fontWeight: 700,
											textTransform: 'uppercase',
											color: 'white',
										}}>
										{item.title}
									</Typography>
									<Typography
										variant="body2"
										color="text.secondary"
										sx={{
											color: '#ffffff8a',
											flexShrink: 1,
										}}>
										- {item.description['1']}
									</Typography>
									{item.description['2'] && (
										<Typography
											variant="body2"
											color="text.secondary"
											sx={{
												color: '#ffffff8a',
												flexShrink: 1,
											}}>
											- {item.description['2']}
										</Typography>
									)}
									<Typography
										variant="h4"
										sx={{
											fontSize: '24px',
											textAlign: 'right',
											fontWeight: 700,
											marginTop: 'auto',
											color: 'white',
											textTransform: 'uppercase',
										}}>
										{item.price}
									</Typography>
								</CardContent>
								<CardActions className={s.buttons}>
									<a
										href="tel:+380(99)7438404"
										className={s.buy}>
										{t('courses.link')}
										<PhoneEnabledIcon />
									</a>
								</CardActions>
							</Card>
						))}
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default Portfolio;
