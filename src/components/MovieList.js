import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ movies,text }) => {
  console.log(movies);
  return (
    <div className="list">
      {movies
        .filter((el) => el.title.toLowerCase().includes(text.toLowerCase()))
        .map((el) => (
          <MovieCard movies={el} />
        ))}
    </div>
  );
};

export default MovieList;
