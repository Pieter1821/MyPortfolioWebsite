import React from 'react';
import '../styles/Footer.css';
import linkedinLogo from '../assets/linkedin-logo.png';
import twitterLogo from '../assets/twitter-logo.png';
import githubLogo from '../assets/github-logo.png';

export default () => (
  <footer className="footer">
    <div className="footer__social-media">
      <a
        href="https://www.linkedin.com/in/pieterdeane"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={linkedinLogo}
          alt="LinkedIn"
          className="footer__social-media-icon"
        />
      </a>
      <a
        href="https://twitter.com/pieter_deane"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={twitterLogo}
          alt="Twitter"
          className="footer__social-media-icon"
        />
      </a>
      <a
        href="https://github.com/Pieter1821"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src={githubLogo}
          alt="GitHub"
          className="footer__social-media-icon"
        />
      </a>
    </div>
    <p className="footer__copyright">
      &copy; 2023 Pieter Deane
    </p>
  </footer>
);
