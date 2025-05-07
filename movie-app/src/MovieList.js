// MovieList.js
import React, { useState } from 'react';
import MovieCard from './MovieCard';

const MovieList = ({ movies }) => {
  const [searchTitle, setSearchTitle] = useState('');
  const [minRating, setMinRating] = useState(0);

  const handleSearchChange = (e) => setSearchTitle(e.target.value);
  const handleRatingChange = (e) => setMinRating(e.target.value);

  const filteredMovies = movies.filter(movie => 
    movie.title.toLowerCase().includes(searchTitle.toLowerCase()) &&
    movie.rating >= minRating
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={handleSearchChange}
        />
        <input
          type="number"
          placeholder="Min rating"
          value={minRating}
          onChange={handleRatingChange}
          min="0"
          max="10"
        />
      </div>
      <div className="movie-list">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.title} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
