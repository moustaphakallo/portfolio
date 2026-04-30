import { Link } from "react-router-dom";

export default function Navbar({ scrolled }) {
  return (
 <div className="My ">
     <nav className={scrolled ? "navbar scrolled" : "navbar"}>
      <h2>My Portfolio</h2>

      <ul className="suijecte">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
 </div>
  );
}