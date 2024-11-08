// Imports the necessary libraries and components
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import "../src/index.css";

// Creates a root element to render the React Application
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Renders the React application within the root element
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
