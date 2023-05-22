import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actionTypes/actionTypes";

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

    default:
      return state;
  }
}

export default authReducer;
