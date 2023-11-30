import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchMoviesHandler() {
    setIsLoading(true)
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/film/');
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
    
      const transformedMovies = data.results.map(movieData => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releasedDate: movieData.release_date
        };
      });
      setMovies(transformedMovies);
    } catch (error){
      setError(error.message);
    }
      setIsLoading(false);
    }

    let content;
    if(movies.length > 0) {
      content = <MoviesList movies={movies} />;
    } else if (error) {
      content = <p>Error fetching movies</p>
    } else if (isLoading) {
      content = <p>Loading...</p>
    } else {
      content = <p>Found no movies.</p>
    }

  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
    </React.Fragment>
  );
}

export default App;
