import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function Header({ heading, paragraph, linkName, linkUrl = "#" }) {
  return (
    <div className="w-2/5">
      <div className="flex justify-center">
        <img src={logo} alt="logo" className="w-20 h-20 mt-8" />
      </div>
      <h2 className="mt-6 ml-30 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-purple-600 hover:text-purple-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
}

export default Header;
