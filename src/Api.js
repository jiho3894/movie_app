export const fetchMovie = () => {
  return fetch(
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
  ).then(response => response.json());
}

export const fetchDetail = (id) => {
  return fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  .then(response => response.json());
}