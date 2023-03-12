import SearchIcon from "./SearchIcon";
import miniLogo from "../../img/pokedex_mini_logo.png";
import { useRef } from "react";
import PropTypes from "prop-types";

function SearchBar({ placeHolder }) {
  const inputRef = useRef(null);

  const handleIconClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className=" items-center justify-between w-96 p-2 rounded-3xl shadow-md bg-white focus-within:ring-2 focus-within:ring-yellowTheme focus-within:outline-none">
      <div className=" flex items-center justify-between w-full">
        <img
          src={miniLogo}
          alt="PokeDex Logo"
          className="w-9 h-9"
          onClick={handleIconClick}
          draggable="false"
        />
        <input
          type="text"
          placeholder={placeHolder}
          className="mx-2 w-full outline-none bg-white text-purpleTheme"
          ref={inputRef}
        />
        <SearchIcon onClick={handleIconClick} />
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  placeholder: PropTypes.string,
};

export default SearchBar;
