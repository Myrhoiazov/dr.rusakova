import {useSelector} from 'react-redux';
import {Navigate, Outlet} from 'react-router-dom';
import authSelectors from 'redux/Auth/SelectorAuth';
import {ADMIN_ROUTE} from 'shared/utils/consts';

const PublicRoute = ({restricted = false}) => {
	const token = useSelector(authSelectors.getToken);
	const shouldRedirect = token && restricted;

	return shouldRedirect ? <Navigate to={ADMIN_ROUTE} /> : <Outlet />;
};

export default PublicRoute;
