// Import for type checking
import PropTypes from "prop-types";

// Component to display a single photo
const Photo = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

// Type checking of props
Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
