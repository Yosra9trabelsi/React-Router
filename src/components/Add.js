import React, { useState } from "react";

const Add = ({ addmovie }) => {
  const [movie, setmovie] = useState({
    title: "",
    description: "",
    posterUrl: "",
    rate: 0,
  });
  const [show, setshow] = useState(false);
  const [range, setrange] = useState(0);
  return (
    <div className="add">
      <button onClick={() => setshow(!show)}>
        <ion-icon name="add"></ion-icon> Add new movie
      </button>
      {show ? (
        <div className="modal-container">
          <div className="modal-content">
            <ion-icon name="close" onClick={() => setshow(!show)}></ion-icon>
            <input
              type="text"
              placeholder="Movie title"
              onChange={(e) => setmovie({ ...movie, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Movie image"
              onChange={(e) =>
                setmovie({ ...movie, posterUrl: e.target.value })
              }
            />
            <div className="range">
              <input
                type="range"
                max={5}
                onChange={(e) => setmovie({ ...movie, rate: e.target.value })}
              />
              <span>{movie.rate}</span>
            </div>
            <input
              type="text"
              placeholder="description"
              onChange={(e) =>
                setmovie({ ...movie, description: e.target.value })
              }
            />
            <span
              className="add-m"
              onClick={() => {
                addmovie(movie);
                setshow(!show);
              }}
            >
              Add movie
            </span>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default Add;
