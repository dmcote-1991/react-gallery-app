// Imports necessary dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Photo from "./Photo";

// Component for displaying a list of photos based on a topic or search query
const PhotoList = ({ fetchData, topic }) => {
  const { query } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetches photos based on the topic or query parameter
  useEffect(() => {
    const searchTerm = topic || query;
    if (searchTerm) {
      setLoading(true);
      fetchData(searchTerm)
        .then((data) => {
          setPhotos(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching photos:", error);
          setError("Failed to fetch photos. Please try again.");
          setLoading(false);
        });
    }
  }, [fetchData, topic, query]);

  // Render loading message while photos are being fetched
  if (loading) {
    return <p>Loading...</p>;
  }

  // Render error message if there's an error fetching photos
  if (error) {
    return <p>{error}</p>;
  }

  // Render message if no photos are found for the topic or query
  if (photos.length === 0) {
    return (
      <p>
        No matches found for "{topic || query}". Please try a different search
        term.
      </p>
    );
  }

  // Renders the list of photos if photos are fetched successfully
  return (
    <div className="photo-container">
      <h2>{topic ? `Photos of ${topic}` : `Search Results for "${query}"`}</h2>
      <ul>
        {/* Map through photos array and render Photo component for each photo */}
        {photos.map((photo) => (
          <Photo
            key={photo.id}
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`}
            alt={photo.title}
          />
        ))}
      </ul>
    </div>
  );
};

// Type checking of props
PhotoList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  topic: PropTypes.string,
};

export default PhotoList;
