// import {Link } from "react-router-dom"
// function Navbar(){
//     return(
//         <nav>
//             <ul>
               
//                <li><Link to="/">Home</Link></li>
//             </ul>
//         </nav>
//     )
// }
// export default Navbar
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Abhi</Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contacts">Contact</Link></li>
        <li><Link to="/Blog">Blog</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;