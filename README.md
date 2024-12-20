# React Gallery App

A simple and dynamic photo gallery app that allows users to search and view photos on various topics (cats, dogs, computers) from the Flickr API. It supports custom searches for a personalized experience.

## Table of Contents

1. [Features](#features)
2. [Technologies Used](#technologies-used)
3. [Project Structure](#project-structure)
4. [Components Overview](#components-overview)
5. [Installation](#installation)
   - [Prerequisites](#prerequisites)
   - [Usage](#usage)
6. [Future Enhancements](#future-enhancements)
7. [Contributing](#contributing)

## Features

- **Dynamic Navigation:** Navigate between different topics with easy-to-use links.
- **Photo Search:** Search for photos based on user-entered queries.
- **API Integration:** Fetches images from the Flickr API for specific topics and custom searches.
- **Image Modal View:** Click on any photo to view it in a larger modal view, providing a better look at individual images.
- **Error Handling:** Displays a "Page Not Found" message for invalid routes.
- **Responsive Design:** Adapts to different screen sizes.

## Technologies Used

- **React**: Library for building user interfaces.
- **React Router**: Library for client-side routing.
- **TypeScript**: A superset of JavaScript that adds static types to improve development speed and code quality.
- **Axios**: HTTP client for making requests to the Flickr API.
- **Vite**: Development environment for fast, optimized builds.
- **Flickr API**: Source of the photo data.

## Project Structure

```bash
react-gallery-app/
├── dist/                  # Compiled production files
├── node_modules/          # Dependencies
├── src/                   # Source code
│   ├── components/        # Components for different parts of the app
│   │   ├── Modal.tsx      # Component to display Modal of clicked image
│   │   ├── Nav.tsx        # Navigation links for topics
│   │   ├── NotFound.tsx   # "404 - Page Not Found" message
│   │   ├── Photo.tsx      # Component to display a single photo
│   │   ├── PhotoList.tsx  # Lists photos based on a topic or search query
│   │   └── SearchForm.tsx # Search form for custom photo searches
│   ├── App.tsx            # Main application component, handles routing
│   ├── config.js          # Stores API key and configuration details
│   ├── index.css          # Main styles for the app
│   └── index.tsx          # Entry point of the application
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Configuration file for Vite
├── tsconfig.json          # Configuration file for TypeScript
├── .gitignore             # Git ignore file
├── .eslintrc.cjs          # ESLint configuration
└── README.md              # Details about the project
```

## Components Overview

- **Modal**: Provides a full-screen overlay with an enlarged view of the selected image, along with a close button for easy navigation back to the gallery.
- **Nav**: Renders the main navigation links for predefined categories.
- **NotFound**: Displays a 404 error page if an invalid route is accessed.
- **Photo**: Shows an individual photo with its image source and alt text.
- **PhotoList**: Fetches and displays a list of photos based on a category or search term.
- **SearchForm**: Renders a search bar allowing users to perform custom searches.

## Installation

### Prerequisites

- **Node.js** and **npm** installed on your machine.
- A **Flickr API key**. Create a `.env` file in the project root and add `REACT_APP_FLICKR_API_KEY=your_flickr_api_key_here`.
Visit [Flickr's API page](https://www.flickr.com/services/developer/api/) to create a key.

### Usage

1. **Clone the repository:**
  ```bash
  git clone https://github.com/dmcote-1991/react-gallery-app.git
  cd react-gallery-app
  ```

2. **Create a .env file in the root of the project and add your Flickr API key:**
  ```bash
  REACT_APP_FLICKR_API_KEY=your_flickr_api_key_here
  ```

3. **Install dependencies:**
  ```bash
  npm install
  ```

4. **Start the development server:**
  ```bash
  npm run dev
  ```

  - Visit `http://localhost:3000` in your browser to see the app in action.

5. **Build the project for production:**
  ```bash
  npm run build
  npm run preview
  ```

  - The `npm run preview` command allows you to preview the production build locally, which is useful for testing before deploying the app.

6. **Run TypeScript in watch mode (for development):**
  ```bash
  npm run tsc
  ```

  - This will keep TypeScript running in watch mode for automatic compiling, helping you catch type errors as you code.

## Future Enhancements

- Add more categories or allow users to bookmark their favorite searches (could implement local storage or a bookmark feature).
- Implement pagination for large result sets (might require changes to the API call logic and adding pagination controls).
- Add loading animations to improve user experience (consider using React Suspense or a spinner during data fetching).

---

## Contributing
Feel free to contribute by opening issues or submitting pull requests. When submitting a pull request, ensure that your code passes the linting rules by running `npm run lint`. You can configure your editor to run linting automatically on save.

- [Open an issue](https://github.com/dmcote-1991/react-gallery-app/issues/new)
- [View open issues](https://github.com/dmcote-1991/react-gallery-app/issues)
- [View pull requests](https://github.com/dmcote-1991/react-gallery-app/pulls)
