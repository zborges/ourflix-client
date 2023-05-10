import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actionTypes/actionTypes";
const userLoggedIn = () => {
  return {
    type: USER_LOGGED_IN,
  };
};

const userLoggedOut = () => {
  return {
    type: USER_LOGGED_OUT,
  };
};

export { userLoggedIn, userLoggedOut };
