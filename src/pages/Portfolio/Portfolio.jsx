import AOS from 'aos';
import { useTranslation } from 'react-i18next';
import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import Container from 'components/container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import img3 from '../../assets/lips.jpg';
import '../../i18next';

const Portfolio = () => {
	const { t } = useTranslation();

	useEffect(() => {
		AOS.init({
			offset: 120,
			delay: 500,
			duration: 1500,
			easing: 'ease',
			once: false,
			mirror: false,
		});
	}, []);
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
					}}
				>
					<Typography
						variant="h4"
						sx={{
							fontSize: '48px',
							textAlign: 'center',
							fontWeight: 700,
							marginBottom: '60px',
							textTransform: 'uppercase',
						}}
					>
						{t('section.products')}
					</Typography>

					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							gap: 3,
						}}
					>
						<Card
							sx={{
								maxWidth: 400,
								backgroundColor: 'transparent',
								paddingBottom: 2,
							}}
							data-aos="fade-up"
							data-aos-delay="300"
						>
							<CardMedia
								component="img"
								alt={t('course_1.title')}
								height="140"
								image={img3}
							/>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										fontSize: '1.5rem',
										marginBottom: 3,
										fontWeight: 700,
										textTransform: 'uppercase',
										color: 'white',
									}}
								>
									{t('course_1.title')}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: '#ffffff8a',
									}}
								>
									{t('course_1.text')}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Button variant="outlined" size="small">
									{t('course_1.buy')}
								</Button>
								<Button variant="outlined" size="small">
									{t('course_1.link')}
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								maxWidth: 400,
								backgroundColor: 'transparent',
								paddingBottom: 2,
							}}
							data-aos="fade-up"
							data-aos-delay="400"
						>
							<CardMedia
								component="img"
								alt={t('course_2.title')}
								height="140"
								image={img3}
							/>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										fontSize: '1.5rem',
										marginBottom: 3,
										fontWeight: 700,
										textTransform: 'uppercase',
										color: 'white',

										minHeight: '72px',
									}}
								>
									{t('course_2.title')}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: '#ffffff8a',
									}}
								>
									{t('course_2.text')}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Button variant="outlined" size="small">
									{t('course_2.buy')}
								</Button>
								<Button variant="outlined" size="small">
									{t('course_2.link')}
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								maxWidth: 400,
								backgroundColor: 'transparent',
								paddingBottom: 2,
							}}
							data-aos="fade-up"
							data-aos-delay="500"
						>
							<CardMedia
								component="img"
								alt={t('course_3.title')}
								height="140"
								image={img3}
							/>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										fontSize: '1.5rem',
										marginBottom: 3,
										fontWeight: 700,
										textTransform: 'uppercase',
										color: 'white',
										minHeight: '72px',
									}}
								>
									{t('course_3.title')}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: '#ffffff8a',
									}}
								>
									{t('course_3.text')}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Button variant="outlined" size="small">
									{t('course_3.buy')}
								</Button>
								<Button variant="outlined" size="small">
									{t('course_3.link')}
								</Button>
							</CardActions>
						</Card>
						<Card
							sx={{
								maxWidth: 400,
								backgroundColor: 'transparent',
								paddingBottom: 2,
							}}
							data-aos="fade-up"
							data-aos-delay="600"
						>
							<CardMedia
								component="img"
								alt={t('course_4.title')}
								height="140"
								image={img3}
							/>
							<CardContent>
								<Typography
									gutterBottom
									sx={{
										fontSize: '1.2rem',
										marginBottom: 3,
										fontWeight: 700,
										textTransform: 'uppercase',
										color: 'white',

										minHeight: '72px',
									}}
								>
									{t('course_4.title')}
								</Typography>
								<Typography
									variant="body2"
									color="text.secondary"
									sx={{
										color: '#ffffff8a',
									}}
								>
									{t('course_4.text')}
								</Typography>
							</CardContent>
							<CardActions
								sx={{
									display: 'flex',
									justifyContent: 'space-between',
								}}
							>
								<Button variant="outlined" size="small">
									{t('course_4.buy')}
								</Button>
								<Button variant="outlined" size="small">
									{t('course_4.link')}
								</Button>
							</CardActions>
						</Card>
					</Box>
				</Box>
			</Container>
		</section>
	);
};

export default Portfolio;
