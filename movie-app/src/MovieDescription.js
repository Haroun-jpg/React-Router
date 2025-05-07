import React from 'react';
import { useParams, Link } from 'react-router-dom';

const MovieDescription = ({ movies }) => {
  const { title } = useParams();
  const movie = movies.find((movie) => movie.title === title);

  if (!movie) return <p>Movie not found</p>;

  return (
    <div>
      <h2>{movie.title}</h2>
      <img src={movie.posterURL} alt={movie.title} style={{ width: '200px' }} />
      <p>{movie.description}</p>

      <div>
        <h3>Trailer:</h3>
        <iframe
          width="560"
          height="315"
    src={movie.trailerURL}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
      </div>

      <Link to="/">⬅ Back to Home</Link>
</div>
  );
};

export default MovieDescription;
