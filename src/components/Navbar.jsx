import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProviders";
import toast from 'react-hot-toast';
import userpng from "/assets/userpng.png";

const Navbar = () => {
  const { user, logOut, loader } = useContext(AuthContext);
  
setTimeout(() => {
  if (loader) {
      return (
          <div className='flex justify-center items-center'>
              <div className="loading loading-spinner text-error w-[80px]"></div>
          </div>
      );
  }
}, 2000);

  const handleSignOut = () => {
    logOut()
      .then(toast.success("Successfully loged out"))
      .catch((error) => toast.error(error.message));
  };
  
  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/login">Login</NavLink>
      </li>
      <li>
        <NavLink to="/register">Register</NavLink>
      </li>
      {user ? (
        <>
          <li>
            <NavLink to="/updateprofile">Update Profile</NavLink>
          </li>
        </>
      ) : (
        ""
      )}
    </>
  );
  return (
    <div className="navbar bg bg-slate-100">
      <div className="navbar-start">
        <div className="dropdown">
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
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">NewHome</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 flex gap-2">{links}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="avatar mr-5 tooltip tooltip-bottom" data-tip={user?.displayName || ""}>
              <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img src={user?.photoURL || userpng}/>
              </div>
            </div>
            <a onClick={handleSignOut} className="btn btn-sm bg-gray-200">
              Log Out
            </a>
          </>
        ) : (
          <Link to="/login" className="btn btn-sm bg-gray-200">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
