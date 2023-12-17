import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import authSelectors from 'redux/Auth/SelectorAuth';

const PrivatRoute = () => {
	const token = useSelector(authSelectors.getToken);

	return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivatRoute;
