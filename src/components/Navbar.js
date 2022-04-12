import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZ3mzpPSMgfIL7J07G9hEs8ZP9pYP6eI_mzA&usqp=CAU"
        alt=""
      />
      <ul>
        <li>
          <Link to="/">
            <ion-icon name="home-outline"></ion-icon> Home
          </Link>
        </li>
        <li>
          <Link to="/movies">
            <ion-icon name="film-outline"></ion-icon>Movies
          </Link>
        </li>
        <li>
          <Link to="/series">
            <ion-icon name="tv-outline"></ion-icon>Series
          </Link>
        </li>
      </ul>
      <button onClick={() => navigate("/vip")}>Become vip</button>
    </div>
  );
};

export default Navbar;
