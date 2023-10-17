import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import './RootFile.css'
import Footer from '../components/Footer/Footer';

const RootFile = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

export default RootFile;