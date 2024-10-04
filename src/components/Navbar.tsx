import { useState, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { VscChromeClose, VscMenu } from 'react-icons/vsc';
import { MdDarkMode, MdLightMode } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { DarkModeContext } from '../contexts/DarkmodeContext';

import '../styles/Navbar.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/skills', label: 'Skills' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Get in touch' },
];

const socialMediaLinks = [
  { url: 'https://www.linkedin.com/in/your-linkedin-profile', icon: <FaLinkedin size={24} /> },
  { url: 'https://github.com/Pieter1821', icon: <FaGithub size={24} /> },
];

export default function Navbar() {
  const { darkMode, setDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`navbar-container ${darkMode ? 'dark' : ''}`}>
      <nav className="navbar">
        <div className="navbar-content">
          <button onClick={toggleDarkMode} aria-label="Toggle Dark Mode" className="dark-mode-toggle">
            {darkMode ? <MdLightMode size={24} /> : <MdDarkMode size={24} />}
          </button>
          <div className="nav-links">
            {links.map((link, index) => (
              <NavLink
                key={index}
                to={link.to}
                className="nav-link"
                activeClassName="active"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
          <div className="social-links">
            {socialMediaLinks.map((link, index) => (
              <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label="Social Media Link" className="social-link">
                {link.icon}
              </a>
            ))}
          </div>
          <div className="menu-toggle">
            <button
              onClick={toggleMenu}
              className="menu-button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
            >
              {isOpen ? <VscChromeClose size={24} /> : <VscMenu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="mobile-menu">
            <ul className="mobile-nav-links">
              {links.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.to}
                    
                    className="nav-link"
                    activeClassName="active"
                    onClick={toggleMenu}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div className="mobile-social-links">
              {socialMediaLinks.map((link, index) => (
                <a key={index} href={link.url} target="_blank" rel="noopener noreferrer" aria-label="Social Media Link" className="social-link">
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}