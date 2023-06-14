
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';


function Navbar() {
  const links = [
    { to: '/', text: 'Home' },
    { to: '/About', text: 'About' },
    { to: '/Contact', text: 'Contact' },
    { to: '/Projects', text: 'Projects' },
    { to: '/Project-view', text: 'Project View' },
    { to: '/Skills', text: 'Skills' },
  ];

  return (
    <nav className="navbar">
      {links.map((link) => (
        <Link key={link.to} to={link.to}>
          {link.text}
        </Link>
      ))}
    </nav>
  );
}

export default Navbar;

