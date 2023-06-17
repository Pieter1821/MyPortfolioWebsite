import { Link } from "react-router-dom";

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

        <a href="https://drive.google.com/file/d/18sRP0JWQFy5HTArt_eMFmAlhzxgvvvON/view?usp=drivesdk" className="btn-resume">
          View Resume
        </a>
      </div>

      <img
        src="https://picsum.photos/350/300?random=7"
        alt="Placeholder Illustration 1"
      />
    </>
  );
}

export default Home;
