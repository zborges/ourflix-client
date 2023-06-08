import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import MovieModal from "./MovieModal";
import { getUser } from "../../actions/userActions";

function Profile() {
  const state = useSelector((state) => state);
  const movies = state.userData.userData.movies;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(state)
  })
  useEffect(() => {
    console.log("IS this useeffecting")
    dispatch(getUser(state.auth.user._id));
  }, []);

  return (
    <div className="bg-orange-400">
      <MovieModal />
      <h1 style={{ textAlign: "center" }}>Welcome {state.auth.user.firstName}</h1>
      <h3>Your movies are:</h3>
      {movies.map((movie) => (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <p>{movie.title}</p>
            </div>
            <p className="text-gray-700 text-base">{movie.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
export default Profile;
