import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a className="link" href="/home">
        /home
      </a>
      <a className="link" href="/resume">
        /Resume
      </a>
      <a className="link" href="/projects">
        /Projects
      </a>
      <a className="link" href="/about">
        /About Me
      </a>
    </nav>
  );
};

export default Navbar;
