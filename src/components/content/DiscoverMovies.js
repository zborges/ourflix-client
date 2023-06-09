import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { userLoggedIn } from "../../actions/auth";
import MovieModal from "./MovieModal";
const IMG_URL = "https://image.tmdb.org/t/p/w200/";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [isShow, invokeModal] = useState(false);
  const [status, setStatus] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState("");
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const initModal = () => {
    console.log("initModal");
    return invokeModal(!isShow);
  };

  const fetchMovies = () => {
    fetch("/movies", {
      headers: {
        "Content-Type": "application/json",
      },
    })
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
    console.log("state:", state);
  }, []);

  const addMovieToUser = (movie) => {
    fetch("/movies", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        movie: {
          movieId: movie.id,
          title: movie.title,
          overview: movie.overview,
          image: movie.poster_path,
          users: [state.userData.userData._id],
        },
        user: {
          id: state.userData._id,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        setStatus(data.message);
        console.log("data:", data);
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  const handleClick = (movie) => {
    setStatus(null);
    setSelectedMovie(movie);
    initModal();
  };

  return (
    <div className="overflow-auto">
      <MovieModal
        initModal={initModal}
        isShow={isShow}
        selectedMovie={selectedMovie}
        addMovieToUser={addMovieToUser}
        status={status}
      />
      {movies ? (
        <div className="flex flex-row flex-wrap max-w-full justify-center rounded overflow-hidden shadow-lg bg-teal-500 space-x-4 space-y-3">
          {movies.map((movie) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a
                className="cursor-pointer h-full"
                onClick={() => handleClick(movie)}
              >
                <div className="bg-white shadow-sm rounded-md py-2 flex justify-center flex-col text-center items-center break-normal w-40">
                  <img
                    className="object-cover h-full w-3/4 rounded-md"
                    src={`${IMG_URL}/${movie.poster_path}`}
                    alt={`${movie.title}`}
                  />
                  <p className="text-sm py-1 text-ellipsis">{movie.title}</p>
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
