import "./App.css";
import React, { useState, useEffect } from "react";
import MovieList from "./components/movieList.js";
import SearchBar from "./components/searchBar.js";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  async function getMovies(searchValue) {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=278f7660`;
    const response = await fetch(url);
    const movies = await response.json();
    if(movies.Search){
      setMovies(movies.Search);
    }
  }
  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  return (
    <div>
      <h1 className="p-10 text-5xl font-bold text-center">Find Your Favourites</h1>
      <SearchBar searchValue={searchValue} setSearchValue={setSearchValue}/>
      <MovieList movies={movies} />
    </div>
  );
}

export default App;
