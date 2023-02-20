import "./Banner.css";
import { useState, useEffect } from "react";
import axios from "axios";
import requests from "./requests";

const Banner = () => {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get(requests.fetchNetflixOriginals);
      console.log(response.data);
      setMovie(
        response.data.results[
          Math.floor(Math.random() * response.data.results.length - 1)
        ]
      );
    }
    fetchData();
  }, []);

  return (
    <div>
      <header
        className="banner"
        style={{
      
          backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`
        }}
      >
        <div className="banner__contents">
          <h1 className="banner__title">
            {movie?.title || movie?.name || movie?.original_name}
          </h1>
          <p className="banner__description">
            {movie?.overview}
          </p>
          <button className="banner__button">Play</button>
          <button className="MyList__button">My Lists</button>
        </div>
      </header>
    </div>
  );
};

export default Banner;