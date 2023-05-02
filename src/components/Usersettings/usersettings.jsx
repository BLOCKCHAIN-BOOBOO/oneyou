import React, {useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
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

const Usersettings = () => {
  const [typeActive, setTypeActive] = useState("your details");

    const [activeLink, setActiveLink] = useState("account");
 
    const handleActiveLink = (typesale) => {
    setActiveLink(typesale);
    console.log(typesale)
    };

  const navigate=useNavigate()

   const navigateToAccount = async () => {
    navigate('/usersettings/account');
  };
   const navigateToSubscription = async () => {
    navigate('/usersettings/subscriptionsetting');
  };

   const navigateToAbout = async () => {
    navigate('/usersettings/about');
  };
    const handleTypeActive = (typesale) => {
    setTypeActive(typesale);
    console.log(typesale)
    };

    return (
    <div className="page-background page-body flex self-center align-middle justify-center">
    
     <div className="m-8 flex flex-row w-full h-full settings-page">
    <div className="flex flex-row w-full h-5/6 mt-16" >      
      {/* dir="ltr" */}     
        
        <div className="flex left-0 justify-center h-full w-1/4 m-2">
        <div className="home-profile-edit w-full h-full">
            <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
              <img src={settings} className="m-2" height="15" width="15" />  User Settings
            </div>
          

    <div className="xl:m-5 md:m-5 sm:m-2 m-2 accordion-card mx-auto rounded-xl w-full p-2 h-full">
       
          <div onClick={() => handleActiveLink("account")} 
                  className={`w-full flex user-setting-bg  ${activeLink === "account" && " user-setting-active-link"}`}>
                <button className="flex flex-row justify-between user-setting-btn" onClick={navigateToAccount}>Account 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i></button>
               
              </div>

               <div onClick={() => handleActiveLink("subscription")} 
                  className={`w-full flex user-setting-bg  ${activeLink === "subscription" && " user-setting-active-link"}`}>
                <button className="flex justify-between flex-row user-setting-btn" onClick={navigateToSubscription}>Subscriptions 
                 <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i> </button>
               
              </div>

               <div onClick={() => handleActiveLink("about")} 
                  className={`w-full flex user-setting-bg  ${activeLink === "about" && " user-setting-active-link"}`}>
                <button className="flex flex-row justify-between user-setting-btn" onClick={navigateToAbout}>About Oneyou 
                <i className="fa fa-angle-right user-setting-right-btn self-center float-right flex"></i></button>
                
              </div>
    </div>

        </div>
        </div>
      
        <div className="flex w-full">
      <Outlet/>
      </div>
       </div>

    </div>
    </div>
  );
};

export default Usersettings;
