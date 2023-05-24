import FormAction from "../FormActionButton";
import { useNavigate } from "react-router-dom";

function ProfileButton() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/profile", { replace: true });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <FormAction handleSubmit={handleSubmit} text="Profile" />
    </form>
  );
}

export default ProfileButton;
