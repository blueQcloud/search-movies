import React from "react";

const MovieList = (props) => {
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {props.movies.map((movie, index) => (
        <div className="flex flex-col justify-center">
          <div className="p-10">
            <img src={movie.Poster} alt="movie" id="movie-poster"></img>
            <div className="text-center mt-4">
              <h3 id="movie-title">{movie.Title}</h3>
              <p id="movie-year">{movie.Year}</p>
              <button className="mt-2 bg-amber-500 hover:bg-amber-600 p-2 rounded font-medium">
                Display Label
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
