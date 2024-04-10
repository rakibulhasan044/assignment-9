import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';

const Root = () => {
    return (
        <div className='container mx-auto bg-blue-100'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;