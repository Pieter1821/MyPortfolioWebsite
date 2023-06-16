import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import { DiDjango } from 'react-icons/di';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-section">
        <h2>Front-end</h2>
        <ul>
          <li>
            <FaHtml5 className="skill-icon" />
            HTML
          </li>
          <li>
            <FaCss3 className="skill-icon" />
            CSS
          </li>
          <li>
            <FaJs className="skill-icon" />
            JavaScript
          </li>
          <li>
            <FaReact className="skill-icon" />
            React
          </li>
        </ul>
      </div>

      <div className="skills-section">
        <h2>Back-end</h2>
        <ul>
          <li>
            <IoLogoNodejs className="skill-icon" />
            Node.js
          </li>
          <li>
            <IoLogoPython className="skill-icon" />
            Python
          </li>
          <li>
            <DiDjango className="skill-icon" />
            Django
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Skills;
