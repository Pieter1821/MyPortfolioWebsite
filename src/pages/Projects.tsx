import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bankingapp from '../assets/bankingapp.png';
import LogoRecipeApp from '../assets/LogoRecipeApp.jpg';
import interestcalculatorpage from '../assets/interestcalculatorpage.jpg';
import pomodorotimer from '../assets/pomodorotimer.png';
import triviax from '../assets/triviax.png';

import '../styles/Projects.css';

type Project = {
  name: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  livePreviewUrl?: string;
}

const projectsData: Project[] = [
  {
    name: 'pomodoro-timer',
    imageSrc: pomodorotimer,
    description: 'A Pomodoro Timer built with Next.js designed to boost productivity by breaking work into focused intervals. It helps prevent burnout and promotes a healthy work-life balance. The app includes authentication features, allowing users to save tasks, with all data securely stored in a real-time database powered by Convex',
    technologies: ['tailwind ,React ,Next.js ,Convex ,Clerk'],
    githubUrl: 'https://github.com/Pieter1821/pomodoro-timer/',
    livePreviewUrl: 'https://mypomodoro-timer.vercel.app/',
  },
  {
    name: 'Trivia X',
    imageSrc: triviax,
    description: 'Trivia X is a quiz application that tests your knowledge on a wide range of topics. The app includes a variety of questions, from general knowledge to specific categories, and provides instant feedback on your answers.',
    technologies: ['tailwind ,React ,Open Trivia DB'],
    githubUrl: ' https://github.com/Pieter1821/Trivia-X',
    livePreviewUrl: 'https://trivia-x.netlify.app/',
  
  },
  {
    name: 'Banking-App',
    imageSrc: bankingapp,
    description: 'Banking-App is a Python-based bank account management system. Users can easily make deposits, withdrawals, check balances, and view transaction logs.',
    technologies: ['Python'],
    githubUrl: 'https://github.com/Pieter1821/BankingApp',
  },
  {
    name: 'ReactRecipeHub',
    imageSrc: LogoRecipeApp,
    description: 'ReactRecipeHub is a React-powered recipe search application. Explore a wide variety of recipes and find your favorites with ease.',
    technologies: ['React'],
    githubUrl: 'https://github.com/Pieter1821/My-React-Recipe-App',
    livePreviewUrl: 'https://reactrecipehub.netlify.app/',
  },
  {
    name: 'Interest Calculator App',
    imageSrc: interestcalculatorpage,
    description: 'Interest Calculator App is a web application that simplifies interest calculations for fixed deposits. It provides both yearly and monthly interest calculations along with educational insights.',
    technologies: ['HTML', 'SCSS', 'JavaScript', 'React'],
    githubUrl: 'https://github.com/Pieter1821/FDinterest-Calculator.git',
    livePreviewUrl: 'https://fdinterestcalculator.netlify.app/',
  }

];

const ProjectCard: React.FC<Project> = ({ name, imageSrc, description, technologies, githubUrl, livePreviewUrl }) => (
  <div className="project">
    <img src={imageSrc} loading="lazy" alt={name} className="project-image" />
    <div className="project-info">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="technologies">
        {technologies.map((tech, index) => (
          <span key={index} className="technology-tag">{tech}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="btn">
          <FaGithub /> GitHub
        </a>
        {livePreviewUrl && (
          <a href={livePreviewUrl} target="_blank" rel="noopener noreferrer" className="btn">
            <FaExternalLinkAlt /> Live Preview
          </a>
        )}
      </div>
    </div>
  </div>
);

const LoadingSkeleton: React.FC = () => (
  <div className="project skeleton">
    <div className="skeleton thumbnail"></div>
    <div className="skeleton title"></div>
    <div className="skeleton text"></div>
    <div className="skeleton text"></div>
  </div>
);

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setProjects(projectsData);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="projects-container">
      {isLoading
        ? Array.from({ length: 3 }).map((_, index) => <LoadingSkeleton key={index} />)
        : projects.map((project, index) => <ProjectCard key={index} {...project} />)
      }
    </div>
  );
};

export default Projects;






