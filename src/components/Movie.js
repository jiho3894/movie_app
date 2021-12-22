import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Movie = ({ id, coverImg, title, summary, genres}) => {
  return (
    <div>
      <img alt="" src={coverImg} />
      <Link to={`/Detail/${id}`}>
        <h3>{title}</h3>
      </Link>
      <p>{summary}</p>
      <ul>
        {genres.map((g, value) => (
          <li key={value}>{g}</li>
        ))}
      </ul>
    </div>
  );
};

Movie.propTypes = {
  id:PropTypes.number.isRequired,
  coverImg:PropTypes.string.isRequired,
  title:PropTypes.string.isRequired,
  summary:PropTypes.string.isRequired,
  genres:PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default Movie;
