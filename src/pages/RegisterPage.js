import Header from "../components/content/AuthHeader";
import Register from "../components/content/Register";

function RegisterPage() {
  return (
    <>
      <div className="flex items-center flex-col bg-red-400">
        <Header
          heading="Sign up to create an account"
          paragraph="Already have an account? "
          linkName="Login"
          linkUrl="/"
        />
        <Register />
      </div>
    </>
  );
}
export default RegisterPage;
