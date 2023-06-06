import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { userLoggedIn } from "../../actions/auth";
import MovieModal from "./MovieModal";
import { updateUser } from "../../actions/authActions";
const IMG_URL = "https://image.tmdb.org/t/p/w200/";

function Movies() {
  const [movies, setMovies] = useState(null);
  const [isShow, invokeModal] = useState(false);
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
          users: [state.user._id],
        },
        user: {
          id: state.user._id,
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        if (data.newMovie) {
          console.log("state user", state.user);
          dispatch(updateUser(state.user));
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

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
        addMovieToUser={addMovieToUser}
      />
      <h3>Select some movies!</h3>
      {movies ? (
        <div className="flex flex-row flex-wrap max-w-full justify-center rounded overflow-hidden shadow-lg bg-teal-500 space-x-4 space-y-3">
          {movies.map((movie) => {
            return (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <a className="cursor-pointer" onClick={() => handleClick(movie)}>
                <div className="bg-white shadow-sm rounded-md py-2 flex justify-center flex-col text-center items-center">
                  <img
                    className="object-cover h-full w-3/4 rounded-md"
                    src={`${IMG_URL}/${movie.poster_path}`}
                    alt={`${movie.title}`}
                  />
                  <h2 className="text-sm py-1">{movie.title}</h2>
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
