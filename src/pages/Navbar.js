
// import { Link } from "react-router-dom";     // <== IMPORT
import { Link, NavLink } from "react-router-dom";   // <== IMPORT


function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
          {/* <Link to="/"> Home </Link>           
          {/* <== ADD */}
          {/* <Link to="/about"> About </Link>       */}
          {/* <== ADD */}
          {/* <Link to="/projects"> Projects </Link>  */}
           {/* <== ADD */} 

          <NavLink to="/" className={({ isActive }) => isActive ? "selected" : ""}>
          Home
        </NavLink>
        
        <NavLink 
          to="/about" 
          className={({ isActive }) => isActive ? "selected" : ""}
         >
          About
        </NavLink>
        
        <NavLink 
          to="/projects" 
          className={({ isActive }) => isActive ? "selected" : ""}
        >
          Projects
        </NavLink>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;