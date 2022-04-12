import React from "react";
import MovieCard from "./MovieCard";

const Movies = ({ movies, text }) => {
  return (
    <div>
      <h1>movies to watch</h1>
      <div className="list">
        {movies
          .filter(
            (el) =>
              el.title.toLowerCase().includes(text.toLowerCase()) &&
              el.category == "movies"
          )
          .map((el) => (
            <MovieCard movies={el} />
          ))}
      </div>
    </div>
  );
};

export default Movies;
