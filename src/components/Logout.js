import FormAction from "./FormAction";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../actions/authActions";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Logout() {
  const dispatch = useDispatch();
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleSubmit = () => {
    signOut();
    dispatch(userLoggedOut());
    navigate("/", { replace: true });
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <FormAction handleSubmit={handleSubmit} text="Logout" />
    </form>
  );
}

export default Logout;
