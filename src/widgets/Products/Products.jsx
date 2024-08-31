import {memo, useEffect, useMemo, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {Box, Button, Typography} from '@mui/material';
import Container from 'shared/ui/container';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import '../../i18next';
import s from './Products.module.scss';
import Modal from 'shared/ui/Modals/Modal';

const Products = () => {
	const [products, setProducts] = useState([]);
	const [productId, setProductId] = useState(null);
	const [isOpen, setIsOpen] = useState(false);
	const {t, i18n} = useTranslation();

	useEffect(() => {
		let res = t('cosmetics.list', {returnObjects: true});
		setProducts(res);
	}, [i18n.language, t]);

	const productsGallery = useMemo(() => {
		return products.map((item, index) => (
			<Card
				key={item.id}
				sx={{
					maxWidth: 350,
					width: '100%',
					display: 'flex',
					flexDirection: 'column',
					backgroundColor: 'transparent',
					paddingBottom: 2,
				}}>
				<Box
					sx={{
						position: 'relative',
						paddingBottom: '100%',
						overflow: 'hidden',
						borderRadius: '7px',
					}}>
					<CardMedia
						sx={{
							position: 'absolute',
							top: 0,
							bottom: 0,
							left: 0,
							right: 0,
							objectFit: 'cover',
							objectPosition: 'center',
						}}
						component="img"
						alt={item.title}
						height="140"
						image={`assets/cosmetics/${item.img}`}
					/>
				</Box>
				<CardContent
					sx={{
						display: 'flex',
						flexDirection: 'column',
						height: '100%',
						padding: '16px 0',
					}}>
					<Typography
						gutterBottom
						sx={{
							color: '#ffffff8a',
							textTransform: 'uppercase',
							fontSize: 18,
						}}>
						{item.liters}
					</Typography>
					<Typography
						gutterBottom
						sx={{
							fontSize: '1.2rem',
							marginBottom: 2,
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
							marginBottom: 2,
						}}>
						{item.subtitle}
					</Typography>

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
				<CardActions
					className={s.buttons}
					sx={{
						padding: 0,
						textTransform: 'lowercase',
					}}>
					<Button
						onClick={() => getProduct(item.id)}
						className={s.btn}
						sx={{
							fontSize: 16,
							textTransform: 'inherit',
							fontWeight: 'normal',
							border: 'none',
							color: 'rgb(202, 151, 61)',
							opacity: 0.5,
						}}>
						{t('cosmetics.link')}
					</Button>
				</CardActions>
			</Card>
		));
	}, [products, t]);

	const closeModal = () => {
		setProductId('');
		setIsOpen(false);
		document.body.style.overflow = '';
	};

	const getProduct = (id) => {
		setProductId(id);
		setIsOpen(true);
		document.body.style.overflow = 'hidden';
	};

	const selectProduct = useMemo(() => {
		return products.find(({id}) => id === productId);
	}, [productId, products]);

	return (
		<section id="products">
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
						{t('cosmetics.title')}
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
						{t('cosmetics.subtitle')}
					</Typography>
					<Box
						sx={{
							display: 'flex',
							flexWrap: 'wrap',
							justifyContent: 'center',
							gap: 3,
							width: '100%',
						}}>
						{productsGallery}
					</Box>
					<CardActions className={s.buttons}>
						<a href="tel:+380(99)7438404" className={s.buy}>
							{t('courses.link')}
							<PhoneEnabledIcon />
						</a>
					</CardActions>
				</Box>
			</Container>
			<Modal
				lazy
				isOpen={isOpen}
				onClose={closeModal}
				className={s.imgModal}>
				{selectProduct && (
					<div className={s.modal}>Yes {productId}</div>
				)}
			</Modal>
		</section>
	);
};

export default memo(Products);
