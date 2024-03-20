import { NavLink } from "react-router-dom";
import './navbar.css'

const NavBar = () => {
  return (
    <div className="navbar bg-[#23180d] py-5">
        <div className="container mx-auto">
    
      <div className="flex-1">
        <a className="btn btn-ghost text-4xl text-[#ffa038]">Tasty Meals</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1 space-x-4 text-lg text-white mr-10" id="sidebar">
          <NavLink className={'bg-red-600 px-3 py-1 rounded-sm'} to={'/home'}>Home</NavLink>
          <NavLink className={'bg-red-600 px-3 py-1 rounded-sm'} to={'/menu'}>Menu</NavLink>
          <NavLink className={'bg-red-600 px-3 py-1 rounded-sm'} to={'/aboutUs'}>About Us</NavLink>
          <NavLink className={'bg-red-600 px-3 py-1 rounded-sm'} to={'/login'}>Login</NavLink>

        </ul>
      </div>
      </div>
    </div>
  );
};

export default NavBar;
