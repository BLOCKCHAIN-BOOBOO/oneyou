import React, {useState} from "react";
import { Accordion } from "react-bootstrap-accordion";
import home from "../../images/home.png";
import file from "../../images/file.png";
import downarrow from "../../images/downarrow.png";
import arrow from "../../images/arrow.png";
import refresh from "../../images/refresh.png";
import publishicon from "../../images/publish-icon.png"
import downarrowwhite from "../../images/downarrowwhite.png";
import forwardarrow from "../../images/forward-arrow.png";
import settings from "../../images/settings.png";
import deleteicon from "../../images/delete-icon.png";
import settingrefresh from "../../images/setting-refresh.png";
import {  useNavigate } from "react-router-dom";

const Account = () => {
  const [typeActive, setTypeActive] = useState("your details");
 const navigate=useNavigate()
    const handleTypeActive = (typesale) => {
    setTypeActive(typesale);
    console.log(typesale)
    };

    const signOut=()=>{
      sessionStorage.clear();
      navigate("/login")
    }

    return (
          
        <div className="flex flex-col w-full h-full m-2">
          {/* <div className="flex self-center justify-center mx-auto"> */}
           
            <div className=" flex w-full right-0 h-full">
              {/*home-about  dir="ltr" */}
             
                <div className="home-about-me w-full">
                    
                     <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
             User Account Settings
            </div>
            <div className="flex flex-col self-start h-full">
            <div className="flex self-start w-full m-2"><span className="setting-page-text self-center justify-center">Account Linked:</span>
           
           <div className="flex m-4">
            <button type="button" className="login-with-google-text">
            <i className="fa fa-google text-3xl m-2"></i>Google: </button>
           <span className="login-with-google-text">abc@gmail.com</span>
            <span>
                <button className="publish-site py-2 px-7 m-4">Change <img src={settingrefresh} className="ml-2" height="15" width="15" /></button>
            </span>
            </div>
            </div>
            <div className="flex self-start w-full m-2">
            <span className="setting-page-text self-center justify-center">Delete Account:</span>
            <span>
            <button className="setting-delete-btn px-10 mx-2">Delete 
            <img src={deleteicon} className="ml-2" height="13" width="13" /></button></span>
            </div>
            <div className="flex self-start w-full m-2">
            <span className="setting-page-text self-center justify-center">Logout Account:</span>
            <span className=""> 
            <button className="publish-site py-2 px-6 m-4" onClick={signOut}>Logout</button>
                
                </span></div>
                </div>
            </div>
            </div>
          {/* </div> */}
        </div>
      
  );
};

export default Account;
