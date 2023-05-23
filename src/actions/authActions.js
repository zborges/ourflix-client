import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  UPDATE_USER,
} from "../actionTypes/actionTypes";
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

const updateUser = (user) => {
  return {
    type: UPDATE_USER,
    user: user,
  };
};

export { userLoggedIn, userLoggedOut, updateUser };
