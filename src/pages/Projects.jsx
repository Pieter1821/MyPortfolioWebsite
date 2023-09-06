import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/projects.css';
import bankingapp from '../assets/bankingapp.png';
import MyTODOAPP from '../assets/MyTODOAPP.jpeg';
import LogoRecipeApp from '../assets/LogoRecipeApp.jpg';
import interestcalculatorpage from '../assets/interestcalculatorpage.jpg';

export function Projects() {
  const projects = [
    {
      name: 'TODO APP',
      imageSrc: MyTODOAPP,
      description:
        'TODO APP is a sleek and user-friendly task management application built with React. Stay organized effortlessly and manage your daily responsibilities with ease.',
      technologies: ['React'],
      githubUrl: 'https://github.com/Pieter1821/My-Todo-App/',
      livePreviewUrl: 'https://todo-appto.netlify.app/',
    },
    {
      name: 'Banking-App',
      imageSrc: bankingapp,
      description:
        'Banking-App is a Python-based bank account management system. Users can easily make deposits, withdrawals, check balances, and view transaction logs.',
      technologies: ['Python'],
      githubUrl: 'https://github.com/Pieter1821/BankingApp',
    },
    {
      name: 'My-Recipe-App',
      imageSrc: LogoRecipeApp,
      description:
        'My-Recipe-App is a React-powered recipe search application. Explore a wide variety of recipes and find your favorites with ease.',
      technologies: ['React'],
      githubUrl: 'https://github.com/Pieter1821/My-React-Recipe-App',
      livePreviewUrl: 'https://yourfavoriterecipe.netlify.app/',
    },
    {
      name: 'Interest Calculator App',
      imageSrc: interestcalculatorpage,
      description:
        'Interest Calculator App is a web application that simplifies interest calculations for fixed deposits. It provides both yearly and monthly interest calculations along with educational insights.',
      technologies: ['HTML', 'SCSS', 'JavaScript', 'React'],
      githubUrl: 'https://github.com/Pieter1821/FDinterest-Calculator.git',
      livePreviewUrl: 'https://fdinterestcalculator.netlify.app/',
    },
  ];

  return (
    <div className="projects-container">
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <img src={project.imageSrc} alt={project.name} />
          <div className="project-info">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub
              </a>
              {project.livePreviewUrl && (
                <a href={project.livePreviewUrl} target="_blank" rel="noopener noreferrer">
                  <FaExternalLinkAlt /> Live Preview
                </a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
