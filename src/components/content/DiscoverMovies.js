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
        setMovies(data.results);
      })

      .catch((err) => {
        console.log("err:", err);
      });
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="overflow-auto">
      <h3>Select some movies!</h3>
      {movies ? (
        <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
          {movies.map((movie) => {
            return (
              <div className="py-5">
                <img
                  src={`${IMG_URL}/${movie.poster_path}`}
                  alt={`${movie.title}`}
                />
                <h2 className="text-l">{movie.title}</h2>
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
