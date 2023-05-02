import React, { useState}from "react";
import { NavLink,useNavigate } from "react-router-dom";
import { useGoogleLogin } from "@react-oauth/google";
import { googleAuth } from "../state/actions/googleAuth";
import { useDispatch } from "react-redux";

const Login = () => {

  const [errmsg, seterrMsg] = useState("")

const navigate=useNavigate()
const dispatch=useDispatch()
const googlelogin = useGoogleLogin({
    onSuccess: (tokenResponse) => {
      getUserGoogleProfile(tokenResponse.access_token);
    },
  });

  const getUserGoogleProfile = async (accesstoken) => {
    try {
      if (accesstoken) {
        console.log(accesstoken);
        window.sessionStorage.setItem("web0auth", accesstoken);
        const data = {
          google_token: accesstoken,
        };
        await dispatch(googleAuth(data)).then((res) => {
          console.log("res",res)
          if (res?.data?.code === "success") {
            seterrMsg(res?.data?.message);

            navigate("/profile");
            //  setisLoader(false);
          } else if (res?.response?.data?.code === "failed") {
            seterrMsg(res?.response?.data?.message);
            //  setisLoader(false);
          } else if (res?.code === "ERR_NETWORK") {
            seterrMsg(res?.message);
          } else {
            seterrMsg("something went wrong");
            //  setisLoader(false);
          }
        });
      }
    } catch (error) {}
    return;
  };

 
    return (
      <>
    <div className="page-background flex self-center h-full absolute w-full align-middle justify-center">
      <div className="flex flex-col mx-auto xl:w-2/6 md:w-3/6 sm:w-3/6 w-6/6 py-10 px-2 bg-white rounded-xl self-center justify-center align-middle">
         <form className="form-control">
        <div className="w-full login-header">Login</div>
        <div className="welcome-text flex self-center justify-center text-xs sm:text-sm md:text-md xl:text-md py-2">Welcome Back, We are Happy to see you again</div>

        {/* <div className="m-3 w-5/6 mx-auto self-center justify-center">
          <label className="flex self-start justify-start pb-2">Username</label>
          <input type="text" className="mx-auto w-full input-text" />
        </div> */}

        <div className="flex self-center justify-center py-4">
        <button type="button" className="login-with-google-btn login-with-google-text rounded-2xl rounded-full"   onClick={googlelogin}>
            <i className="fa fa-google text-3xl"></i>Login with Google </button>
        </div>
<div>{errmsg&&errmsg}</div>
       <div className="flex flex-row self-center justify-center py-2">
        <div className="flex self-center justify-center text-xs sm:text-sm md:text-sm xl:text-md">Don't have an account</div>
        <div className="signup-text ml-2">Sign Up</div>
       </div>
        </form>
      </div>
    </div>
     <div className="w-full py-3 footer px-2 sm:px-2 md:px-5 xl:px-10" > 
    <footer className="">   
        <div className="flex justify-between xl:flex-row md:flex-row sm:flex-row flex-col w-full relative">
           {/* py-4 */}
        <div className="footer-text flex self-center">© 2024 . All rights are reserved by Oneyou.in </div>
         
        
        <div>
       <ul className="flex self-center py-2 justify-center">
            <li className="cursor-pointer xl:mx-4 md:mx-4 sm:mx-2 mx-2 footer-text flex">
              {/* hidden sm:hidden md:flex xl: */}
              <NavLink
                to="/"
                className=""
              >
                About
              </NavLink>
            </li>

            <li className="cursor-pointer xl:mx-4 md:mx-4 sm:mx-2 mx-2 footer-text">
              <NavLink
                to="/exploreNFT/nfts"
                className=""
              >
               Support
              </NavLink>
            </li>
             <li className="cursor-pointer xl:mx-4 md:mx-4 sm:mx-2 mx-2 footer-text ">
              {/* hidden sm:hidden md:flex xl:flex */}
              <NavLink
                to="/exploreNFT/nfts"
                className=""
              >
              Contact Us
              </NavLink>
            </li>
            </ul>

        </div>
        </div>
      
   </footer>
    </div>
    </>
  );
};

export default Login;
