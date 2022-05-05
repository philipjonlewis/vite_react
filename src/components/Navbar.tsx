import React from "react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/auth";

const Navbar = () => {
  const auth = useAuth();

  return (
    <nav className="navbar">
      <div className=" container">
        <div className="display-flex gap-1 links jc-end">
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <NavLink to={"/products"}>Products</NavLink>
          <NavLink to={"/profile"}>Profile</NavLink>
          {!auth.user && <NavLink to={"/login"}>LogIn</NavLink>}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
