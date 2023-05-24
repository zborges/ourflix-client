import LogoutButton from "../buttons/navigation/LogoutButton";
import MoviesPageButton from "../buttons/navigation/MoviesPageButton";
import ProfileButton from "../buttons/navigation/ProfileButton";

function Navbar() {
  return (
    <div className="flex align-top w-2/5">
      <LogoutButton />
      <MoviesPageButton />
      <ProfileButton />
    </div>
  );
}
export default Navbar;
