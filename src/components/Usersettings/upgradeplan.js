import React, {useState} from "react";
import { Accordion } from "react-bootstrap-accordion";
import home from "../../images/home.png";
import file from "../../images/file.png";
import downarrow from "../../images/downarrow.png";
import arrow from "../../images/arrow.png";
import refresh from "../../images/refresh.png";
import downarrowwhite from "../../images/downarrowwhite.png";
import forwardarrow from "../../images/forward-arrow.png";
import settings from "../../images/settings.png";
import tick from "../../images/tick.png"
import deleteicon from "../../images/delete-icon.png";
import settingrefresh from "../../images/setting-refresh.png";
import upiicon from "../../images/upi-icon.png"
import download from "../../images/download.png"
import publishicon from "../../images/publish-icon.png"

const Upgradeplan = () => {

    return (
    <div className="page-background flex self-center align-middle justify-center">
    
     <div className="m-8 flex flex-row w-full h-full settings-page">
    <div className="flex flex-row w-full h-full mt-16" >      
      {/* dir="ltr" */}     
        
        <div className="flex left-0 justify-center w-1/4 m-2">
        <div className="home-profile-edit w-full">
            <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
              <img src={settings} className="m-2" height="15" width="15" />  User Settings
            </div>
          

    <div className="xl:m-5 md:m-5 sm:m-2 m-2 accordion-card mx-auto rounded-xl w-full p-2 h-full">
       
          <Accordion title="Account" className="text-white bg-transparent">
                <div className="flex flex-row ">
                  
                 </div>
              </Accordion>

              <Accordion title="Subscriptions" className="bg-transparent overflow-x-hidden">
                <div className=" h-80 frndslist-dropdown">
                 
                </div>
              </Accordion>
              <Accordion title="About Oneyou" className="bg-transparent overflow-x-hidden">
                <div className=" h-80 frndslist-dropdown">
                 
                </div>
              </Accordion>

    </div>

        </div>
        </div>
        <div className="flex flex-col w-3/4 h-full m-2">
          {/* <div className="flex self-center justify-center mx-auto"> */}
           
            <div className=" flex w-full right-0 ">
              {/*home-about  dir="ltr" */}
             
                <div className="home-about-me w-full">
                    
                     <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
            Upgrade To Premium Plan
            </div>
          
<div className="flex flex-row self-center justify-center  grid grid-cols-1 gap-2 sm:grid sm:grid-cols-2 my-3 sm:gap-2 md:grid md:grid-cols-2 
                md:gap-2 lg:grid lg:grid-cols-2 lg:gap-2 xl:grid xl:grid-cols-2 xl:gap-2">
 <div className="upgrade-card">
    <div className="flex"><span className="basic-text">Basic</span><button className="paid-btn py-2 m-1 px-7">Most Popular</button></div>
    <span className="upgrade-text">Stunning pack of trendy 3D objects</span>

    <div className="flex w-full my-8 border-b pb-2"><span className="dollar-text">$48 </span><span className="month-text self-end align-end px-2 justify-end flex flex-col">/month</span></div>
    
    <div className="flex flex-col w-full border-b pb-2">
    <ul className="flex flex-col text-left float-left">
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" /> Design System</li>
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" />Components</li>
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" /> Lifetime updates</li>
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" /> Commercial license</li>
    </ul>
    </div>
<div className="flex w-full">
    <button className="get-started-btn w-full py-2 my-3 px-7">Get Started</button>
</div>
 </div>
 <div className="upgrade-second-card">

     <div className="flex"><span className="basic-text">Basic</span><button className=" most-popular-second-btn py-2 m-1 px-7">Most Popular</button></div>
    <span className="upgrade-text">Stunning pack of trendy 3D objects</span>

    <div className="flex w-full my-8 border-b pb-2"><span className="dollar-text">$48 </span><span className="month-text self-end align-end px-2 justify-end flex flex-col">/month</span></div>
    
    <div className="flex flex-col w-full border-b pb-2">
    <ul className="flex flex-col text-left float-left">
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" /> Design System</li>
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" />Components</li>
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" /> Lifetime updates</li>
        <li className="ordered-list float-left align-middle flex"><img src={tick} height="13" width="13" className="flex m-1 flex-col float-left self-center text-center alignmiddle justify-center text-left" /> Commercial license</li>
    </ul>
    </div>
<div className="flex w-full">
    <button className="get-started-second-btn w-full py-2 my-3 px-7">Get Started</button>
</div>

 </div>


</div>

            </div>
            </div>
          {/* </div> */}
        </div>
       </div>

    </div>
    </div>
  );
};

export default Upgradeplan;
