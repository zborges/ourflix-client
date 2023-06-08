import { GET_USER } from "../actionTypes/actionTypes";

const initialState = {
  userData: null,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        userData: { ...action.userData },
      };
    default:
      return state;
  }
}

export default userReducer;