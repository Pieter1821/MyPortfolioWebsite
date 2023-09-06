import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { VscChromeClose } from 'react-icons/vsc';
import { VscMenu } from 'react-icons/vsc'; 

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
    <div className="navbar-container bg-gray-200">
      <nav className="px-2 sm:px:4 py-2 w-full">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8  ">
          <div className="flex items-center justify-between h-16 ">
            <div className="md:hidd" >
              <button onClick={toggleMenu} className="text-white-200 hover:text-gray-6  ">
                {isOpen ? (
                  <VscChromeClose className=" absolute left-6 h-6 w-6 " /> 
                ) : (
                  <VscMenu className="h-6 w-6 absolute left-6 " /> 
                )}
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
            <div className="mt-2 flex justify-center first-letter" >
              <ul className="flex flex-col space-y-2">
                {links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.to}
                    className="nav-link text-gray-800 hover:text-blue-600"
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
