import { useEffect, useState } from 'react';
import Movie from '../components/Movie';
import styled from '../Movie.module.css';

function Home() {
  //useState
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  //fnc
  const getMovies = async () => {
    try {
      const json = await (
        await fetch(
          `https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year`
        )
      ).json();
      setMovies(json.data.movies);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  console.log(movies);

  //useEffect
  useEffect(() => {
    getMovies();
  }, []);

  //start
  return (
    <div>
      {loading ? (
        <h1>Loading ...</h1>
      ) : (
        <div className={styled.movieContainer}>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;
