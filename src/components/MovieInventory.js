import React from 'react';

const MovieInventory = ({ movies, onUpdate, onDelete }) => {
  return (
    <div>
      {movies.map((movie) => (
        <div key={movie.id} style={{ border: '1px solid #ddd', marginBottom: '10px', padding: '10px' }}>
          <h2>{movie.name}</h2>
          <p><strong>Genre:</strong> {movie.genre}</p>
          <p><strong>Rating:</strong> {movie.rating}</p>
          <p><strong>Description:</strong> {movie.description}</p>
          <p><strong>Duration:</strong> {movie.duration} minutes</p>
          <img src={movie.imageUrl} alt={movie.name} style={{ width: '200px' }} />
          <button onClick={() => onUpdate(movie.id)}>Update</button>
          <button onClick={() => onDelete(movie.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default MovieInventory;
