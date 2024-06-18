// Imports the necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";

// Creates a root element to render the React Application
const root = ReactDOM.createRoot(document.getElementById("root"));

// Renders the React application within the root element
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
