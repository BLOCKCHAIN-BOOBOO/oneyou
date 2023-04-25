import React, {useState} from "react";
import { Accordion } from "react-bootstrap-accordion";
import settings from "../../images/settings.png";
import headerlogo from "../../images/header-logo.png"

const Aboutoneyou = () => {

    return (
    <div className="page-background flex self-center align-middle justify-center">
    
     <div className="m-8 flex flex-row w-full h-full settings-page">
    <div className="flex flex-row w-full h-5/6 mt-16" >      
      {/* dir="ltr" */}     
        
        <div className="flex left-0 justify-center h-full w-1/4 m-2">
        <div className="home-profile-edit h-full w-full">
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
           
            <div className=" flex w-full h-full right-0 ">
              {/*home-about  dir="ltr" */}
             
                <div className="home-about-me w-full">
                    
                     <div className="home-profile-edit-header w-full self-center justify-center flex text-center border-b-2">
            About Oneyou.in
            </div>
          
<div className="flex flex-row self-start float-left m-5">
    <div className="flex flex-col payment-header">
        <div className="flex payment-header">
          <span className="flex self-center">Some Content</span> 
        </div>
         <div className="flex py-2"><img src={headerlogo} className=""/></div>
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

export default Aboutoneyou;
