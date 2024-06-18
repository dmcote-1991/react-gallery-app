// Imports necessary dependencies
import {
  Route,
  Routes,
  Navigate,
  useNavigate,
  useLocation,
} from "react-router-dom";
import axios from "axios";
import config from "./config";
import "./index.css";

// Imports App components
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";
import NotFound from "./components/NotFound";

// Handles routing and fetching data from the Flickr API
const App = () => {
  const apiKey = config.apiKey;
  const navigate = useNavigate();
  const location = useLocation();

  // Fetches data from the Flickr API based on the query
  const fetchData = async (query) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    try {
      const response = await axios.get(url);
      return response.data.photos.photo;
    } catch (error) {
      console.error("Error fetching data from Flickr API:", error);
      throw error;
    }
  };

  // Handles search submission and navigates to the search results page
  const handleSearchSubmit = (query) => {
    navigate(`/search/${query}`);
  };

  return (
    <div className="container">
      <Search onSearch={handleSearchSubmit} />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route
          path="/cats"
          element={
            <PhotoList
              fetchData={fetchData}
              topic="cats"
              key={location.pathname}
            />
          }
        />
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
        <Route
          path="/search/:query"
          element={<PhotoList fetchData={fetchData} key={location.pathname} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
