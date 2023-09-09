import React from 'react';
import '../styles/Footer.css';
import linkedinLogo from '../assets/linkedin-logo.png';
import twitterLogo from '../assets/twitter-logo.png';
import githubLogo from '../assets/github-logo.png';

const socialMediaLinks = [
  {
    url: 'https://www.linkedin.com/in/pieterdeane',
    icon: linkedinLogo,
    alt: 'LinkedIn',
  },
  {
    url: 'https://twitter.com/pieter_deane',
    icon: twitterLogo,
    alt: 'Twitter',
  },
  {
    url: 'https://github.com/Pieter1821',
    icon: githubLogo,
    alt: 'GitHub',
  },
];

const Footer = () => (
  <footer className="footer">
    <div className="footer__social-media">
      {socialMediaLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={link.alt}
        >
          <img
            src={link.icon}
            alt={link.alt}
            className="footer__social-media-icon"
          />
        </a>
      ))}
    </div>
    <p className="footer__copyright">&copy; 2023 Pieter Deane</p>
  </footer>
);

export default Footer;
