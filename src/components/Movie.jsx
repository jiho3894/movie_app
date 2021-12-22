import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieBox = styled.div`
  background-color: white;
  margin-bottom: 70px;
  font-weight: 300;
  padding: 20px;
  border-radius: 5px;
  color: #adaeb9;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 13px 27px -5px rgba(50, 50, 93, 0.25),
    0 8px 16px -8px rgba(0, 0, 0, 0.3), 0 -6px 16px -6px rgba(0, 0, 0, 0.025);
`;

const MoiveImg = styled.img`
  position: relative;
  top: -50px;
  max-width: 150px;
  width: 100%;
  margin-right: 30px;
  box-shadow: 0 30px 60px -12px rgba(50, 50, 93, 0.25),
    0 18px 36px -18px rgba(0, 0, 0, 0.3), 0 -12px 36px -8px rgba(0, 0, 0, 0.025);
`;

const MoiveTitle = styled.h2`
  margin: 0;
  font-weight: 600;
  text-decoration: none;
`;

const MoiveYear = styled.h3`
  margin: 0;
  font-weight: 300;
  text-decoration: none;
`;

const MovieGenres = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  margin: 5px 0px;
`;

const Movie = ({ id, coverImg, title, year, summary, genres }) => {
  return (
    <MovieBox>
      <Link to={`/Detail/${id}`}>
        <MoiveImg alt="" src={coverImg} />
      </Link>
      <MoiveTitle>{`${title} `}</MoiveTitle>
      <MoiveYear>{year}</MoiveYear>
      <p>{summary.length > 250 ? `${summary.slice(0, 100)}...` : summary}</p>
      <MovieGenres>
        {genres.map((g, value) => (
          <li key={value}>{g}</li>
        ))}
      </MovieGenres>
    </MovieBox>
  );
};

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
