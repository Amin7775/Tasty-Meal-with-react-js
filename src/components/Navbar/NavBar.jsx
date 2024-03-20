import { NavLink } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className="btn btn-ghost text-2xl">Tasty Meals</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4 text-lg font-medium text-gray-600 mr-10" id="sidebar">
          <NavLink to={'/home'}>Home</NavLink>
          <NavLink to={'/menu'}>Menu</NavLink>
          <NavLink to={'/aboutUs'}>About Us</NavLink>
          <NavLink to={'/login'}>Login</NavLink>

        </ul>
      </div>
    </div>
  );
};

export default NavBar;
