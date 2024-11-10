// Imports necessary dependencies from React
import { useState } from "react";

// Interface for the props expected by the SearchForm component
interface SearchFormProps {
  onSearch: (query: string) => void; // Function to handle search query submission
}

// Search component for handling user input and search form submission
const SearchForm: React.FC<SearchFormProps> = ({ onSearch }) => {
  const [searchText, setSearchText] = useState<string>(""); // State to store user input

  // Updates the searchText state whenever the input field changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value); // Sets searchText to the input's current value
  };

  // Handles form submission by calling the onSearch function with the current search text
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevents the default form submission behavior
    onSearch(searchText); // Executes the onSearch function passed as a prop
  };

  return (
    <form className="search-form" onSubmit={handleSubmit}>
      {/* Input field for search text, bound to searchText state and handleInputChange */}
      <input
        type="search"
        name="search"
        placeholder="Search"
        value={searchText} // Sets input value to current searchText state
        onChange={handleInputChange} // Updates searchText on input change
        required // Ensures the input field must be filled before submission
      />
      {/* Submit button with embedded search icon SVG */}
      <button type="submit" className="search-button">
        <svg
          fill="#fff"
          height="24"
          viewBox="0 0 23 23"
          width="24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* SVG path for magnifying glass icon */}
          <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
          <path d="M0 0h24v24H0z" fill="none" />
        </svg>
      </button>
    </form>
  );
};

export default SearchForm;
