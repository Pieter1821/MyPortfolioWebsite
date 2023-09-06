import React from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact } from 'react-icons/fa';
import { IoLogoNodejs, IoLogoPython } from 'react-icons/io';
import { DiDjango } from 'react-icons/di';
import '../styles/Skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <h2 className="skills-heading">Skills</h2>
      <div className="skills-section">
        <h4 className="skills-subheading">Front-end</h4>
        <div className="skills-card">
          <div className="skill-card">
            <FaHtml5 className="skill-icon skill-icon-html" />
            <p>HTML</p>
          </div>
          <div className="skill-card">
            <FaCss3 className="skill-icon skill-icon-css" />
            <p>CSS</p>
          </div>
          <div className="skill-card">
            <FaJs className="skill-icon skill-icon-js" />
            <p>JavaScript</p>
          </div>
          <div className="skill-card">
            <FaReact className="skill-icon skill-icon-react" />
            <p>React</p>
          </div>
        </div>
      </div>

      <div className="skills-section">
        <h4 className="skills-subheading">Back-end</h4>
        <div className="skills-card">
          <div className="skill-card">
            <IoLogoNodejs className="skill-icon skill-icon-nodejs" />
            <p>Node.js</p>
          </div>
          <div className="skill-card">
            <IoLogoPython className="skill-icon skill-icon-python" />
            <p>Python</p>
          </div>
          <div className="skill-card">
            <DiDjango className="skill-icon skill-icon-django" />
            <p>Django</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;




