import React, { useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-scroll";

function Navbar() {
  const [nav, setNav] = useState(true);

  const changeBackground = () => {
    if (window.scrollY >= 50) {
      setNav(true);
    } else {
      setNav(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <nav className={nav ? "nav active" : "nav"}>
      <Link to="#" className="logo">
        <img src={logo} alt="Arab Contractors" />
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="nav-icon"></span>
      </label>
      <ul className="menu">
        <li>
          <Link to="main" smooth={true}>
            Header
          </Link>
        </li>
        <li>
          <Link to="features" smooth={true}>
            Services
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true}>
            About
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true}>
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
