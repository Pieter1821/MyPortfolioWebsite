import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "../styles/projects.css";
import bankingapp from "../assets/bankingapp.png";
import CALCULATOR from "../assets/CALCULATOR.jpeg";
import MyTODOAPP from "../assets/MyTODOAPP.jpeg";

export function Projects() {
  const projects = [
    {
      name: "TODO APP",
      imageSrc: MyTODOAPP,
      description:
        "My Todo App: Stay organized effortlessly with a simple, intuitive task management application for all your daily responsibilities.",
      technologies: ["React"],
      githubUrl: "https://github.com/Pieter1821/My-Todo-App/",
      livePreviewUrl: "https://todo-appto.netlify.app/",
    },
    {
      name: "My-Simple-Calculator",
      imageSrc: CALCULATOR,
      description: "This is a basic calculator app built using HTML, CSS, and JavaScript",
      technologies: ["JavaScript"],
      githubUrl: "",
      livePreviewUrl: "https://mysimplecalculater.netlify.app/",
    },
    {
      name: "Banking-App",
      imageSrc: bankingapp,
      description:
        "This is a simple bank account management system implemented in Python. The program allows users to make deposits and withdrawals, view their account balance, and view a transaction log.",
      technologies: ["Python"],
      githubUrl: "https://github.com/Pieter1821/BankingApp",
    },
  ];

  return (
    <div className="projects">
      <h2>My Projects</h2>
      {projects.map((project, index) => (
        <div className="project" key={index}>
          <h3>{project.name}</h3>
          <img src={project.imageSrc} alt={project.name} />
          <p>{project.description}</p>
          <p>Technologies used: {project.technologies.join(", ")}</p>
          <div className="btn-group">
            <Link
              to={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaGithub /> View Repository
            </Link>
            {project.livePreviewUrl && (
              <Link
                to={project.livePreviewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                <FaExternalLinkAlt /> View Live Preview
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
