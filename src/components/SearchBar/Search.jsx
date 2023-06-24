import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import "./search.css";
const SearchBar = () => {
  return (
    <>
      <div className="search-wrapper">
        <input className="search" />
        <button className="search-btn">
          <SearchIcon />
        </button>
      </div>
    </>
  );
};

export default SearchBar;
