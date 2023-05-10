import { useState } from "react";
import FormAction from "./FormAction";
import Input from "./Input";

const signupFields = [
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
let fieldsState = {};

signupFields.forEach((field) => (fieldsState[field.id] = ""));

function Signup() {
  const [signupState, setSignupState] = useState(fieldsState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setSignupState({ ...signupState, [e.target.id]: e.target.value });
    console.log(signupState);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  //handle Signup API Integration here
  const createAccount = () => {};

  const successMessage = () => {
    return (
      <div
        className="success"
        style={{
          display: submitted ? "" : "none",
        }}
      >
        <h1>User {signupState.email} successfully registered!!</h1>
      </div>
    );
  };

  const errorMessage = () => {
    return (
      <div
        className="error"
        style={{
          display: error ? "" : "none",
        }}
      >
        <h1>Please enter all the fields</h1>
      </div>
    );
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div>
        <div className="messages">
          {errorMessage()}
          {successMessage()}
        </div>
        {signupFields.map((field) => (
          <Input
            key={field.id}
            handleChange={handleChange}
            value={signupState[field.id]}
            labelText={field.labelText}
            labelFor={field.labelFor}
            id={field.id}
            name={field.name}
            type={field.type}
            isRequired={field.isRequired}
            placeholder={field.placeholder}
          />
        ))}
        <FormAction handleSubmit={handleSubmit} text="Signup" />
      </div>
    </form>
  );
}

export default Signup;
