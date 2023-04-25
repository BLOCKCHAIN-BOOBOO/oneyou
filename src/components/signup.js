import React from "react";

const Signup = () => {
 
    return (
    <div className="page-background flex self-center align-middle justify-center h-screen">
      <div className="flex flex-col xl:w-2/6 md:w-3/6 sm:w-3/6 w-5/6 py-10 px-5 bg-white rounded-xl self-center justify-center align-middle">
         <form className="form-control">
        <div className="text-3xl w-full login-header">Welcome to Oneyou</div>
        <div className="welcome-text py-2">We are Excited to see you on next side.</div>

        <div className="flex self-center justify-center py-4">
        <button type="button" className="login-with-google-btn login-with-google-text rounded-2xl rounded-full">
            <i className="fa fa-google text-3xl"></i>Signup with Google </button>
        </div>

        <div className="flex flex-col self-center justify-center">
            <div className="signup-page-text self-center justify-center">By continuing, you agree to our </div>
            <div className="terms-text self-center justify-center">Terms of Service and Privacy Policy</div>
        </div>

       <div className="flex flex-row self-center justify-center py-2">
        <div className="flex self-center justify-center text-xs sm:text-sm md:text-sm xl:text-md">Already have an account</div>
        <div className="signup-text ml-2">Log In</div>
       </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
