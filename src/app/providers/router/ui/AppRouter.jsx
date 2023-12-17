import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {
	authRoutes,
	publicRoutes as routeConfig,
} from 'shared/config/routerConfig/routerConfig';
import Layout from 'shared/ui/Layout';
import Loader from 'shared/ui/Loader';
import {createBrowserHistory} from 'history';
import ReactGA from 'react-ga';
import PrivatRoute from 'shared/config/PrivatRoute';
import PublicRoute from 'shared/config/PublicRoute';
import {LoginPage, RegistrationPage} from 'pages/Admin/AuthPages';
import AdminLayout from 'shared/ui/AdminLayout/ui/AdminLayout';
ReactGA.initialize('G-3XPXLTKPY2');

function logPageView() {
	ReactGA.set({page: window.location.pathname + window.location.search});
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const AppRouter = () => (
	<Suspense fallback={<Loader />}>
		<Routes history={createBrowserHistory()} onUpdate={logPageView}>
			<Route to="/" element={<Layout />}>
				{routeConfig.map(({Component, path}) => (
					<Route
						key={path}
						path={path}
						element={
							<div className="client-wrapper">{Component}</div>
						}
					/>
				))}
			</Route>

			{/* <Route path="/login" element={<PublicRoute restricted />}>
				<Route index element={<LoginPage />} />
			</Route>

			<Route path="/registration" element={<PublicRoute restricted />}>
				<Route index element={<RegistrationPage />} />
			</Route> */}

			<Route path="/" element={<PublicRoute restricted />}>
				<Route index path="/login" element={<LoginPage />} />
				<Route
					index
					path="/registration"
					element={<RegistrationPage />}
				/>
			</Route>

			<Route path="/admin" element={<PrivatRoute redirectTo="/login" />}>
				<Route path="/admin" element={<AdminLayout />}>
					{authRoutes.map(({Component, path, index, list}) => {
						if (!list) {
							return (
								<Route
									key={path}
									path={index ? null : path}
									index={index ? true : null}
									element={Component}
								/>
							);
						} else {
							return (
								<Route
									key={path}
									path={index ? null : path}
									index={index ? true : null}
									element={Component}>
									{list.map(
										({Component, path, index, list}) => {
											return (
												<Route
													key={path}
													path={index ? null : path}
													index={index ? true : null}
													element={Component}
												/>
											);
										}
									)}
								</Route>
							);
						}
					})}
				</Route>
			</Route>

			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</Suspense>
);

export default AppRouter;
