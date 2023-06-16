import { Link } from "react-router-dom";

export function Home() {
  return (
        <> 
    <div className="home">
    <div className="container-home">
        <h1>Pieter Deane</h1>
        <h2>Software Developer</h2>
        <p> Welcome to my Portfolio!
        <br/>
           here you can find some of my projects and learn more about me.</p>
        <p>Feel free to contact me if you have any questions or if you would like to collaborate on a project.</p>
      </div>
      </div>

      <Link to="/Projects" className="btn">
        View Projects
      </Link>

</>


  );
}


export default Home;