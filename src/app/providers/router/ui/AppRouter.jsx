import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loader from 'shared/ui/Loader';
import ReactGA from 'react-ga';
import {IntroPage} from 'pages/IntroPage';
import {ClinicPage, ClinicPagebyIdPage} from 'pages/ClinicPage';
import {ContactPage} from 'pages/ContactPage';

ReactGA.initialize('G-N27LHHPKG4');

function logPageView() {
	ReactGA.set({page: window.location.pathname + window.location.search});
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const AppRouter = () => (
	<Suspense fallback={<Loader />}>
		<Routes history={createBrowserHistory()} onUpdate={logPageView}>
			<Route index element={<IntroPage />} />
			<Route path="/clinic" element={<ClinicPage />} />
			<Route path="/clinic/:id" element={<ClinicPagebyIdPage />} />
			<Route path="/clinic/contacts" element={<ContactPage />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</Suspense>
);

export default AppRouter;
