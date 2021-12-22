import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import styled from "styled-components";

const Body = styled.body`
  width: 100%;
  height: 800px;
`;

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
  console.log(movie);
  useEffect(() => {
    getMovie();
  }, [getMovie]);
  const opts = {
    position: "absolute",
    width: "100%",
    height: "850px",
    frameborder: "0",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <Body>
          <h4>{movie.title} / {movie.date_uploaded_unix} view / {movie.year}</h4>
          <p>{movie.description_intro}</p>
          {movie.yt_trailer_code === "" ? <h1>유튜브 영상이 없습니다.</h1> : <YouTube opts={opts} videoId={movie.yt_trailer_code} />}
          {/* <img alt="" src={movie.large_cover_image} /> */}
          
        </Body>
      )}
    </>
  );
};

export default Detail;
