import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProviders';
import PropTypes from 'prop-types'
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const { user, loader } = useContext(AuthContext);
    const location = useLocation();

    if(loader) {
        return <div className='flex justify-center items-center'>
            <div className="loading loading-spinner text-error w-[80px]"></div>
        </div>
    }
    if(user) {
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>
};

PrivateRoute.propTypes = {
    children: PropTypes.node
}
export default PrivateRoute;