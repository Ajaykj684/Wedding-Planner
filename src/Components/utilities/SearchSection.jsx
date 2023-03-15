import React from "react";
import "./search.css";

function SearchSection() {
  return (
    <div className="h-[auto] flex justify-start px-[3%] sm:pt-5 sm:pb-5">
      <div class="input-container p-5 xxs:w-[100%] md:w-[40%]">
        <input placeholder="Search" type="text" class="input " />
        <span>Search</span>
      </div>
    </div>
  );
}

export default SearchSection;
