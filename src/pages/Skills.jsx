import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import { DiDjango } from 'react-icons/di';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <span className="skills-heading">Skills</span>
      <div className="skills-section">
        <h4 className="skills-subheading">Front-end</h4>
        <ul className="skills-list">
          <li className="skill-item">
            <FaHtml5 className="skill-icon-html" />
            HTML
          </li>
          <li className="skill-item">
            <FaCss3 className="skill-icon-css" />
            CSS
          </li>
          <li className="skill-item">
            <FaJs className="skill-icon-js" />
            JavaScript
          </li>
          <li className="skill-item">
            <FaReact className="skill-icon-react" />
            React
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h2 className="skills-subheading">Back-end</h2>
        <ul className="skills-list">
          <li className="skill-item">
            <IoLogoNodejs className="skill-icon-nodejs" />
            Node.js
          </li>
          <li className="skill-item">
            <IoLogoPython className="skill-icon-python" />
            Python
          </li>
          <li className="skill-item">
            <DiDjango className="skill-icon-django" />
            Django
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;


