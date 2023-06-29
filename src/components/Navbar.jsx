import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__menu">
        <li className="navbar__item">
          <Link to="/" className="navbar__link" activeclassname="active">
            Home
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/about" className="navbar__link" activeclassname="active">
            About me
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/contact" className="navbar__link" activeclassname="active">
            Contact
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/skills" className="navbar__link" activeclassname="active">
            Skills
          </Link>
        </li>
        <li className="navbar__item">
          <Link to="/projects" className="navbar__link" activeclassname="active">
            Projects
          </Link>
        </li>
      </div>
    </nav>
  );
}
