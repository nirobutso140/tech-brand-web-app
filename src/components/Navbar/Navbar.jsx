import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


const Navbar = () => {

    return (
        <>
            <div className="navbar">
                  <img className="nav_logo" src="image/techlogo.jpg" alt="" />
                <div className="links">
                    <li><NavLink to='/'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400 " : ""
                        }
                    >Home</NavLink></li>

                  
                            <li><NavLink to='/addproduct'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 " : ""
                                }
                            >Add Product</NavLink></li>
                            <li><NavLink to='/mycart'
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-red-400 " : ""
                                }
                            >My Cart</NavLink></li>
                    
                    <li> <NavLink to='/login'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400" : ""
                        }
                    >Login</NavLink></li>
                    <li><NavLink to='/register'
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-red-400" : ""
                        }
                    >Register</NavLink></li>
                </div>
                <div className="userInfo_logout">
               
                      
                            <button className="btn btn-sm">Log out</button>
                           
                           
                            <Link to='/login'>
                                <button className="btn btn-sm">Log in</button>
                            </Link>
                   
                </div>
            </div>
        </>
    );
};

export default Navbar;