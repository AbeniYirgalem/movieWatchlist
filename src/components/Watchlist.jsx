import React, { useContext } from "react";
import { myFavorite } from "../context/FavoriteContext";

const Watchlist = () => {
  const { favorite, setFavorite } = useContext(myFavorite);

  const handleRemove = (id) => {
      setFavorite(favorite.filter((movie) => movie.id !== id));
  };

  return (
    <div className="container mt-4">
    <h2 className="mb-4">My Favorite Movies</h2>
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {favorite.length === 0 ? (
        <div className="col">
          <p>No favorite movies yet.</p>
        </div>
      ) : (
        favorite.map((movie) => (
          <div className="col" key={movie.id}>
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                className="card-img-top"
                alt={movie.title}
              />
              <div className="card-body">
                <h5 className="card-title">{movie.title}</h5>
                <button 
                  className="btn btn-danger" 
                  onClick={() => handleRemove(movie.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  </div>
  );
};

export default Watchlist;
