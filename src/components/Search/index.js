import React from "react";
import "./style.css";

function Search( {handleInputChange} ) {
  return (
    <form className="search">
      <div className="form-group">
        <input
          onChange={e => handleInputChange(e)}
          className="form-control"
          placeholder="Search Employee"
          id="searchBox"
        />
      </div>
    </form>
  );
}

export default Search;