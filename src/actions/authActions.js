import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actionTypes/actionTypes";
const userLoggedIn = (user) => {
  return {
    type: USER_LOGGED_IN,
    user: user,
  };
};

const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export { userLoggedIn, userLoggedOut };
