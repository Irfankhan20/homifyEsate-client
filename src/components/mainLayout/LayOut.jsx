import { Outlet } from "react-router-dom";
import Footer from "../../sharedcomponents/Footer";
import Navbar from "../../sharedcomponents/Navbar";



const LayOut = () => {
    return (
        <div className="font-poppins">
            <div>
            <Navbar></Navbar>
            
            <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default LayOut;