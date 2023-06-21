import { Link } from "react-router-dom";
import '../styles/home.css'

export function Home() {
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

        <Link to="https://www.dropbox.com/s/jtpdfbdgx5btltz/Pieter%20Deane%20CV%20%282%29.pdf?dl=0" className="btn-resume">
          View Resume
        </Link>
      </div>

      <img
        src="https://picsum.photos/350/300?random=7"
        alt="Placeholder Illustration 1"
      />
    </>
  );
}

export default Home;
