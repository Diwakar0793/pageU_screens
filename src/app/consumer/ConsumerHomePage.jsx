import "../../App.css";

import React, { useState } from "react";
import SearchBar from "../../components/SearchBar";
import Business from "../merchant/Business";
const ConsumerHomePage = () => {
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search
  const handleSearch = (searchTerm) => {
    // Perform search logic (e.g., fetch data from API, filter results)
    // For demonstration, updating searchResults with a sample array
    setSearchResults([
      { id: 1, name: "Result 1" },
      { id: 2, name: "Result 2" },
      // Add more search results as needed
    ]);
  };

  return (
    <div>
      <h1 className="bg-gray-400 m-auto text-center text-[50px]">PAGEU</h1>
      <SearchBar onSearch={handleSearch} />
      {/* Display search results */}
      <ul>
        {searchResults.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
      <Business />
    </div>
  );
};

export default ConsumerHomePage;
