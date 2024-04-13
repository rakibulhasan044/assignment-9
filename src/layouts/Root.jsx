import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar';
import 'animate.css';

const Root = () => {
    return (
        <div className='container mx-auto animate__animated animate__fadeInDown'>
            <Navbar/>
            <Outlet/>
        </div>
    );
};

export default Root;