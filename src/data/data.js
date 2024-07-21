// src/data/data.js
export const moviesData = [
  {
    id: 1,
    genre: 'Action',
    name: 'Movie 1',
    releaseDate: '2024-01-01',
    showtime: '10:00 AM',
    imdbRating: '7.5',
    description: 'Description for Movie 1'
  },
  // Add more movies as needed
];

export const deleteMovie = (id, movies, setMovies) => {
  setMovies(movies.filter(movie => movie.id !== id));
};

export default moviesData;
