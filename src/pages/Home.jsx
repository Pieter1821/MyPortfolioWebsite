import { Link } from "react-router-dom";
import React from 'react';
import '../styles/home.css';
import illustration from '../assets/illustration.svg';

const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container-home">
          <h1>Pieter Deane</h1>
          <h2>Software Developer</h2>
          <p>
            Welcome to my Portfolio!
            <br />
            Here you can find some of my projects and learn more about me.
          </p>
          <p>
            Feel free to contact me if you have any questions or if you would
            like to collaborate on a project.
          </p>
        </div>
      </div>

      <div className="buttons-container">
        <Link to="/Projects" className="btn-projects">
          View Projects
        </Link>
        <a
          href="https://www.dropbox.com/s/tv3mc3105lesggl/Pieter_Deane_CV.pdf?dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          View Resume
        </a>
      </div>
      <img src={illustration} alt="illustration picture" className="illustration" />
    </>
  );
}

export default Home;


