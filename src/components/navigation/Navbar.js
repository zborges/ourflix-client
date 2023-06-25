import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../../actions/authActions";
import { useState } from "react";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut();
    dispatch(userLoggedOut());
    navigate("/", { replace: true });
    console.log("logout");
  };

  return (
    <div className="bg-slate-500 w-full h-12">
      <ul class="flex mt-2 ml-4">
        <li class="mr-6">
          <Link to="/profile" className="text-lg">
            Profile
          </Link>
        </li>
        <li className="mr-6">
          <Link to="/movies" className="text-lg">
            Movies
          </Link>
        </li>
        <li class="mr-6">
          <form className="">
            <button
              className="text-lg"
              type={"submit"}
              onClick={() => handleLogout()}
            >
              Logout
            </button>
          </form>
        </li>
      </ul>
    </div>
  );
}
export default Navbar;
