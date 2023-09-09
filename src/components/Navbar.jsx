import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { VscMenu } from 'react-icons/vsc';

import '../styles/Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Me' },
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
    <div className="navbar-container bg-gray-200">
      <nav className="px-2 sm:px-4 py-2 w-full">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="flex center justify-between h-20">
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-800 hover:text-gray-600"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? (
                  <VscChromeClose className="h-6 w-6 absolute left-6 " />
                ) : (
                  <VscMenu className="h-6 w-6 absolute left-6" />
                )}
              </button>
            </div>

            <div className="hidden md:flex justify-between space-x-4">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.to}
                  className="nav-link text-gray-800 hover:text-blue-600 px-3 py-2 rounded-md transition duration-300 ease-in-out transform hover:-translate-y-1"
                  activeClassName="font-semibold text-blue-600"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {isOpen && (
            <div className="md:hidden mt-2">
              <ul className="flex flex-col items-center space-y-2"> 
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="nav-link text-gray-800 hover:text-blue-600"
                    activeClassName="font-semibold text-blue-600"
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
