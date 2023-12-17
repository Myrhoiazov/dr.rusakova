import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom';
import {lazy} from 'react';
import Header from 'components/header';

const HomePage = lazy(() => import('../pages/Home'));

export const App = () => {
	return (
		<BrowserRouter basename="/">
			<Routes>
				<Route element={<Header />}>
					<Route path="/" element={<HomePage />} />
					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
};
