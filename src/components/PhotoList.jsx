import React from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";

const PhotoList = ({ topic }) => {
  const { query } = useParams();

  return (
    <div className="photo-container">
      <h2>{topic ? `Photos of ${topic}` : `Search Results for "${query}"`}</h2>
      {/* Render the list of photos here */}
    </div>
  );
};

PhotoList.propTypes = {
  topic: PropTypes.string,
};

export default PhotoList;
