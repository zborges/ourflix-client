import FormAction from "./FormAction";
import { useDispatch } from "react-redux";
import { userLoggedOut } from "../actions/authActions";
import { useSignOut } from "react-auth-kit";

function Logout() {
  const dispatch = useDispatch();
  const signOut = useSignOut();

  const handleSubmit = () => {
    signOut();
    dispatch(userLoggedOut());
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <FormAction handleSubmit={handleSubmit} text="Logout" />
    </form>
  );
}

export default Logout;
