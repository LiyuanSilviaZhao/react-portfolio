import React from 'react';
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="navbar">
      <lo className="nav-item">
          <Link to="/">Home</Link>
        </lo>
        <lo className="nav-item">
          <Link to="/about">About Me</Link>
        </lo>
        <lo className="nav-item">
          <Link to="/portfolio">Portfolio</Link>
        </lo>
        <lo className="nav-item">
          <Link to="/resume">Resume</Link>
        </lo>
        <lo className="nav-item">
          <Link to="/contact">Contact</Link>
        </lo>
    </nav>
  );
}
export default Navbar;
