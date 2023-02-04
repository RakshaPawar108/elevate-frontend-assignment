import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "./SearchBar.css";

export const SearchBar = () => {
  return (
    <div className="searchbar-wrapper">
      <input className="searchbar" type="text" placeholder="Search this blog" />
      <span className="search-icon">
        <FontAwesomeIcon className='search-fa-icon' icon={faSearch} />
      </span>
    </div>
  );
};
