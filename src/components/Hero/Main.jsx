import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import requests from "../../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);



  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-black"></div>
        <img
          className="h-full w-full object-cover"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />

        <div className="w-full h-full top-[200px] absolute p-4">
          <h1 className="text-3xl md:text-5xl font-bold">{movie?.title}</h1>
          <div className="my-4">
            <button className="border border-gray-300 px-[30px] py-[2px] bg-gray-300 text-black">
              Play
            </button>
            <button className="border border-gray-300 px-[30px] py-[2px] text-white ml-4">
              Watch Later
            </button>
          </div>
          <span className="text-grey-400 text-sm">
            Released: {movie?.release_date}
          </span>
          <p className="w-full text-grey-200">
            {movie?.overview.substring(0, 160)}...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
