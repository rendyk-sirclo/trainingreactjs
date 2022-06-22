import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li style={{ display: "inline" }}>
          <Link style={{ padding: "14px 16px" }} to="/">Home</Link>
        </li>
        <li style={{ display: "inline" }}>
          <Link style={{ padding: "14px 16px" }} to="/category">Category</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;