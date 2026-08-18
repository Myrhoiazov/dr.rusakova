import React, {
	memo,
	useCallback,
	useEffect,
	useLayoutEffect,
	useState,
} from 'react';
import {gsap} from 'gsap';
import {classNames} from 'shared/lib/classNames/classNames';
import {Link, useNavigate, useParams} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import Loader from 'shared/ui/Loader';
import Logo from 'shared/assets/dr.rusakova-logo.png';
import Intro_Desctop from 'shared/assets/kostya_2.png';
import s from './ClinicPagebyId.module.scss';
import Button from 'shared/ui/Button';
import {routeConfig} from 'shared/config/routerConfig/routerConfig';
import SeoHead from 'shared/ui/SeoHead';
import {SITE_URL} from 'shared/config/seo/seoConfig';

const ClinicPagebyId = ({className}) => {
	const [project, setProject] = useState([]);
	const [isMore, setIsMore] = useState(false);
	const {id: idParams} = useParams();
	const {t} = useTranslation();
	const navigate = useNavigate();
	const [isShowMenu, setIsShowMenu] = useState(false);

	const projectItem = useCallback(
		(res) => {
			const item = res.filter((elem) => elem.id.toString() === idParams);
			if (!item || item.length <= 0) {
				navigate('/');
				return;
			} else {
				setProject(item[0]);
			}
		},
		[idParams, navigate]
	);

	const onHandleShow = () => {
		setIsShowMenu(!isShowMenu);
	};

	const onClickBackground = (e) => {
		if (e.target === e.currentTarget) {
			setIsShowMenu(!isShowMenu);
		}
	};

	const renderImage = useCallback((sourse) => {
		const targetImage = `/assets/clinics/${sourse}`;
		return targetImage;
	}, []);

	useLayoutEffect(() => {
		gsap.from('#header', 2, {x: '100%', opacity: 0});
		gsap.from('#name', 2, {y: '60px', opacity: 0, delay: 2});
		gsap.from('#photo', 1.5, {y: '100%', opacity: 0, delay: 0.3});
		gsap.from('#backdrop', 4, {opacity: 0});
		gsap.from('#desc', 2, {y: '200px', opacity: 0});
		gsap.from('#text', 3, {y: '200px', opacity: 0, delay: 0.8});
		gsap.from('#text2', 3, {y: '200px', opacity: 0, delay: 0.8});
	}, []);

	useEffect(() => {
		let res = t('clinic', {returnObjects: true});
		projectItem(res);
	}, [projectItem, t, idParams]);

	const priceList = useCallback(
		(list) => {
			const price = list.map((elem) => {
				return (
					<div className={s.priceWrapper}>
						<p>
							<DoneIcon />
							{elem?.title}
						</p>
						<span>{elem?.price}</span>
					</div>
				);
			});
			return price;
		},

		[]
	);

	const handlerChangeMenu = useCallback(() => {
		setIsShowMenu(false);
	}, []);

	const navigation = useCallback(
		({name, path}) => {
			if (path === '/' || path === '*') return null;

			const isActive = '/' + idParams === path ? s.active : null;

			return (
				<div key={name} className={s.link_items}>
					<Link
						onClick={handlerChangeMenu}
						to={`/clinic${path}`}
						className={`${s.item} ${isActive}`}>
						{t(name)}
					</Link>
				</div>
			);
		},
		[t, idParams, handlerChangeMenu]
	);

	if (!project) {
		return <Loader />;
	}

	return (
		<div className={classNames(s.ClinicPagebyId, {}, [className])}>
			{project?.title && (
				<SeoHead
					title={`${project.title} — Dr. Rusakova Clinic`}
					description={project.seoDescription || project.subtitle}
					path={`/clinic/${idParams}`}
					image={
						project.image
							? `${SITE_URL}${renderImage(project.image)}`
							: undefined
					}
				/>
			)}
			<div
				className={s.backdrop}
				id="backdrop"
				style={{
					backgroundImage: `url(${renderImage(project?.image)})`,
				}}></div>
			<div className={s.container}>
				<div className={s.inner}>
					<Link to="/" id="logo">
						<img
							src={Logo}
							alt="Dr Rusakova logo"
							width="120"
							height="120"
						/>
					</Link>
					<button
						type="button"
						className={s.btn_open}
						onClick={onHandleShow}>
						<MenuIcon color="inherit" fontSize="large" />
					</button>
					<nav
						onClick={onClickBackground}
						className={
							isShowMenu
								? `${s.nav_mobile} ${s.showMob}`
								: s.nav_mobile
						}>
						<div
							className={
								isShowMenu
									? `${s.nav_mobile_wrapper} ${s.show}`
									: s.nav_mobile_wrapper
							}>
							{
								<button
									type="button"
									className={s.btn_close}
									onClick={onHandleShow}>
									<CloseIcon
										color="inherit"
										fontSize="large"
									/>
								</button>
							}
							<div className={s.navLinks}>
								{Object.values(routeConfig).map(navigation)}
							</div>

							<Link to="/clinic" className={s.mobileLogo}>
								<img
									src={Logo}
									alt="logo"
									width="150"
									height="150"
								/>
							</Link>
						</div>
					</nav>
				</div>
				<div className={s.wrapper}>
					<div className={s.titleWrapper}>
						<h1 className={s.title} id="header">
							{project.title}
						</h1>
						<span className={s.nameaccent} id="name">
							{t('hero.clinic.text')}
						</span>
					</div>
					<p className={s.subtitle} id="desc">
						{project.subtitle}
					</p>
					<div className={s.description} id="text">
						<h2>{project.course?.title}</h2>
						<p>{project.course?.desc}</p>
					</div>
					<div className={s.description} id="text2">
						{project.description?.map((elem) => {
							return (
								<div className={s.data}>
									<h2>{elem.title}</h2>
									<p>{elem.text}</p>
								</div>
							);
						})}
					</div>
					{!isMore && (
						<Button
							className={s.lodeMoreBtn}
							onClick={() => setIsMore(true)}>
							{t('More')}
						</Button>
					)}
					{isMore && (
						<div
							className={classNames(
								s.more,
								{[s.more]: isMore},
								[]
							)}>
							<div className={s.description}>
								<h2>{project.contraindications?.title}</h2>
								<ul>
									{project.contraindications?.list?.map(
										(elem) => {
											return (
												<li>
													<p>
														<DoneIcon />
														{elem}
													</p>
												</li>
											);
										}
									)}
								</ul>
							</div>
							<div className={s.description}>
								<h2>{project.rehabilitation?.title}</h2>
								<ul>
									{project.rehabilitation?.list?.map(
										(elem) => {
											return (
												<li>
													<p>
														<DoneIcon />
														{elem}
													</p>
												</li>
											);
										}
									)}
								</ul>
							</div>
							<div className={s.description}>
								<h2>{project.result?.title}</h2>
								<ul>
									{project.result?.list?.map((elem) => {
										return (
											<li>
												<p>
													<DoneIcon />
													{elem}
												</p>
											</li>
										);
									})}
								</ul>
							</div>
							<div className={s.description}>
								<h2>{project.price?.title}</h2>
								{project.price?.description && (
									<p>{project.price?.description}</p>
								)}
								<ul>
									{project.price?.priceList?.map((elem) => {
										return (
											<li className={s.price}>
												{elem.title && (
													<h2>{elem.title}</h2>
												)}
												{priceList?.(elem.list)}
											</li>
										);
									})}
								</ul>
							</div>
						</div>
					)}

					<div
						className={classNames(
							s.thumb,
							{[s.active]: isMore},
							[]
						)}
						id="photo">
						<img
							src={Intro_Desctop}
							alt="Фото Лизы"
							width="500"
							className={s.heroImg}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default memo(ClinicPagebyId);
