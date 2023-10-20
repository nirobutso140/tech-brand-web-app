import { Link, NavLink } from "react-router-dom";
import './Navbar.css'
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogOut = () => {
        logOut()
            .then(() => console.log("logout successfully"))
            .catch(error => console.error(error))
    }

    return (
        <>
            <div className="navbar">
                  <img className="nav_logo" src="/image/techlogo.jpg" alt="" />
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
                {
                        user ?
                            <>
                                <span>{user.email}</span>
                                <span>{user.name}</span>
                                <button onClick={handleLogOut} className="btn btn-sm">Log out</button>
                            </>
                            :
                            <Link to='/login'>
                                <button className="btn btn-sm">Log in</button>
                            </Link>
                    }
                </div>
            </div>
        </>
    );
};

export default Navbar;