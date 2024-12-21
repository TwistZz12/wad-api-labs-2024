export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=1d9cd19cdc9d8e15159437d1d1cbec27&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };