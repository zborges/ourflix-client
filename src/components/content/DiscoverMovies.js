import { useEffect, useState } from "react";
import MovieModal from "./MovieModal";
const IMG_URL = "https://image.tmdb.org/t/p/w200/";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [isShow, invokeModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState("");

  const initModal = () => {
    console.log("initModal");
    return invokeModal(!isShow);
  };

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

  const handleClick = (movie) => {
    console.log("click");
    setSelectedMovie(movie);
    initModal();
  };

  return (
    <div className="overflow-auto">
      <MovieModal
        initModal={initModal}
        isShow={isShow}
        selectedMovie={selectedMovie}
        IMG_URL={IMG_URL}
      />
      <h3>Select some movies!</h3>
      {movies ? (
        <div className="flex flex-col max-w-sm rounded overflow-hidden shadow-lg bg-slate-200">
          {movies.map((movie) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a className="cursor-pointer" onClick={() => handleClick(movie)}>
                <div className="py-5">
                  <img
                    src={`${IMG_URL}/${movie.poster_path}`}
                    alt={`${movie.title}`}
                  />
                  <h2 className="text-l">{movie.title}</h2>
                </div>
              </a>
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
