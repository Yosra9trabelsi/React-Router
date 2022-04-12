import React from "react";
import { useParams } from "react-router-dom";

const MovieDetail = ({ movies }) => {
  const params = useParams();

  const movie = movies.find((el) => el.id == params.id);
  return (
    <div className="detail">
      <img src={movie.posterUrl} alt="" />
      <div className="detail-content">
        <h3>{movie.title}</h3>
        <p>
          {movie.description}
        </p>
        <b>Rate:</b>
        <span>{movie.rate}</span>
        <b>category:</b>
        <span>{movie.category}</span>
      </div>
    </div>
  );
};

export default MovieDetail;
