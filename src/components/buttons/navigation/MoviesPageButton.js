import FormAction from "../FormActionButton";
import { useNavigate } from "react-router-dom";

function MoviesPageButton() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate("/movies", { replace: true });
  };

  return (
    <form className="" onSubmit={handleSubmit}>
      <FormAction handleSubmit={handleSubmit} text="Find Movies" />
    </form>
  );
}

export default MoviesPageButton;
