import { Link } from "react-router-dom";

export function Projects() {
  return (
    
    
      
    
    <div className="projects">
      <h2>My Projects</h2>
      <div className="Project">
        <h3>Project Name 1</h3>
        <img src="https://via.placeholder.com/150" alt="Project 1" /> 
        <p> Project description goes here...</p>
        <Link to="https://github.com/your-username/project-name" target="_blank" rel="noopener noreferrer" className="btn">View Repository </Link>
        <Link to="https://your-projects-url.com" target="_blank" rel="noopener noreferrer" className="btn">View live preview </Link>
    
      </div>
      <div className="Project">
        <h3>Project Name 2</h3>
        <img src="https://via.placeholder.com/150" alt="Project 1" /> 
        <p> Project description goes here...</p>
        <Link to="https://github.com/your-username/project-name" target="_blank" rel="noopener noreferrer" className="btn">View Repository </Link>
        <Link to="https://your-projects-url.com" target="_blank" rel="noopener noreferrer" className="btn">View live preview </Link>
    
      </div>
      <div className="Project">
        <h3>Project Name 3</h3>
        <img src="https://via.placeholder.com/150" alt="Project 1" /> 
        <p> Project description goes here...</p>
        <Link to="https://github.com/your-username/project-name" target="_blank" rel="noopener noreferrer" className="btn">View Repository </Link>
        <Link to="https://your-projects-url.com" target="_blank" rel="noopener noreferrer" className="btn">View live preview </Link>
    
      </div>
      <div className="Project">
        <h3>Project Name 4</h3>
        <img src="https://via.placeholder.com/150" alt="Project 1" /> 
        <p> Project description goes here...</p>
        <Link to="https://github.com/your-username/project-name" target="_blank" rel="noopener noreferrer" className="btn">View Repository </Link>
        <Link to="https://your-projects-url.com" target="_blank" rel="noopener noreferrer" className="btn">View live preview </Link>
    
      </div>
      <div className="Project">
        <h3>Project Name 5</h3>
        <img src="https://via.placeholder.com/150" alt="Project 1" /> 
        <p> Project description goes here...</p>
        <Link to="https://github.com/your-username/project-name" target="_blank" rel="noopener noreferrer" className="btn">View Repository </Link>
        <Link to="https://your-projects-url.com" target="_blank" rel="noopener noreferrer" className="btn">View live preview </Link>
    
      </div>
  </div>
  )
}

export default Projects;



