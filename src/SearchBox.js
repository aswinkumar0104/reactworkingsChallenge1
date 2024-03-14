import React from "react";
import colorNames from "colornames";

const SearchBox = ({ boxContent, setBoxContent, setHexValue }) => {
  return (
    <div>
      <input
        className="searchForm"
        id="searchBox"
        type="text"
        role="searchbox"
        value={boxContent}
        placeholder="Enter Value"
        onChange={(e) => {
          setBoxContent(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
    </div>
  );
};

export default SearchBox;
