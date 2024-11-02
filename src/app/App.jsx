import {BrowserRouter} from 'react-router-dom';
import AppRouter from './providers/router/ui/AppRouter';
import './styles/app.scss';

export const App = () => {
	return (
		<BrowserRouter basename="/">
			<AppRouter />
		</BrowserRouter>
	);
};
