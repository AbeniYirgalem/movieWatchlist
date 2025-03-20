import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { myFavorite } from "../context/FavoriteContext";
const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const { favorite, setFavorite } = useContext(myFavorite);

  const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(URL);
        setMovies(response.data.results);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  const handleAdd = (id) => {
    const favoriteMovie = movies.find((movie) => movie.id === id);
    if (!favorite.some((movie) => movie.id === id)) {
      setFavorite([...favorite, favoriteMovie]);
    }
  };

  return (
    <div className="container mt-4">
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {movies.length === 0 ? (
          <div className="col">
            <p>Loading...</p>
          </div>
        ) : (
          movies.map((movie) =>
            movie.poster_path === "" ? (
              ""
            ) : (
              <div className="col" key={movie.id}>
                <div className="card h-100">
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    className="card-img-top"
                    alt={movie.title}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{movie.title}</h5>
                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(movie.id)}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleAdd(movie.id)}
                      >
                        Add to Favorites
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )
        )}
      </div>
    </div>
  );
};

export default Movie;
