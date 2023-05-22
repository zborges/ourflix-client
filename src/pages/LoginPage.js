import Header from "../components/content/AuthHeader";
import Login from "../components/content/Login";

function LoginPage() {
  return (
    <div className="flex items-center flex-col">
      {" "}
      <Header
        heading="Login to your account"
        paragraph="Don't have an account yet? "
        linkName="Signup"
        linkUrl="/signup"
      />
      <Login />
    </div>
  );
}

export default LoginPage;
