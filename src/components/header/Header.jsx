import { useState, memo, Suspense, useEffect } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import headerMenu from './headermenu';
import Container from 'components/container';
import ToggleLang from 'components/toggle-lang';
import Loader from 'components/loader';
import '../../i18next';
import Logo from '../../assets/IMG_9363.PNG';
import s from '../header/header.module.scss';

const Header = () => {
	const { t } = useTranslation();
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
	const isShowBurgerMenu = useMediaQuery({ query: '(max-width: 1279px)' });
	const [isShowMenu, setIsShowMenu] = useState(false);
	const [isActive, setIsActive] = useState('');

	const linkTo = (to) => {
		setIsActive(to);
		window.location.href = to;
	};

	const onHandleShow = () => {
		setIsShowMenu(!isShowMenu);
	};

	const mobileShow = (to) => {
		setIsShowMenu(!isShowMenu);
		setIsActive(to);
		window.location.href = to;
	};

	const onClickBackground = (e) => {
		if (e.target === e.currentTarget) {
			setIsShowMenu(!isShowMenu);
		}
	};

	useEffect(()=>{

		if(isShowMenu){
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible'
		}

	}, [isShowMenu])

	return (
		<>
			<div className={s.flexWrapper}>
				<header className={s.header} id="home">
					<Container>
						<div className={s.wrapper}>
							<nav className={s.nav}>
								<a href="/dr.rusakova">
									<img
										src={Logo}
										alt=""
										width="150"
										height="150"
									/>
								</a>
								{isDesktop && <ToggleLang />}
								{isShowBurgerMenu && (
									<button
										type="button"
										className={s.btn_open}
										onClick={onHandleShow}
									>
										<MenuIcon
											color="inherit"
											fontSize="large"
										/>
									</button>
								)}
								{isDesktop &&
									headerMenu.map(({ name, to }) => {
										return (
											<div key={name}>
												<NavLink
													to={to}
													className={
														isActive === to
															? `${s.item} ${s.active}`
															: `${s.item}`
													}
													onClick={() => linkTo(to)}
												>
													{t(name)}
												</NavLink>
											</div>
										);
									})}
							</nav>
							{isShowBurgerMenu && (
								<nav
									onClick={onClickBackground}
									className={
										isShowMenu
											? `${s.nav_mobile} ${s.showMob}`
											: s.nav_mobile
									}
								>
									<div
										className={
											isShowMenu
												? `${s.nav_mobile_wrapper} ${s.show}`
												: s.nav_mobile_wrapper
										}
									>
										{
											<button
												type="button"
												className={s.btn_close}
												onClick={onHandleShow}
											>
												<CloseIcon
													color="inherit"
													fontSize="large"
												/>
											</button>
										}
										<div
											style={{
												marginBottom: 40,
												paddingTop: 20,
											}}
										>
											<ToggleLang />
										</div>

										{headerMenu.map(({ name, to }) => {
											return (
												<div
													key={name}
													className={s.link_items}
												>
													<NavLink
														to={to}
														end
														className={
															isActive === to
																? `${s.item} ${s.active}`
																: `${s.item}`
														}
														onClick={() =>
															mobileShow(to)
														}
													>
														{t(name)}
													</NavLink>

													<a
														href="/dr.rusakova"
														className={s.mobileLogo}
													>
														<img
															src={Logo}
															alt=""
															width="150"
															height="150"
														/>
													</a>
												</div>
											);
										})}
									</div>
								</nav>
							)}
						</div>
					</Container>
				</header>
			</div>
			<main className={s.main}>
				<Suspense fallback={<Loader />}>{<Outlet />}</Suspense>
			</main>
		</>
	);
};

export default memo(Header);
