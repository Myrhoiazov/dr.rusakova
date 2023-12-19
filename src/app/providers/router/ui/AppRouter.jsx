import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loader from 'shared/ui/Loader';
import Pacient from 'pages/Pacient';
import Courses from 'pages/Courses';
import ReactGA from 'react-ga';
import Home from 'pages/Home';

ReactGA.initialize('G-N27LHHPKG4');

function logPageView() {
	ReactGA.set({page: window.location.pathname + window.location.search});
	ReactGA.pageview(window.location.pathname + window.location.search);
}

const AppRouter = () => (
	<Suspense fallback={<Loader />}>
		<Routes history={createBrowserHistory()} onUpdate={logPageView}>
			<Route path="/" element={<Home />} />
			<Route path="pacient" element={<Pacient />} />
			<Route path="client" element={<Courses />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</Suspense>
);

export default AppRouter;
