import {BrowserRouter} from 'react-router-dom';
import {HelmetProvider} from 'react-helmet-async';
import AppRouter from './providers/router/ui/AppRouter';
import './styles/app.scss';

export const App = () => {
	return (
		<HelmetProvider>
			<BrowserRouter basename="/">
				<AppRouter />
			</BrowserRouter>
		</HelmetProvider>
	);
};
