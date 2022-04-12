import React from "react";
import Filter from "./Filter";
import MovieList from "./MovieList";

const Home = ({ settext, addmovie, movies, text }) => {
  return (
    <div>
      <div className="landing">
        <h1>Welcome to movies lovers</h1>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3mzpPSMgfIL7J07G9hEs8ZP9pYP6eI_mzA&usqp=CAU"
          alt="logo"
        />
      </div>
      
      <Filter settext={settext} addmovie={addmovie} />
      <MovieList movies={movies} text={text} />
    </div>
  );
};

export default Home;
