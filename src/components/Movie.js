import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from '../Movie.module.css';

function Movie({ id, coverImg, title, summary, genres }) {
  return (
    <div className={styled.movieItem}>
      <img src={coverImg} alt={title} />
      <div className={styled.movieItemText}>
        <h2>
          <Link to={`/movie/${id}`}>{title}</Link>
        </h2>
        <ul>
          {genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
        <p>{summary.length > 210 ? `${summary.slice(0, 210)}...` : summary}</p>
      </div>
    </div>
  );
}

Movie.prototype = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
