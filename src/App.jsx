import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from 'components/header';

const HomePage = lazy(() => import('./pages/Home'));
const AboutMe = lazy(() => import('./pages/AboutMe'));
const Portfolio = lazy(() => import('./pages/Portfolio'));

const Contact = lazy(() => import('./pages/Contact'));

export const App = () => {
	return (
		<BrowserRouter basename="/dr.rusakova">
			<Routes>
				<Route element={<Header />}>
					<Route path="/" element={<HomePage />} />
					<Route path="/about" element={<AboutMe />} />
					<Route path="/courses" element={<Portfolio />} />
					<Route path="/contact" element={<Contact />} />

					<Route path="*" element={<Navigate to="/" />} />
				</Route>
			</Routes>

			<ToastContainer />
		</BrowserRouter>
	);
};
