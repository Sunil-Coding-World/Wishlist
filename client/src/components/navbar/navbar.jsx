import React from "react";
import "./ṇavbarstyle.css";
import { Link } from "react-router-dom";

const Navbar = ({ children }) => {
  return (
    <body>
      <nav className="navMenu">
        <Link to="/" className="navLink">
          <h1>Home</h1>
        </Link>
        <Link to="/read" className="navLink">
          <h1>Wishes</h1>
        </Link>
        <Link to="/about" className="navLink">
          <h1>About</h1>
        </Link>
      </nav>
      {children}
    </body>
  );
};

export default Navbar;
