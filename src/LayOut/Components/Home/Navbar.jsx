import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../../Providers/CartProvider";


const Navbar = () => {
    const navOptions = <>
        <li> <a><NavLink>Home</NavLink></a></li>
        <li><a><NavLink to={'/allproducts'}>All Products</NavLink></a></li>
        <li><a><NavLink>About Us</NavLink></a></li>
    </>
    const { cartItems } = useContext(CartContext)

    const getTotalQuantity = () => {
        const quantities = Object.values(cartItems);
        const totalQuantity = quantities.reduce((total, quantity) => total + quantity, 0);
        return totalQuantity;
    }

    return (
        <div className="sticky z-10 top-0">
            <div className="navbar bg-[#66CC8A] opacity-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {
                                navOptions
                            }
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-3xl font-extrabold bg-gradient-to-r from-indigo-700 from-10% via-sky-700 via-30% to-emerald-700 to-90% text-transparent bg-clip-text">AmarShop</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-lg text-white">
                        {
                            navOptions
                        }
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    </div>
                    <div className="flex-none">

                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle">
                                <div className="indicator">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                    <span className="badge badge-sm indicator-item">{getTotalQuantity()}</span>
                                </div>
                            </label>
                            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">
                                <div className="card-body">
                                    <span className="font-bold text-lg">{getTotalQuantity()} Items</span>
                                    <span className="text-info">Subtotal: $999</span>
                                    <div className="card-actions">
                                        <button className="btn btn-primary btn-block"><NavLink to={'/viewcart'}>View cart</NavLink></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="dropdown dropdown-end">
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </label>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;