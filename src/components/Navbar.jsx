import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import '../styles/Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="navbar-container">
      <nav className="bg-white border-gray-200 px-2 sm:px:4 py-2">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="md:hidden">
              <button onClick={toggleMenu} className="text-gray-800 hover:text-gray-600">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
              </button>
            </div>
            <div className="hidden md:flex justify-between space-x-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="nav-link text-gray-800 hover:text-gray-600"
                  activeclassname="font-semibold text-gray-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          {isOpen && (
            <div className=" mt-2">
              <ul className="flex flex-col space-y-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="nav-link text-gray-800 hover:text-gray-600"
                    activeClassName="font-semibold text-gray-600"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
