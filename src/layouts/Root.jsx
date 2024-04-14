import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast'
import 'animate.css';

const Root = () => {
    return (
        <div className='container mx-auto animate__animated animate__fadeInDown'>
            <Navbar/>
            <Outlet/>
            <Toaster/>
        </div>
    );
};

export default Root;