import { useQuery } from "react-query";
import { useParams } from "react-router";
import YouTube from "react-youtube";
import styled from "styled-components";
import { fetchDetail } from "../Api";

const Body = styled.body`
  width: 100%;
  height: 800px;
`;

const Detail = () => {
  const { id } = useParams();
  const {isLoading, data : detail } = useQuery(["DetailMovie",id], () => fetchDetail(id));
  /* const [movie, setMovie] = useState([]);
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
  }, [getMovie]); */
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
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <Body>
          <h4>{detail.data.movie.title} / {detail.data.movie.date_uploaded_unix} view / {detail.data.movie.year}</h4>
          <p>{detail.data.movie.description_intro}</p>
          {detail.data.movie.yt_trailer_code === "" ? <h1>유튜브 영상이 없습니다.</h1> : <YouTube opts={opts} videoId={detail.data.movie.yt_trailer_code} />}
          {/* <img alt="" src={movie.large_cover_image} /> */}
          
        </Body>
      )}
    </>
  );
};

export default Detail;
