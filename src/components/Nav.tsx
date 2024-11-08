// Import for navigation links
import { NavLink } from "react-router-dom";

// Navigation component displaying links to different topics
const Nav: React.FC = () => {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
