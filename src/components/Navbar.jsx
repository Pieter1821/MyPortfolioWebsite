import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-screen-xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="hidden md:block">
            <ul className="flex justify-around space-x-4">
              <li>
                <Link to="/" className="nav-link" activeClassName="active">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="nav-link" activeClassName="active">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="nav-link" activeClassName="active">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/skills" className="nav-link" activeClassName="active">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" className="nav-link" activeClassName="active">
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden">
            <button className="text-gray-800 hover:text-gray-600">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
