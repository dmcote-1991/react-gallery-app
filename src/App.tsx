// Importing necessary dependencies for routing and HTTP requests
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import apiKey from "../src/config"; // API key for accessing the Flickr API

// Importing components used in the application
import SearchForm from "./components/SearchForm"; // Search form component for user queries
import Nav from "./components/Nav"; // Navigation bar component
import PhotoList from "./components/PhotoList"; // Displays list of photos based on the search topic
import NotFound from "./components/NotFound"; // Error component for unmatched routes

// Main App component handling routing, API data fetching, and search functionality
const App: React.FC = () => {
  const navigate = useNavigate(); // Enables programmatic navigation
  const location = useLocation(); // Provides access to current URL location data

  // Function to fetch photos from Flickr API based on a search query
  const fetchData = async (query: string) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    try {
      const response = await axios.get(url); // Fetches data from the API
      return response.data.photos.photo; // Returns the photo array from response
    } catch (error) {
      console.error("Error fetching data from Flickr API:", error); // Logs any errors in fetching data
      throw error; // Re-throws error to handle further if needed
    }
  };

  // Handles the search form submission, navigating to the search results page
  const handleSearchSubmit = (query: string) => {
    navigate(`/search/${query}`); // Navigates to the search results for the given query
  };

  return (
    <div className="container">
      <SearchForm onSearch={handleSearchSubmit} /> {/* Renders the search form */}
      <Nav /> {/* Renders the navigation bar with predefined links */}
      <Routes>
        {/* Default route redirects to the "/cats" topic */}
        <Route path="/" element={<Navigate to="/cats" />} />

        {/* Route for "cats" photos */}
        <Route
          path="/cats"
          element={
            <PhotoList
              fetchData={fetchData}
              topic="cats"
              key={location.pathname} // Re-renders on path change
            />
          }
        />

        {/* Route for "dogs" photos */}
        <Route
          path="/dogs"
          element={
            <PhotoList
              fetchData={fetchData}
              topic="dogs"
              key={location.pathname}
            />
          }
        />

        {/* Route for "computers" photos */}
        <Route
          path="/computers"
          element={
            <PhotoList
              fetchData={fetchData}
              topic="computers"
              key={location.pathname}
            />
          }
        />

        {/* Dynamic route for custom search queries */}
        <Route
          path="/search/:query"
          element={<PhotoList fetchData={fetchData} key={location.pathname} />}
        />

        {/* Fallback route renders NotFound component for any unmatched routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
