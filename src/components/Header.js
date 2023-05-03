import { Outlet, Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-blue-300">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Signup">Signup</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
};

export default Header;
