import React from "react";

const SearchBar = (props) => {

  return (
    <div className="flex flex-row justify-center">
      <input
        className="w-9/12 p-3"
        style={{color:"black"}}
        type="text"
        value={props.searchValue}
        onChange={(e) => props.setSearchValue(e.target.value)}
        placeholder="Type to search..."
      ></input>
    </div>
  );
};

export default SearchBar;
