import Header from "../components/Header";
import Register from "../components/Register";

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
