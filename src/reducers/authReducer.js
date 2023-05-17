import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../actionTypes/actionTypes";

const initialState = {
  loggedIn: false,
};

function authReducer(state = initialState, action, payload) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        loggedIn: true,
      };
    case USER_LOGGED_OUT:
      return {
        ...state,
        loggedIn: false,
      };

    default:
      return state;
  }
}

export default authReducer;
