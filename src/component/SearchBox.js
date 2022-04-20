import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div>
      <input
        type="search"
        placeholder="search robots"
        className=" bg-lightest-blue b--green ba pa3"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
