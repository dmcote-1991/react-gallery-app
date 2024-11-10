// Importing necessary React and React-DOM libraries to create and render the React application
import React from "react";
import ReactDOM from "react-dom/client";

// Importing the main application component and necessary styling
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom"; // Enables routing functionality within the application
import "../src/index.css"; // Global CSS styles for the application

// Selecting the root DOM element where the React application will be mounted
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

// Rendering the application within the root element
// React.StrictMode is used to highlight potential issues in development
// Router provides routing context to manage navigation within the app
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
