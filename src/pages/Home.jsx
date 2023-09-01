import { Link } from "react-router-dom";
import React from 'react';
import { motion } from 'framer-motion';
import '../styles/home.css';
import illustration from '../assets/illustration.svg';

const Home = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        delay: 0.5,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        delay: 1,
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    },
  };

  return (
    <>
      <motion.div
        className="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container-home">
          <motion.h1 variants={textVariants}>Pieter Deane</motion.h1>
          <motion.h2 variants={textVariants}>Software Developer</motion.h2>
          <motion.p variants={textVariants}>
            Welcome to my Portfolio!
            <br />
            Here you can find some of my projects and learn more about me.
          </motion.p>
          <motion.p variants={textVariants}>
            Feel free to contact me if you have any questions or if you would
            like to collaborate on a project.
          </motion.p>
        </div>
      </motion.div>

      <motion.div
        className="buttons-container"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 6 }}
      >
        <Link to="/Projects" className="btn-projects">
          View Projects
        </Link>
        <a
          href="https://www.dropbox.com/scl/fi/8y2noskn25crz67hhg1eu/PieterDeane_CV.pdf?rlkey=q8huiblqosieg15shshfa6pws&dl=0"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          View Resume
        </a>
      </motion.div>
      <motion.img
        src={illustration}
        alt="illustration picture"
        className="illustration"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 30, scale: 1 }}
        transition={{ duration: 6, delay: 2 }}
      />
    </>
  );
}

export default Home;
