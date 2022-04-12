import React from "react";
import MovieCard from "./MovieCard";

const Series = ({ movies, text }) => {
  return (
    <div>
      <h1>series to watch</h1>
      <div className="list">
        {movies
          .filter(
            (el) =>
              el.title.toLowerCase().includes(text.toLowerCase()) &&
              el.category == "series"
          )
          .map((el) => (
            <MovieCard movies={el} />
          ))}
      </div>
    </div>
  );
};

export default Series;
