import { useEffect } from "react";
import { useSelector } from "react-redux";
import MovieModal from "./MovieModal";

function Profile() {
  const state = useSelector((state) => state);

  const movies = state.user.movies;

  return (
    <div className="bg-orange-400">
      <MovieModal />
      <h1 style={{ textAlign: "center" }}>Welcome {state.user.firstName}</h1>
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
