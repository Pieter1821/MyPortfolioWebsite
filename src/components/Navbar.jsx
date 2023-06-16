import React from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import navbarLogo from '../assets/navbar-logo.jpg';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <img src={navbarLogo} alt="Navbar  " width='100px' height='100px' />
      </div>
      <ul className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link" activeClassName="active">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link" activeClassName="active">
            About
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/contact"
            className="navbar__link"
            activeClassName="active"
          >
            Contact
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/skills" className="navbar__link" activeClassName="active">
            Skills
          </Link>
        </li>
        <li className="navbar__item">
          <Link
            to="/projects"
            className="navbar__link"
            activeClassName="active"
          >
            Projects
          </Link>
        </li>
      </ul>
    </nav>
  );
}
