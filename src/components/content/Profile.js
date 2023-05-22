import { useEffect } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  });
  return (
    <div className="bg-orange-400 h-full">
      <h1 style={{ textAlign: "center" }}>Welcome {state.user.firstName}</h1>
      <h3>Your movies are:</h3>
      <div>
        <ul>{state.user.movies.map((movie) => movie.title)}</ul>
      </div>
    </div>
  );
}
export default Profile;
