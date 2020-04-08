import React from "react";
import "./style.css";

function SearchBar(props) {
  return (
    <div className="search-bar">
      <form className="search-form">
        <div className="form-group">
          
          <input
            onChange={props.handleInputChange}
            name="employee"
            list="employees"
            type="text"
            className="form-control"
            placeholder="Search Employee"
            id="searchbar"
          />
        </div>
      </form>
    </div>
    
  );
}

export default SearchBar;