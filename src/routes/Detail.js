import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";

const Detail = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState([]);
  const [loading, setLoding] = useState(true);
  const getMovie = useCallback(async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoding(false);
  }, [id]);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <img alt="" src={movie.large_cover_image} />
          <h3>{movie.title}</h3>
          <p>{movie.description_intro}</p>
        </div>
      )}
    </>
  );
};

export default Detail;
