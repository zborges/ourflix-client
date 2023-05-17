import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useSignIn } from "react-auth-kit";
import { userLoggedIn } from "../actions/authActions";
import FormAction from "./FormAction";
import Input from "./Input";

function Login() {
  let fieldsState = {};
  const [loginState, setLoginState] = useState(fieldsState);
  const signIn = useSignIn();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

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

  loginFields.forEach((field) => (fieldsState[field.id] = ""));

  const handleChange = (e) => {
    setLoginState({ ...loginState, [e.target.id]: e.target.value });
    const obj = JSON.stringify(loginState, null, 2);
    console.log(obj);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    authenticateUser();
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
          expiresIn: 60 * 60 * 24 * 1000,
          tokenType: "Bearer",
          authState: { email: data.email },
        });
        if (data.accessToken) {
          dispatch(userLoggedIn());
        }
      })
      .catch((err) => {
        console.log("err:", err);
      });
    console.log("authenticateUser");
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      {state.loggedIn ? <p>Logged in</p> : <p>Not logged in</p>}
      <div className="-space-y-px">
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
      <FormAction type={"loginButton"} handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}

export default Login;
