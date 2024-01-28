import React, {Suspense} from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {createBrowserHistory} from 'history';
import Loader from 'shared/ui/loader';
import Clinic from 'pages/ClinicPage';
import Courses from 'pages/CoursesPage';
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
			<Route path="clinic" element={<Clinic />} />
			<Route path="courses" element={<Courses />} />
			<Route path="*" element={<Navigate to="/" />} />
		</Routes>
	</Suspense>
);

export default AppRouter;
