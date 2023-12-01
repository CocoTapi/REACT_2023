import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';
import AddMovie from './components/AddMovie';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true)
    setError(null);
    try {
      const response = await fetch('https://react-http-d316b-default-rtdb.firebaseio.com/movies.json');
      const data = await response.json();

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }

      const loadedMovies = [];

      for(const key in data) {
        loadedMovies.push({
          id: key,
          title: data[key].title,
          openingText: data[key].openingText,
          releaseDate: data[key].releaseDate,
        })
      }
    
      // const transformedMovies = data.map(movieData => {
      //   return {
      //     id: movieData.episode_id,
      //     title: movieData.title,
      //     openingText: movieData.opening_crawl,
      //     releasedDate: movieData.release_date
      //   };
      // });
      setMovies(loadedMovies);
    } catch (error){
      setError(error.message);
    }
      setIsLoading(false);
    }, []);

     useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  async function addMovieHandler(movie) {
    const response = await fetch('https://react-http-d316b-default-rtdb.firebaseio.com/movies.json', {
      method: 'POST',
      body: JSON.stringify(movie),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    console.log(data);
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
        <AddMovie onAddMovie={addMovieHandler}/>
      </section>
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
