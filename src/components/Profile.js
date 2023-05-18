import { useEffect } from "react";
import { useSelector } from "react-redux";

function Profile() {
  const state = useSelector((state) => state);
  useEffect(() => {
    console.log(state);
  });
  return (
    <h1 style={{ textAlign: "center" }}>Welcome {state.user.firstName}</h1>
  );
}
export default Profile;
