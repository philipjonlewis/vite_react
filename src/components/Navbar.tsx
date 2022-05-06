import React from "react";

import { NavLink } from "react-router-dom";
import { useAuth } from "../utils/Auth";
import { motion } from "framer-motion";

const Navbar = () => {
  const auth = useAuth();

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
          {!auth.user && (
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
