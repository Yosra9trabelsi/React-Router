import React from "react";
import Add from "./Add";

const Filter = ({ settext, addmovie }) => {
  return (
    <div className="filter">
      <input
        type="text"
        placeholder="search for your favorite movie"
        onChange={(e) => settext(e.target.value)}
      />
      <Add addmovie={addmovie} />
    </div>
  );
};

export default Filter;
