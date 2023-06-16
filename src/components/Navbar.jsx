import { Link } from "react-router-dom"

import "../styles/Navbar.css"







export default function Navbar (){
    return(
        <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        
        </div>
    )
}



