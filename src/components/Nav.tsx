// Importing NavLink component to create navigation links
import { NavLink } from "react-router-dom";

// Navigation component providing links to predefined photo topics
const Nav: React.FC = () => {
  return (
    <nav className="main-nav">
      <ul>
        {/* Navigation link to the "Cats" topic */}
        <li>
          <NavLink to="/cats">Cats</NavLink>
        </li>
        
        {/* Navigation link to the "Dogs" topic */}
        <li>
          <NavLink to="/dogs">Dogs</NavLink>
        </li>
        
        {/* Navigation link to the "Computers" topic */}
        <li>
          <NavLink to="/computers">Computers</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;