import "../styles/About.css"
import { motion } from 'framer-motion';
import { Link } from "react-router-dom";

export function About() {
  const buttonVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 1.5,
      },
    }
  }
  return (
    <div className="about-container">
      <h1>About me</h1>

      <p>
        Welcome to my Portfolio. My name is <strong>Pieter Deane</strong> and I am a <strong>self-taught developer</strong> with a passion for building websites and applications.Although i don't have a formal	computer science,
        i have spent countless hours learning and practicing various programming languages and tools.

        </p>
        <p>My  Journey into the world of development started with a simple curiosity about how websites are built.
        from there , I delved into HTML and CSS, and  eventually Javascript and frameworks like React. While my journey hasn't been easy, I have learned a lot along the way and I am excited to see where it takes me next.i am proud of the progress i've made and the projects I've built so far, and I can't wait to see what I can accomplish in the future.	
        </p>
        <p>
          Though my portfolio, i hope to showcase my skills and demonstrate my ability to create beautiful,
          and functional websites and applications. I am eager to collaborate with others  and continue learning from experienced developers,while also sharing my own knowledge with those who are just starting out.
        </p>

        <p>
          Thank you for taking the time to visit my portfolio. I hope you enjoy it!
        </p>

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


      
    </div>
  );
}

export default About;