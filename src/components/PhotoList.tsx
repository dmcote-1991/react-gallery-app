// Imports necessary dependencies and components
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Photo from "./Photo"; // Component for displaying individual photos

// Interface defining the properties of each photo object
interface Photo {
  id: string; // Unique identifier for the photo
  server: string; // Server ID where the photo is hosted
  secret: string; // Secret key used to access the photo
  title: string; // Title or description of the photo
}

// Interface for the props expected by the PhotoList component
interface PhotoListProps {
  fetchData: (query: string) => Promise<Photo[]>; // Function to fetch photos based on a query
  topic?: string; // Optional topic to display photos for a predefined category
}

// Component for displaying a list of photos based on a topic or search query
const PhotoList: React.FC<PhotoListProps> = ({ fetchData, topic }) => {
  const { query } = useParams<{ query: string }>(); // Retrieves query parameter from the URL
  const [photos, setPhotos] = useState<Photo[]>([]); // State to store fetched photos
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState<string | null>(null); // State to handle any errors

  // useEffect hook to fetch photos when component mounts or when topic/query changes
  useEffect(() => {
    const searchTerm = topic || query; // Determines the search term from either topic or query
    if (searchTerm) {
      setLoading(true); // Sets loading state to true while fetching data
      fetchData(searchTerm)
        .then((data) => {
          setPhotos(data); // Updates photos state with fetched data
          setLoading(false); // Sets loading state to false after fetching data
        })
        .catch((error) => {
          console.error("Error fetching photos:", error); // Logs error to console
          setError("Failed to fetch photos. Please try again."); // Updates error state
          setLoading(false);
        });
    }
  }, [fetchData, topic, query]); // Dependencies array triggers effect on changes

  // Conditional rendering based on loading, error, or no photos found
  if (loading) {
    return <p>Loading...</p>; // Shows loading message while data is being fetched
  }

  if (error) {
    return <p>{error}</p>; // Displays error message if data fetching fails
  }

  if (photos.length === 0) {
    return (
      <>
        <h3>No results found for {topic || query}</h3>
        <p>Please try again.</p> {/* Message if no photos are available */}
      </>
    );
  }

  // Renders the list of photos if data is successfully fetched and available
  return (
    <div className="photo-container">
      {/* Displays heading based on the topic or query */}
      <h2>{topic ? `Photos of ${topic}` : `Search Results for "${query}"`}</h2>
      <ul>
        {/* Maps through photos array and renders a Photo component for each item */}
        {photos.map((photo) => (
          <Photo
            key={photo.id} // Unique key for each Photo component
            src={`https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_m.jpg`} // Image source URL
            alt={photo.title} // Alt text for accessibility
          />
        ))}
      </ul>
    </div>
  );
};

export default PhotoList;
