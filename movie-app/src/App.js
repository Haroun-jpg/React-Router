import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MovieList from './MovieList';
import MovieDescription from './MovieDescription';
import './App.css';

const App = () => {
  const [movies] = useState([
    {
      title: 'Inception',
      description: 'A mind-bending thriller about dreams within dreams.',
      posterURL: 'https://m.media-amazon.com/images/I/912AErFSBHL._AC_UF894,1000_QL80_.jpg',
      rating: 8.8,
      trailerURL: 'https://www.youtube.com/embed/8hP9D6kZseM'
    },
    {
      title: 'The Matrix',
      description: 'A hacker discovers the world he lives in is a simulation.',
      posterURL: 'https://m.media-amazon.com/images/I/613ypTLZHsL.jpg',
      rating: 8.7,
      trailerURL: 'https://www.youtube.com/embed/vKQi3bBA1y8'
    },
  ]);

  return (
    <Router>
      <div>
        <h1>Movie App</h1>
        <Routes>
          <Route path="/" element={<MovieList movies={movies} />} />
          <Route path="/movie/:title" element={<MovieDescription movies={movies} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
