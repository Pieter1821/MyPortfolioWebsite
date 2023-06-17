import { Link } from "react-router-dom";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import '../styles/projects.css';

export function Projects() {
  const projects = [
    {
      name: "Project Name 1",
      imageSrc: "https://via.placeholder.com/150",
      description: "Project description goes here...",
      technologies: ["React", "Node.js", "MongoDB"],
      githubUrl: "https://github.com/your-username/project-name1",
      livePreviewUrl: "https://your-projects-url1.com"
    },
    {
      name: "Project Name 2",
      imageSrc: "https://via.placeholder.com/150",
      description: "Project description goes here...",
      technologies: ["React", "Express", "Firebase"],
      githubUrl: "https://github.com/your-username/project-name2",
      livePreviewUrl: "https://your-projects-url2.com"
    },
    {
      name: "Project Name 3",
      imageSrc: "https://via.placeholder.com/150",
      description: "Project description goes here...",
      technologies: ["React", "Django", "PostgreSQL"],
      githubUrl: "https://github.com/your-username/project-name3",
      livePreviewUrl: "https://your-projects-url3.com"
    }
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
            <Link
              to={project.livePreviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn"
            >
              <FaExternalLinkAlt /> View Live Preview
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
