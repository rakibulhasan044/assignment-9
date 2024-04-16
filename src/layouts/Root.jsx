import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import { Toaster } from 'react-hot-toast'
import 'animate.css';
import Footer from '../components/Footer';

const Root = () => {
    return (
        <div>
            <div className='container mx-auto animate__animated animate__fadeInDown'>
            <Navbar/>
            <Outlet/>
            <Toaster/>
        </div>
        <Footer/>
        </div>
    );
};

export default Root;