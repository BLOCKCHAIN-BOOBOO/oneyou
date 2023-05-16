import axios from "axios";
import { BASEURL, SIGNIN } from "./actionTypes";

export const googleAuth = (gToken) => async (dispatch) => {
  console.log(gToken);
  try {
    const data = await axios.post(BASEURL + "/login/google_login", gToken);
    console.log("google data ", data);
    if (data?.data?.code === "success") {
      sessionStorage.setItem("token", data?.data?.data?.token);
      let token = sessionStorage.getItem("token");
      sessionStorage.setItem("email", data?.data?.data?.email);
      let email = sessionStorage.getItem("email");
      sessionStorage.setItem("username", data?.data?.data?.name);
      let username = sessionStorage.getItem("username");

      let userdata = {
        token: token,
        email: email,
        username: username,
      };
      dispatch({ type: SIGNIN, payload: userdata });
      return data;
    }
  } catch (error) {
    return error;
  }
};
