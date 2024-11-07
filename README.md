# React Gallery App

A simple and dynamic photo gallery app that allows users to search and view photos on various topics (cats, dogs, computers) from the Flickr API. It supports custom searches for a personalized experience.

## Features

- **Dynamic Navigation:** Navigate between different topics with easy-to-use links.
- **Photo Search:** Search for photos based on user-entered queries.
- **API Integration:** Fetches images from the Flickr API for specific topics and custom searches.
- **Error Handling:** Displays a "Page Not Found" message for invalid routes.
- **Responsive Design:** Adapts to different screen sizes.

## Project Structure

```bash
react-gallery-app/
├── dist/                  # Compiled production files
├── node_modules/          # Dependencies
├── src/                   # Source code
│   ├── components/        # Components for different parts of the app
│   │   ├── Nav.jsx        # Navigation links for topics
│   │   ├── NotFound.jsx   # "404 - Page Not Found" message
│   │   ├── Photo.jsx      # Component to display a single photo
│   │   ├── PhotoList.jsx  # Lists photos based on a topic or search query
│   │   └── SearchForm.jsx # Search form for custom photo searches
│   ├── App.jsx            # Main application component, handles routing
│   ├── config.js          # Stores API key and configuration details
│   ├── index.css          # Main styles for the app
│   └── index.jsx          # Entry point of the application
├── index.html             # Main HTML file
├── package.json           # Project metadata and dependencies
├── vite.config.js         # Configuration file for Vite
├── tsconfig.json          # Configuration file for TypeScript
├── .gitignore             # Git ignore file
├── .eslintrc.cjs          # ESLint configuration
└── README.md              # Details about the project
```

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

## Components Overview

- **Nav**: Renders the main navigation links for predefined categories.
- **NotFound**: Displays a 404 error page if an invalid route is accessed.
- **Photo**: Shows an individual photo with its image source and alt text.
- **PhotoList**: Fetches and displays a list of photos based on a category or search term.
- **SearchForm**: Renders a search bar allowing users to perform custom searches.

## Technologies Used

- **React**: Library for building user interfaces.
- **React Router**: Library for client-side routing.
- **Axios**: HTTP client for making requests to the Flickr API.
- **Vite**: Development environment for fast, optimized builds.
- **Flickr API**: Source of the photo data.

## Dependencies

- `react`: Core library for building UI.
- `react-dom`: DOM-specific methods for React.
- `react-router-dom`: Provides routing features.
- `axios`: HTTP client for making API requests.
- `prop-types`: Prop type validation for components.

## Development Dependencies

- `vite`: Bundler for faster builds and hot reloading.
- `eslint`: Linter to maintain code quality.
- `eslint-plugin-react`, `eslint-plugin-react-hooks`, `eslint-plugin-react-refresh`: Plugins for linting React code.

## Scripts

- **npm run dev**: Starts the development server.
- **npm run build**: Builds the project for production.
- **npm run lint**: Lints the project for code quality issues.
- **npm run preview**: Previews the production build.

## Future Enhancements

- Add more categories or allow users to bookmark their favorite searches (could implement local storage or a bookmark feature).
- Implement pagination for large result sets (might require changes to the API call logic and adding pagination controls).
- Add loading animations to improve user experience (consider using React Suspense or a spinner during data fetching).

---

## Contributing
Feel free to contribute by opening issues or submitting pull requests. When submitting a pull request, ensure that your code passes the linting rules by running `npm run lint`. You can configure your editor to run linting automatically on save.

