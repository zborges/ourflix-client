import LogoutButton from "../buttons/navigation/LogoutButton";
import MoviesPageButton from "../buttons/navigation/MoviesPageButton";

function Navbar() {
  return (
    <div className="flex align-top w-2/5">
      <LogoutButton />
      <MoviesPageButton />
    </div>
  );
}
export default Navbar;
