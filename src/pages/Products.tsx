import React from "react";

import { Link, Outlet } from "react-router-dom";

import First from "./First";
import Second from "./Second";

const Products = () => {
  return (
    <>
      <div>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Products"
        />
        <p>Hello this is the products page</p>
      </div>
      <nav>
        <Link to={"first"}>First</Link>
        <Link to={"second"}>Second</Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Products;
