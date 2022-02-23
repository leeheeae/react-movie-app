import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import MovieDetail from '../components/MovieDetail';

function Detail() {
  //useState
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState({});
  const { id } = useParams();

  const getDetail = async () => {
    try {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      setDetails(json.data.movie);
      setLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <div>
          {
            <MovieDetail
              bgImg={details.background_image}
              title={details.title}
              description={details.description_full}
              uploadDate={details.date_uploaded}
              downCount={details.download_count}
              genres={details.genres}
              rating={details.rating}
              runtime={details.runtime}
            />
          }
        </div>
      )}
      <Link to="/">목록으로</Link>
    </div>
  );
}

export default Detail;
