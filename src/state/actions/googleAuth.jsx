import axios from "axios";
import { SIGNIN } from "./actionTypes";


export const googleAuth = (Gdata) => async (dispatch) => {
  console.log(Gdata);
  try {
    const  data  = await axios.post(
      "https://api.yourbrandfolio.com/login/google_login",
      Gdata
    );
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
        email:email,
        username: username,
      };
      dispatch({ type: SIGNIN,payload:userdata});
      return data;
    }
  } catch (error) {
    return error;
  }
};
