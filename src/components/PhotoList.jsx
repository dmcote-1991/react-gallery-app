import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PropTypes from "prop-types";
import Photo from "./Photo";

const PhotoList = ({ fetchData, topic }) => {
  const { query } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  if (photos.length === 0) {
    return (
      <p>
        No matches found for "{topic || query}". Please try a different search
        term.
      </p>
    );
  }

  return (
    <div className="photo-container">
      <h2>{topic ? `Photos of ${topic}` : `Search Results for "${query}"`}</h2>
      <ul>
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

PhotoList.propTypes = {
  fetchData: PropTypes.func.isRequired,
  topic: PropTypes.string,
};

export default PhotoList;
