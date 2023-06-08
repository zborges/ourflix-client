import { GET_USER } from "../actionTypes/actionTypes";

const getUser = (userId) => {
  return async (dispatch) => {
    try {
      // Make an API request to fetch user data
      const response = await fetch(`/users/${userId}`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userData = await response.json();
      console.log("userData:", userData.user)
      // Dispatch the action with the retrieved user data
      dispatch({
        type: GET_USER,
        userData: userData.user,
      })
    } catch (error) {
      // Handle any error that occurred during the API request
      console.error("Error while fetching user:", error);
    }
  };
};

export { getUser };