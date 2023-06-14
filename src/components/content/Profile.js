import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieModal from "./MovieModal";
import { getUser } from "../../actions/userActions";

function Profile() {
  const state = useSelector((state) => state);
  const movies = state.userData.userData.movies;
  const dispatch = useDispatch();
  const IMG_URL = "https://image.tmdb.org/t/p/w200/";

  useEffect(() => {
    dispatch(getUser(state.auth.user._id));
  }, []);

  return (
    <div className="bg-orange-400 h-screen">
      <MovieModal />
      <h1 className="text-center">Welcome {state.auth.user.firstName}</h1>
      <h3>Your movies are:</h3>
      <div className="flex flex-row flex-wrap justify-center rounded space-x-4 min-w-0">
        {movies.map((movie) => (
          <div className="px-6 py-4 font-bold text-xl mb-2 text-center break-words">
            <img
              className="object-cover rounded-md h-auto max-w-full"
              src={`${IMG_URL}/${movie.image}`}
              alt={`${movie.title}`}
            />
            <p className="">{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Profile;
