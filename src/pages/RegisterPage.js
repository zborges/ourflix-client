import Header from "../components/content/AuthHeader";
import Register from "../components/content/Register";

function RegisterPage() {
  return (
    <>
      <Header
        heading="Sign up to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <Register />
    </>
  );
}
export default RegisterPage;
