import Header from "../components/Header";
import Signup from "../components/Signup";

function SignupPage() {
  return (
    <>
      <Header
        heading="Sign up to create an account"
        paragraph="Already have an account? "
        linkName="Login"
        linkUrl="/"
      />
      <Signup />
    </>
  );
}
 export default SignupPage;