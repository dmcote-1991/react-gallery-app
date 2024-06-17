import React from "react";
import PropTypes from "prop-types";

const Photo = ({ src, alt }) => {
  return (
    <li>
      <img src={src} alt={alt} />
    </li>
  );
};

Photo.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Photo;
