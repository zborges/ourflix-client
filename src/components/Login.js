import { useState } from "react";

import { useSignIn } from "react-auth-kit";
import FormAction from "./FormAction";
import FormExtra from "./FormExtra";
import Input from "./Input";

function Login() {
  const [loginState, setLoginState] = useState(fieldsState);
  const signIn = useSignIn();
  let fieldsState = {};

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
        email: loginState.email,
        password: loginState.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("data:", data);
        console.log("email:", loginState.email);
        console.log("password:", loginState.password);

        signIn({
          token: data.accessToken,
          expiresIn: 60 * 60 * 24 * 1000,
          tokenType: "Bearer",
          authState: { email: data.email },
        });
      })
      .catch((err) => {
        console.log("err:", err);
      });
    console.log("authenticateUser");
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
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

      <FormExtra />
      <FormAction handleSubmit={handleSubmit} text="Login" />
    </form>
  );
}

export default Login;
