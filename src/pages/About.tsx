
import { motion } from 'framer-motion';

import '../styles/About.css';
import personalpic from '../assets/personalpic.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faLaptopCode, faHandshake, faFileAlt } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

export function About() {
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
    <div className="about-container">
      <h1>About Me <FontAwesomeIcon icon={faRocket} /></h1>
      <img src={personalpic} className="personalpic" alt="Photo of myself" />

      <p>
        Welcome to my world! I'm <strong>Pieter Deane</strong>, a <strong>self-taught developer</strong> deeply passionate about crafting websites and applications. <FontAwesomeIcon icon={faLaptopCode} /> Without a formal computer science background, I've embarked on a journey of relentless learning, immersing myself in diverse programming languages and tools.
      </p>

      <p>
        My adventure in the world of development sparked from a simple curiosity about how websites come to life. I began with HTML and CSS, and soon ventured into the realms of JavaScript and frameworks like React. <FontAwesomeIcon icon={faHandshake} /> While my path has been challenging, it's been an incredible learning experience, and I'm eagerly anticipating the future's uncharted territory. I take immense pride in my progress and the projects I've brought to life, and I'm excited to witness the milestones I'll reach in the coming years. <FontAwesomeIcon icon={faFileAlt} />
      </p>

      <p>
        My portfolio serves as a testament to my skills, showcasing my ability to create not only visually appealing but also highly functional websites and applications. <FontAwesomeIcon icon={faLaptopCode} /> I'm enthusiastic about collaborating with fellow developers, continuously learning from experienced peers, and sharing my knowledge with newcomers to the field. <FontAwesomeIcon icon={faHandshake} />
      </p>

      <p>
        Thank you for visiting my portfolio—I hope you find it inspiring and informative! <FontAwesomeIcon icon={faRocket} />
      </p>

      <motion.div
        className="buttons-container"
        variants={buttonVariants}
        initial="hidden"
        animate="visible"
        transition={{ duration: 6 }}
      >
        <Link to="/Projects" className="btn-projects">
          Explore My Projects <FontAwesomeIcon icon={faLaptopCode} />
        </Link>
        <a
          href='https://www.dropbox.com/scl/fi/dbghzbkfb7rbifvex8cbo/Pieter_Deane_CV_v3.pdf?rlkey=4ub9lu4p3klo517yo3nsfp9eq&st=o22jql84&dl=0'
          target="_blank"
          rel="noopener noreferrer"
          className="btn-resume"
        >
          View My Resume <FontAwesomeIcon icon={faFileAlt} />
        </a>
      </motion.div>
    </div>
  );
}

export default About;
