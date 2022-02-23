import PropTypes from 'prop-types';
import styled from '../Detail.module.css';

function MovieDetail({
  bgImg,
  title,
  description,
  uploadDate,
  downCount,
  genres,
  rating,
  runtime,
}) {
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImg})` }}
        className={styled.detailBg}
      ></div>
      <h1>{title}</h1>
      <p>{description}</p>
      <div>개봉일 : {uploadDate}</div>
      <div>다운로드 수: {downCount}</div>
      <div className={styled.genres}>
        장르 :
        {genres.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>
      <div>별점 : {rating}</div>
      <div>런타임 : {runtime}분</div>
    </div>
  );
}

MovieDetail.prototype = {
  bgImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  uploadDate: PropTypes.string.isRequired,
  downCount: PropTypes.number.isRequired,
  genres: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default MovieDetail;
