import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useSignIn } from "react-auth-kit";
import { userLoggedIn } from "../../actions/authActions";
import FormAction from "../buttons/FormActionButton";
import Input from "../forms/InputForm";

function Login() {
  let fieldsState = {};
  const [loginState, setLoginState] = useState(fieldsState);
  const signIn = useSignIn();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const navigate = useNavigate();

  const loginFields = [
    {
      labelText: "Email address",
      labelFor: "email",
      id: "email",
      name: "email",
      type: "email",
      autoComplete: "email",
      isRequired: true,
      placeholder: "Email address",
    },
    {
      labelText: "Password",
      labelFor: "password",
      id: "password",
      name: "password",
      type: "password",
      autoComplete: "current-password",
      isRequired: true,
      placeholder: "Password",
    },
  ];

  useEffect(() => {
    if (state.loggedIn) {
      navigate("/profile", { replace: true });
    }
  });

  useEffect(() => {
    console.log("state:", state);
  }, []);

  loginFields.forEach((field) => (fieldsState[field.id] = ""));

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
    navigate("/profile", { replace: true });
  };

  const authenticateUser = () => {
    fetch("/users/sign-in", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: loginState.email.toLowerCase(),
        password: loginState.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        signIn({
          token: data.accessToken,
          expiresIn: 60 * 60 * 24 * 3,
          tokenType: "Bearer",
          authState: { email: data.email },
        });
        if (data.accessToken) {
          console.log("data:", data);
          dispatch(userLoggedIn(data.user));
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
  };

  return (
    <form
      className="bg-slate-400 sm:w-full md:w-2/5 lg:w-1/2 h-full "
      onSubmit={handleSubmit}
    >
      <div className="">
        {loginFields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={loginState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
      </div>
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}

export default Login;
