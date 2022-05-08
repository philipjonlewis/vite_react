import React from "react";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const navStyle = "text-blue-grey";

  return (
    <nav className="navbar">
      <div className=" container">
        <div className="display-flex gap-1 links jc-end">
          <NavLink className={navStyle} to={"/"}>
            Home
          </NavLink>
          <NavLink className={navStyle} to={"/about"}>
            About
          </NavLink>
          <NavLink className={navStyle} to={"/contact"}>
            Contact
          </NavLink>
          <NavLink className={navStyle} to={"/products"}>
            Products
          </NavLink>

          <NavLink className={navStyle} to={"/profile"}>
            Profile
          </NavLink>

          {!isAuthenticated && (
            <NavLink className={navStyle} to={"/login"}>
              LogIn
            </NavLink>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
