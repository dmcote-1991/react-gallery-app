import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import config from "./config";
import "./App.css";

// App components
import Search from "./components/Search";
import Nav from "./components/Nav";
import PhotoList from "./components/PhotoList";

const App = () => {
  const apiKey = config.apiKey;

  return (
    <div className="container">
      <Search />
      <Nav />
      <Routes>
        <Route path="/" element={<Navigate to="/cats" />} />
        <Route path="/cats" element={<PhotoList topic="cats" />} />
        <Route path="/dogs" element={<PhotoList topic="dogs" />} />
        <Route path="/computers" element={<PhotoList topic="computers" />} />
        <Route path="/search/:query" element={<PhotoList />} />
      </Routes>
    </div>
  );
};

export default App;
