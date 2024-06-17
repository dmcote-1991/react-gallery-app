import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import axios from "axios";
import config from "./config";
import "./App.css";

// App components
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";

const App = () => {
  const apiKey = config.apiKey;

  const fetchData = async (query) => {
    const url = `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`;
    try {
      const response = await axios.get(url);
      return response.data.photos.photo;
    } catch {
      console.error("Error fetching data from Flickr API:", error);
      throw error;
    }
  };

  return (
    <div className="container">
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route
          path="/cats"
          element={<PhotoList fetchData={fetchData} topic="cats" />}
        />
        <Route
          path="/dogs"
          element={<PhotoList fetchData={fetchData} topic="dogs" />}
        />
        <Route
          path="/computers"
          element={<PhotoList fetchData={fetchData} topic="computers" />}
        />
        <Route
          path="/search/:query"
          element={<PhotoList fetchData={fetchData} />}
        />
      </Routes>
    </div>
  );
};

export default App;
