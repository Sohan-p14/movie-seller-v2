import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateMovie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    // Fetch movie details based on id
    // For example, you might call an API to get movie details
    setMovie({
      name: 'Inception',
      genre: 'Sci-Fi',
      rating: 8.8,
      description: 'A mind-bending thriller.',
      duration: 148,
      imageUrl: 'https://example.com/inception.jpg',
    });
  }, [id]);

  const handleUpdate = () => {
    // Logic to update movie details
  };

  if (!movie) return <div>Loading...</div>;

  return (
    <div>
      <h1>Update Movie</h1>
      <form onSubmit={handleUpdate}>
        <div>
          <label>Name:</label>
          <input type="text" value={movie.name} onChange={(e) => setMovie({ ...movie, name: e.target.value })} />
        </div>
        <div>
          <label>Genre:</label>
          <input type="text" value={movie.genre} onChange={(e) => setMovie({ ...movie, genre: e.target.value })} />
        </div>
        <div>
          <label>Rating:</label>
          <input type="number" value={movie.rating} onChange={(e) => setMovie({ ...movie, rating: e.target.value })} />
        </div>
        <div>
          <label>Description:</label>
          <textarea value={movie.description} onChange={(e) => setMovie({ ...movie, description: e.target.value })} />
        </div>
        <div>
          <label>Duration (minutes):</label>
          <input type="number" value={movie.duration} onChange={(e) => setMovie({ ...movie, duration: e.target.value })} />
        </div>
        <div>
          <label>Image URL:</label>
          <input type="text" value={movie.imageUrl} onChange={(e) => setMovie({ ...movie, imageUrl: e.target.value })} />
        </div>
        <button type="submit">Update Movie</button>
      </form>
    </div>
  );
};

export default UpdateMovie;
