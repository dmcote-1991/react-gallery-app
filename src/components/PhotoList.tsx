// Imports necessary dependencies
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo";

interface Photo {
  id: string;
  server: string;
  secret: string;
  title: string;
}

interface PhotoListProps {
  fetchData: (query: string) => Promise<Photo[]>;
  topic?: string;
}

// Component for displaying a list of photos based on a topic or search query
const PhotoList: React.FC<PhotoListProps> = ({ fetchData, topic }) => {
  const { query } = useParams<{ query: string }>();
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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
      <>
        <h3>No results found for {topic || query}</h3>
        <p>Please try again.</p>
      </>
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

export default PhotoList;
