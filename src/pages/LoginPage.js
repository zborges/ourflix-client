import Header from "../components/Header";
import Login from "../components/Login";
import Logout from "../components/Logout";

function LoginPage() {
  return (
    <>
      {" "}
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
      <Logout />
    </>
  );
}

export default LoginPage;