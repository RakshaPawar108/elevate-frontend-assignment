import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";
import { useState } from "react";

export const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };
  return (
    <div className="searchbar-wrapper">
      <input
        className="searchbar"
        type="text"
        placeholder="Search this blog"
        value={searchTerm}
        onChange={handleChange}
      />
      <span className="search-icon" onClick={() => onSearch(searchTerm)}>
        <FontAwesomeIcon className="search-fa-icon" icon={faSearch} />
      </span>
    </div>
  );
};
