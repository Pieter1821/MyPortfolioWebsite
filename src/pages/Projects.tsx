import { useState, useEffect } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import bankingapp from '../assets/bankingapp.png';
import MyTODOAPP from '../assets/MyTODOAPP.jpeg';
import LogoRecipeApp from '../assets/LogoRecipeApp.jpg';
import interestcalculatorpage from '../assets/interestcalculatorpage.jpg';
import LoadingSkeleton from '../components/LoadingSkeleton'

import '../styles/projects.css';

type Project = {
  name: string;
  imageSrc: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  livePreviewUrl?: string;
}

export function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setProjects([
        {
          name: 'TODO APP',
          imageSrc: MyTODOAPP,
          description: 'TODO APP is a sleek and user-friendly task management application built with React. Stay organized effortlessly and manage your daily responsibilities with ease.',
          technologies: ['React'],
          githubUrl: 'https://github.com/Pieter1821/My-Todo-App/',
          livePreviewUrl: 'https://todo-appto.netlify.app/',
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
      ]);
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="projects-container">
      {isLoading ? (
        <>
          <LoadingSkeleton type="thumbnail" />
          <LoadingSkeleton type="text" />
          <LoadingSkeleton type="text" />
        </>
      ) : (
        projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.imageSrc} loading="lazy" alt={project.name} />
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
        ))
      )}
    </div>
  );
}

export default Projects;
