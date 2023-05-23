import { useEffect, useState } from "react";
const IMG_URL = "https://image.tmdb.org/t/p/w200/";

function Movies() {
  const [movies, setMovies] = useState(null);

  const fetchMovies = () => {
    fetch("/movies")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data:", data);
        setMovies(data.results);
        console.log("movies:", movies);
      })

      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="h-full overflow-auto">
      <h3>Select some movies!</h3>
      {movies ? (
        <div className="flex flex-col">
          {movies.map((movie) => {
            return (
              <div className="py-5">
                <img src={`${IMG_URL}/${movie.poster_path}`} alt={`${movie.title}`} />
                <h2 className="text-xl">{movie.title}</h2>
                <p className="text-sm">{movie.overview}</p>
              </div>
            );
          })}
        </div>
      ) : (
        "No movies found"
      )}
    </div>
  );
}
export default Movies;
