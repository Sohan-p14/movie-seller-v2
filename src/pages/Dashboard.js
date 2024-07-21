// src/pages/Dashboard.js

import React, { useState } from 'react';
import MovieInventory from '../components/MovieInventory'; // Ensure this component exists and is properly imported
import './Dashboard.css'; // Ensure you have some basic styling

const Dashboard = () => {
  // Sample movie data
  const [movies, setMovies] = useState([
    {
      id: 1,
      name: 'Inception',
      genre: 'Sci-Fi',
      rating: '8.8',
      description: 'A mind-bending thriller.',
      time: '148 minutes',
      imageUrl: 'https://example.com/inception.jpg'
    },
    {
      id: 2,
      name: 'The Matrix',
      genre: 'Action',
      rating: '8.7',
      description: 'A hacker discovers the true nature of reality.',
      time: '136 minutes',
      imageUrl: 'https://example.com/matrix.jpg'
    }
    // Add more movie objects as needed
  ]);

  // Functions to handle adding, updating, and deleting movies
  const handleAddMovie = () => {
    // Logic for adding a movie
  };

  const handleUpdateMovie = (id) => {
    // Logic for updating a movie
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter(movie => movie.id !== id));
  };

  return (
    <div className="dashboard-container">
      <h1>Movie Dashboard</h1>
      <button onClick={handleAddMovie}>Add Movie</button>
      <table className="movie-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Genre</th>
            <th>Rating</th>
            <th>Description</th>
            <th>Time</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {movies.map(movie => (
            <tr key={movie.id}>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.rating}</td>
              <td>{movie.description}</td>
              <td>{movie.time}</td>
              <td><img src={movie.imageUrl} alt={movie.name} className="movie-image" /></td>
              <td>
                <button onClick={() => handleUpdateMovie(movie.id)}>Update</button>
                <button onClick={() => handleDeleteMovie(movie.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
