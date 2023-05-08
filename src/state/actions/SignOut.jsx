import { SIGNOUT } from "./actionTypes";

const SignOut = () => async (dispatch) => {
  try {
    
      sessionStorage.clear();
      sessionStorage.removeItem("token")
      sessionStorage.removeItem("email")
      sessionStorage.removeItem("username")
    const userdata = {
      email: null,
      token: null,
      username: null,
    };
    dispatch({ type: SIGNOUT, payload: userdata });
    return userdata;
  } catch (error) {
    console.log(error.message);
    return error;
  }
};
export default SignOut;
