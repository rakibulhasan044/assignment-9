import {createBrowserRouter} from 'react-router-dom'
import Root from '../layouts/Root'
import Home from '../pages/Home';
import PropertyDetails from '../pages/PropertyDetails';
import Login from '../pages/Login';
import Register from '../pages/Register';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/properties.json')
            },
            {
                path: '/login',
                element: <Login/>

            },
            {
                path: '/register',
                element: <Register/>
            },
            {
                path: '/propertydetails/:id',
                element: <PrivateRoute><PropertyDetails/></PrivateRoute>,
                loader: () => fetch('/properties.json')
            }
        ]
    }
])

export default router;