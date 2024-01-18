import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Pass the search term to the parent component
    onSearch(searchTerm);
  };

  return (
    <form className="mt-6 text-center " onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        className="w-[60%] max-w-[100%] h-[30px]"
        onChange={handleInputChange}
      />
      <button className="ml-1 h-[35px]" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
