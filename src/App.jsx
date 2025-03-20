import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Movie from "./components/Movie";
import Watchlist from "./components/Watchlist";
import { myFavorite } from "./context/FavoriteContext";
import Nav from "./components/Nav";

const App = () => {
  const [favorite, setFavorite] = useState([]);

  return (
    <myFavorite.Provider value={{ favorite, setFavorite }}>
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Movie />} />
          <Route path="/favorite" element={<Watchlist />} />
        </Routes>
      </Router>
    </myFavorite.Provider>
  );
};

export default App;
