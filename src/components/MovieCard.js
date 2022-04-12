import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movies }) => {
  return (
    <Link to={`/movie/${movies.id}`}>
      
      <div className="card">
        <span className="rate">
          <ion-icon name="star"></ion-icon>
          {movies.rate}
        </span>
        <img src={movies.posterUrl} alt={movies.title} />
        <h3>{movies.title}</h3>
        <p>{movies.description}</p>
      </div>
    </Link>
  );
};

export default MovieCard;
