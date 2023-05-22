import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import FormAction from "../buttons/FormActionButton";
import Input from "../forms/InputForm";

let fieldsState = {};

const signupFields = [
  {
    labelText: "First name",
    labelFor: "first-name",
    id: "firstName",
    name: "firstName",
    type: "firstName",
    autoComplete: "firstName",
    isRequired: true,
    placeholder: "First name",
  },
  {
    labelText: "Last name",
    labelFor: "last-name",
    id: "lastName",
    name: "lastName",
    type: "lastName",
    autoComplete: "lastName",
    isRequired: true,
    placeholder: "Last name",
  },
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

function Register() {
  const navigate = useNavigate();
  signupFields.forEach((field) => (fieldsState[field.id] = ""));
  const [signupState, setSignupState] = useState(fieldsState);

  const handleChange = (e) =>
    setSignupState({ ...signupState, [e.target.id]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(signupState);
    createAccount();
  };

  useEffect(() => {
    console.log(signupState);
  });

  //handle Signup API Integration here
  const createAccount = () => {
    fetch("/users/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstName: signupState.firstName.toLowerCase(),
        lastName: signupState.lastName.toLowerCase(),
        email: signupState.email.toLowerCase(),
        password: signupState.password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          alert("Thank you for signing up! Please login to continue.");
          navigate("/", { replace: true });
        }
      })
      .catch((err) => {
        console.log("err:", err);
        alert("Something went wrong. Please try again.");
      });
  };

  return (
    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
      <div className="">
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

export default Register;
