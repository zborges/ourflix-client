import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  UPDATE_USER,
} from "../actionTypes/actionTypes";

const initialState = {
  loggedIn: false,
  user: null,
};

function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
        user: action.user,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        user: {},
        loggedIn: false,
      };

    case UPDATE_USER:
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
}

export default authReducer;
