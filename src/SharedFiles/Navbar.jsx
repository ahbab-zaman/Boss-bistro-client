import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "./AuthProvider/AuthProvider";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../Hooks/useCart";
import useAdmin from "../Hooks/useAdmin";
const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin] = useAdmin();
  const [cart] = useCart();
  console.log(cart.length);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        console.log("User Logout");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="navbar text-white fixed z-10 bg-[#00000060]">
      <div className="navbar-start">
        <div className="dropdown font-semibold uppercase">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
            <li>
              <a>Dashboard</a>
            </li>
            <li>
              <a>Our Menu</a>
            </li>
            <li>
              <a>Our Shop</a>
            </li>
          </ul>
        </div>
        <img className="w-7" src={logo} alt="" />
        <a className="text-xl font-semibold">Bistro Boss</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal items-center px-1 uppercase font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "bg-yellow-400 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/menu"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : ""
              }
            >
              OUR MENU
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/shop/salad"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : ""
              }
            >
              OUR SHOP
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-yellow-400 font-bold" : ""
              }
            >
              CONTACT US
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
              <button className="px-4 py-2 bg-yellow-400 text-black font-bold flex justify-center items-center gap-2 rounded-lg">
                <FaCartShopping className="text-xl text-white"></FaCartShopping>
                <div className="badge badge-secondary">+{cart.length}</div>
              </button>
            </NavLink>
          </li>
          <li>
            {user && !isAdmin && (
              <NavLink
                to="/dashboard/userHome"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : ""
                }
              >
                Dashboard Link
              </NavLink>
            )}
          </li>
          <li>
            {user && isAdmin && (
              <NavLink
                to="/dashboard/adminHome"
                className={({ isActive }) =>
                  isActive ? "text-yellow-400 font-bold" : ""
                }
              >
                Dashboard Link
              </NavLink>
            )}
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <Link to={"/login"}>
            <button
              onClick={handleLogOut}
              className="bg-yellow-400 text-white font-bold px-4 py-2"
            >
              Logout
            </button>
          </Link>
        ) : (
          <Link to={"/login"}>
            <button className="bg-yellow-400 text-white font-bold px-4 py-2">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
